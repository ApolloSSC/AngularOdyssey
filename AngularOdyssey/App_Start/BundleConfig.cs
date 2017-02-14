using System.Web;
using System.Web.Optimization;

namespace AngularOdyssey
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/gridstack").Include(
                        "~/libs/lodash/lodash.js",
                        "~/libs/gridstack/dist/gridstack.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Styles/css").Include(
                      "~/libs/ng2-toastr/bundles/ng2-toastr.min.css",
                      "~/libs/gridstack/dist/gridstack.css",
                      "~/libs/gridstack/dist/gridstack-extra.css"));
            // Style less
            bundles.Add(new LessBundle("~/Styles/less")
                .Include("~/Content/less/global.less", new CssRewriteUrlTransform()));


            bundles.Add(new ScriptBundle("~/bundles/systemjs")
                .Include("~/libs/core-js/client/shim.min.js")
                .Include("~/libs/zone.js/dist/zone.js")
                .Include("~/libs/reflect-metadata/Reflect.js")
                .Include("~/libs/systemjs/dist/system.src.js")
                .Include("~/Scripts/systemjs.config.js"));
        }
    }
}
