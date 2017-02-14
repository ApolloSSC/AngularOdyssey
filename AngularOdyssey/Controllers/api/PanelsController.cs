using AngularOdyssey.Models;
using AngularOdyssey.BL.Interfaces;
using System.Globalization;
using System;

namespace AngularOdyssey.Controllers.api
{
    public class PanelsController : GenericApiController<Panel>
    {
        ICardRepository cardRepo;
        CultureInfo culture = new CultureInfo("fr-FR");

        public PanelsController(IPanelRepository repo, ICardRepository cardrepo)
        {
            this.repositoryBase = repo;
            this.cardRepo = cardrepo;
        }
        // PUT api/<controller>/5
        public override void Put(string id, Panel panel)
        {
            panel.LastModified = DateTime.Now;
            base.Put(id, panel);
            if (ModelState.IsValid)
            {
                foreach (Card card in panel.Cards)
                {
                    cardRepo.Update(card);
                }
                cardRepo.SaveChanges();
            }
        }
        // POST api/<controller>
        public override Panel Post(Panel panel)
        {
            panel.CreatedOn = DateTime.Now;
            panel.LastModified = panel.CreatedOn;
            return base.Post(panel);
        }
    }
}
