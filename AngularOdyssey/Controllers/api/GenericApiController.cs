using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;

namespace AngularOdyssey.Controllers.api
{
    public class GenericApiController<T> : ApiController where T : class
    {
        #region Constantes
        public const string START_PARAM = "$skip";
        public const string PAGE_SIZE_PARAM = "$top";
        public const string SEARCH_PARAM = "search";
        public const string SORT_PARAM = "$orderby";
        public const string FILTERS_PARAM = "filters";
        #endregion 
        
        protected string includes;

        // GET api/<controller>
        public virtual IEnumerable<T> Get()
        {
            return null;
        }
    
        // GET api/<controller>/5
        public virtual T Get(string id)
        {
            return null;
        }

        // POST api/<controller>
        public virtual T Post(T objet)
        {
            if (ModelState.IsValid)
            {
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
            }
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}