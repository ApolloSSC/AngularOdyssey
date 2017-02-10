using AngularOdyssey.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Security;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using System.Web;
using System.Web.Http;
using System.Text;
using System.Data.SqlTypes;
using System.Reflection;
using OfficeOpenXml;
using System.IO;
using System.Web.Mvc;
using System.Net.Http.Headers;

namespace AngularOdyssey.Controllers.api
{
    public class UserController : GenericApiController<ApplicationUser>
    {
        protected ApplicationUserManager _userManager;
        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? HttpContext.Current.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }
        public override IEnumerable<ApplicationUser> Get()
        {
            var users = UserManager.Users.ToList();
            return users;
        }

        public override ApplicationUser Get(string id)
        {
            return UserManager.Users.FirstOrDefault(u => u.Id.Equals(id));
        }

        public override PagedListViewModel GetWithParams()
        {

            var parameters = Request.GetQueryNameValuePairs();
            int startIndex = 0;
            int nbPages = 1;
            int pageSize = -1;
            string sort = string.Empty;
            bool reverse = false;

            IEnumerable<ApplicationUser> listElements = UserManager.Users;
            foreach (var p in parameters)
            {
                switch (p.Key)
                {
                    case START_PARAM:
                        int.TryParse(p.Value, out startIndex);
                        break;
                    case PAGE_SIZE_PARAM:
                        int.TryParse(p.Value, out pageSize);
                        break;
                    case SEARCH_PARAM:
                        var filters = parameters.Where(param => param.Key == FILTERS_PARAM);
                        if (filters.Any())
                        {
                            listElements = listElements.Where(e => genericWhere(e, p.Value, filters));
                        }
                        else
                        {
                            listElements = listElements.Where(e => genericWhere(e, p.Value, null));
                        }
                        break;
                    case SORT_PARAM:
                        sort = p.Value;
                        if ( p.Value.EndsWith("asc"))
                        {
                            sort = sort.Substring(0, sort.Length - 3);
                        }
                        else if ( p.Value.EndsWith("desc") )
                        {
                            reverse = true;
                            sort = sort.Substring(0, sort.Length - 4);
                        }
                        break;
                }
            }

            //Sort
            if (!string.IsNullOrEmpty(sort))
            {
                if (!reverse)
                {
                    listElements = listElements.OrderBy(c => c.GetType().GetProperty(sort).GetValue(c, null));
                }
                else
                {
                    listElements = listElements.OrderByDescending(c => c.GetType().GetProperty(sort).GetValue(c, null));
                }
            }

            //Pages calculation
            int total = listElements.Count();
            if (pageSize > 0)
            {
                nbPages = (total - 1) / pageSize + 1;

                //Get Result page
                listElements = listElements.Skip(startIndex).Take(pageSize);
            }

            listElements = listElements.ToList();

            // Return the list of customers
            return new PagedListViewModel
            {
                data = listElements.ToList<object>(),
                total = total
            };
        }

        public string GetCsv()
        {
            var users = UserManager.Users.ToList();

            StringBuilder sb = new StringBuilder();
            //Get properties using reflection.
            IList<PropertyInfo> propertyInfos = typeof(ApplicationUser).GetProperties();
            
            //add header line.
            foreach (PropertyInfo propertyInfo in propertyInfos)
            {
                sb.Append(propertyInfo.Name).Append(";");
            }
            sb.Remove(sb.Length - 1, 1).AppendLine();

            //add value for each property.
            foreach (ApplicationUser obj in users)
            {
                foreach (PropertyInfo propertyInfo in propertyInfos)
                {
                    sb.Append(MakeValueCsvFriendly(propertyInfo.GetValue(obj, null))).Append(";");
                }
                sb.Remove(sb.Length - 1, 1).AppendLine();
            }

            return sb.ToString();
        }

        //get the csv value for field.
        private string MakeValueCsvFriendly(object value)
        {
            if (value == null) return "";
            if (value is Nullable && ((INullable)value).IsNull) return "";
            string output = "";
            if (value.GetType().GetInterface("IEnumerable") == null || value.GetType() == typeof(string))
            {


                if (value is DateTime)
                {
                    if (((DateTime)value).TimeOfDay.TotalSeconds == 0)
                        return ((DateTime)value).ToString("yyyy-MM-dd");
                    return ((DateTime)value).ToString("yyyy-MM-dd HH:mm:ss");
                }
                output = value.ToString();

                if (output.Contains(";") || output.Contains("\""))
                    output = '"' + output.Replace("\"", "\"\"") + '"';

            }
            else
            {
                var enumerable = value as System.Collections.IEnumerable;
                if (enumerable != null)
                {
                    foreach (var item in enumerable)
                        output += MakeValueCsvFriendly(item) + ' ';
                }
                else
                    output = value.ToString();

            }
            return output;
        }

        public HttpResponseMessage GetXlsx()
        {

            string path = HttpContext.Current.Server.MapPath("~/App_Data/tmp.xlsx");

            if (File.Exists(path))
            {
                File.Delete(path);
            }
            using (ExcelPackage excel = new ExcelPackage(new FileInfo(path)))
            {
                var workSheet = excel.Workbook.Worksheets.Add("Sheet1");
                workSheet.Cells[1, 1].LoadFromCollection(UserManager.Users.ToList(), true);
                var fileStream = new MemoryStream();
                excel.Save();
                //fileStream.Position = 0;
            }
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(path, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType =
            new MediaTypeHeaderValue("application/octet-stream");
            return result;
        }

        [System.Web.Http.HttpPost]
        public override ApplicationUser Post(ApplicationUser user)
        {
            if (ModelState.IsValid)
            {
                string password = user.PasswordHash;
                user.PasswordHash = null;
                var chkUser = UserManager.Create(user, password);
                if (chkUser.Succeeded)
                {
                    return user;
                }
                else
                {
                    throw new Exception(string.Format("Impossible de créer l'utilisateur{0}", chkUser.Errors.FirstOrDefault()));
                }
            }
            return null;
        }

        [System.Web.Http.HttpPut]
        // PUT api/<controller>/5
        public override void Put(string id, ApplicationUser user)
        {
            if (ModelState.IsValid)
            {
                var existingUser = UserManager.FindById(id);
                existingUser.UserName = user.UserName;
                existingUser.PhoneNumber = user.PhoneNumber;
                existingUser.Email = user.Email;
                if (user.PasswordHash != null && user.PasswordHash.Length > 0)
                {
                    var newPasswordHash = new PasswordHasher().HashPassword(user.PasswordHash);
                    existingUser.PasswordHash = newPasswordHash;
                }

                UserManager.Update(existingUser);
            }
        }
    }
}