using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularOdyssey.Models
{
    public class PagedListViewModel
    {
        public List<object> data { get; set; }
        //public Paging Paging { get; set; }
        public int total { get; set; }
    }

    public class Paging
    {
        public int Total { get; set; }
        public int NbOfPages { get; set; }
        public int Limit { get; set; }
        public int Offset { get; set; }
        public int Returned { get; set; }
    }
}