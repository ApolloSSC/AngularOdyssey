using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using AngularOdyssey.Models;
using AngularOdyssey.BL.Interfaces;

namespace AngularOdyssey.Controllers.api
{
    public class GenericApiController<T> : ApiController where T : class
    {
        #region Constantes
        public const string START_PARAM = "skip";
        public const string PAGE_SIZE_PARAM = "take";
        public const string SEARCH_PARAM = "search";
        public const string SORT_PARAM = "sort";
        public const string FILTERS_PARAM = "filters";
        #endregion


        protected IRepository<T> repositoryBase;
        protected string includes;

        // GET api/<controller>
        public virtual IEnumerable<T> Get()
        {
            return repositoryBase.Get();
        }

        public virtual PagedListViewModel GetWithParams()
        {
            setIncludes();

            var parameters = Request.GetQueryNameValuePairs();
            int startIndex = 0;
            int nbPages = 1;
            int pageSize = -1;
            string sort = string.Empty;
            bool reverse = false;

            if (String.IsNullOrEmpty(includes))
            {
                includes = "";
            }

            IEnumerable<T> listElements = repositoryBase.Get(null, null, includes);
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
                        if (p.Value.EndsWith("asc"))
                        {
                            sort = sort.Substring(0, sort.Length - 3);
                        }
                        else if (p.Value.EndsWith("desc"))
                        {
                            reverse = true;
                            sort = sort.Substring(0, sort.Length - 4);
                        }
                        break;
                }
            }

            //Sort
            if (sort != string.Empty)
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
                if (startIndex >= total)
                {
                    startIndex = 0;
                }

                //Get Result page
                listElements = listElements.Skip(startIndex).Take(pageSize);
            }

            listElements = listElements.ToList();

            // Return the list of customers
            return new PagedListViewModel
            {
                data = listElements.ToList<object>(),
                total = total
                //Paging = new Paging
                //{
                //    Total = total,
                //    NbOfPages = nbPages,
                //    Limit = pageSize,
                //    Offset = startIndex,
                //    Returned = listElements.Count(),
                //}
            };
        }

        protected void setIncludes()
        {
        }

        /// <summary>
        /// Construction d'un where en fonction de tous les chanmps de type string de la table
        /// </summary>
        /// <param name="objet"></param>
        /// <param name="pValue"></param>
        /// <returns></returns>
        protected static bool genericWhere(T objet, string pValue, IEnumerable<KeyValuePair<string, string>> filters)
        {
            var res = false;
            foreach (PropertyInfo prop in typeof(T).GetProperties())
            {
                if (filters == null || !filters.Any() || filters.Where(f => f.Value.Contains(prop.Name)).Any())
                {
                    if (prop.PropertyType == typeof(string))
                    {
                        string strValue = (string)typeof(T).GetProperty(prop.Name).GetValue(objet, null);
                        if (!string.IsNullOrEmpty(strValue))
                        {
                            if (strValue.ToLower().Contains(pValue.ToLower()))
                            {
                                res = true;
                                break;
                            }
                        }

                    }
                    if (prop.PropertyType == typeof(DateTime) || prop.PropertyType == typeof(DateTime?) || prop.PropertyType == typeof(Nullable<DateTime>))
                    {
                        DateTime? dtValue = (DateTime?)typeof(T).GetProperty(prop.Name).GetValue(objet, null);
                        if (dtValue != null)
                        {
                            DateTime parsedDate = new DateTime();
                            DateTime.TryParse(pValue, out parsedDate);
                            if (!parsedDate.Equals(new DateTime()) && parsedDate.Equals(dtValue))
                            {
                                res = true;
                                break;
                            }
                        }

                    }
                }

            }

            return res;
        }

        // GET api/<controller>/5
        public virtual T Get(string id)
        {
            int intId = int.Parse(id);
            T objet = repositoryBase.GetByID(intId);
            return objet;
        }

        // POST api/<controller>
        public virtual T Post(T objet)
        {
            if (ModelState.IsValid)
            {
                repositoryBase.Insert(objet);
                repositoryBase.SaveChanges();
                return objet;
            }
            return null;
        }

        // PUT api/<controller>/5
        public virtual void Put(string id, T objet)
        {
            int intId = int.Parse(id);
            if (ModelState.IsValid)
            {
                repositoryBase.Update(objet);
                repositoryBase.SaveChanges();

            }
        }
        
        // DELETE api/<controller>/5
        public virtual void Delete(int id)
        {
            T objet = repositoryBase.GetByID(id);
            if (objet != null)
            {
                repositoryBase.Delete(id);
                repositoryBase.SaveChanges();
            }

        }
    }
}