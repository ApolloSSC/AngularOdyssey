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
            return UserManager.Users;
        }

        public override ApplicationUser Get(string id)
        {
            return UserManager.Users.FirstOrDefault(u => u.Id.Equals(id));
        }

        [HttpPost]
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

        [HttpPut]
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