using AngularOdyssey.Models;
using AngularOdyssey.BL.Interfaces;

namespace AngularOdyssey.Controllers.api
{
    public class CardsController : GenericApiController<Card>
    {
        public CardsController(ICardRepository repo)
        {
            this.repositoryBase = repo;
        }
    }
}
