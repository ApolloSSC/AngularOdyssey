using System.Web;
using System.Web.Optimization;

namespace AngularOdyssey
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/ext-js").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui-{version}.js",
                        "~/Scripts/bootstrap.js",
                        "~/Scripts/respond.js",
                        "~/libs/assets/bootstrap-confirmation.min.js",
                        "~/libs/assets/jquery.ui.touch-punch.js",
                        "~/libs/assets/underscore.js",
                        "~/libs/assets/gridstack.js",
                        "~/libs/ng2-toastr.min.js"
                        ));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Styles/css").Include(
                      "~/libs/assets/ng2-toastr.min.css",
                      "~/libs/assets/gridstack.css",
                      "~/libs/assets/gridstack-extra.css"));
            // Style less
            bundles.Add(new LessBundle("~/Styles/less")
                .Include("~/Content/less/global.less", new CssRewriteUrlTransform()));
#if !DEBUG
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
