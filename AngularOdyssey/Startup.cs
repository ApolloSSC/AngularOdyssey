using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularOdyssey.Startup))]
namespace AngularOdyssey
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
