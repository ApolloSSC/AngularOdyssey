using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Routing;

namespace AngularOdyssey
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "Web API RPC",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { },
                constraints: new { action = @"[A-Za-z]+", httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
            );
            config.Routes.MapHttpRoute(
                name: "Web API Resource GUID",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { },
                constraints: new { id = @"^[{(]?[0-9A-F]{8}[-]?([0-9A-F]{4}[-]?){3}[0-9A-F]{12}[)}]?$" }
            );
            config.Routes.MapHttpRoute(
                name: "Web API Resource int",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { },
                constraints: new { id = @"\d+" }
            );
            // GET /api/{resource}
            config.Routes.MapHttpRoute(
                name: "Web API Get All",
                routeTemplate: "api/{controller}",
                defaults: new { action = "Get" },
                constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) }
                );

            // PUT /api/{resource}
            config.Routes.MapHttpRoute(
                name: "Web API Update",
                routeTemplate: "api/{controller}",
                defaults: new { action = "Put" },
                constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Put) }
                );

            // POST /api/{resource}
            config.Routes.MapHttpRoute(
                name: "Web API Post",
                routeTemplate: "api/{controller}",
                defaults: new { action = "Post" },
                constraints: new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) }
                );

            // POST /api/{resource}/{action}
            config.Routes.MapHttpRoute(
                name: "Web API RPC Post",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { },
                constraints: new { action = @"[A-Za-z]+", httpMethod = new HttpMethodConstraint(HttpMethod.Post) }
                );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            config.Routes.MapHttpRoute(
                name: "GetWithParamsApi",
                routeTemplate: "api/{controller}/getWithParams",
                defaults: new { method = "getWithParams" }
            );

            config.Routes.MapHttpRoute(
                name: "ExportCsvApi",
                routeTemplate: "api/{controller}/getCsv",
                defaults: new { method = "getCsv" }
            );

            config.Routes.MapHttpRoute("DefaultApiWithAction", "Api/{controller}/{action}");
            config.Routes.MapHttpRoute("DefaultApiWithId", "Api/{controller}/{id}", new { action = "GetById", id = RouteParameter.Optional }, new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });
            config.Routes.MapHttpRoute("DefaultApiGet", "Api/{controller}", new { action = "Get" }, new { httpMethod = new HttpMethodConstraint(HttpMethod.Get) });
            config.Routes.MapHttpRoute("DefaultApiPost", "Api/{controller}", new { action = "Post" }, new { httpMethod = new HttpMethodConstraint(HttpMethod.Post) });

        }
    }
}
