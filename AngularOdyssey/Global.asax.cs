using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace AngularOdyssey
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            //Unity
            UnityConfig.RegisterComponents();

            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }

        private const string RootUrl = "~/Home/Index";
        // You can replace "~Home/Index" with whatever holds your app selector (<my-app></my-app>)
        // such as RootUrl="index.html" or any controller action or browsable route

        protected void Application_BeginRequest(Object sender, EventArgs e)
        {
            // Gets incoming request path
            var path = Request.Url.AbsolutePath.ToLower();

            // To allow access to api via url during testing (if you're using api controllers) - you may want to remove this in production unless you wish to grant direct access to api calls from client...
            var isApi = path.StartsWith("/api", StringComparison.InvariantCultureIgnoreCase);
            // To allow access to my .net MVCController for login
            var isAccount = path.StartsWith("/account", StringComparison.InvariantCultureIgnoreCase);

            var isBL = path.StartsWith("/__browserLink", StringComparison.InvariantCultureIgnoreCase);

            if (isApi || isAccount || isBL)
            {
                return;
            }

            // Redirects to the RootUrl you specified above if the server can't find anything else
            if (!System.IO.File.Exists(Context.Server.MapPath(path)))
                Context.RewritePath(RootUrl);
        }
    }
}
