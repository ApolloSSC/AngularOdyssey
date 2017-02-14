using AngularOdyssey.BL.Interfaces;
using AngularOdyssey.BL.Repositories;
using Microsoft.Practices.Unity;
using System.Web.Http;
using System.Web.Mvc;
using Unity.Mvc5;

namespace AngularOdyssey
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IPanelRepository, PanelRepository>();
            container.RegisterType<ICardRepository, CardRepository>();


            GlobalConfiguration.Configuration.DependencyResolver = new Unity.WebApi.UnityDependencyResolver(container);
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}