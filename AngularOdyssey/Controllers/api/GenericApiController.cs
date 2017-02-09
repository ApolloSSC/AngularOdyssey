using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Web.Http;
using AngularOdyssey.Models;

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
        
        protected string includes;

         public virtual PagedListViewModel GetWithParams()
         {
             return null;
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