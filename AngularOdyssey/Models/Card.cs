using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AngularOdyssey.Models
{
    public class Card
    {
        [Key]
        public int CardId { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Content { get; set; }
        
        public int PanelId { get; set; }

        [ForeignKey("PanelId")]
        public virtual Panel Panel { get; set; }
    }
}