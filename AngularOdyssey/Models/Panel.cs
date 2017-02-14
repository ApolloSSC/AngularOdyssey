using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularOdyssey.Models
{
    public class Panel
    {
        [Key]
        public int PanelId { get; set; }
        public string Title { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime LastModified { get; set; }

        public virtual ICollection<Card> Cards { get; set; }
    }
}