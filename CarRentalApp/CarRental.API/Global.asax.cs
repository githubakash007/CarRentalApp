using CarRental.Data.Repositories;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;
using SimpleInjector.Lifestyles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace CarRental.API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            var container = new Container();

            container.Options.DefaultScopedLifestyle = new AsyncScopedLifestyle();
            
            container.Register<ICarRepository, CarRepository>(Lifestyle.Transient);
           
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);


            container.Verify();

            //AutoMapperConfig.Initialize();
            GlobalConfiguration.Configure(WebApiConfig.Register);

            GlobalConfiguration.Configuration.DependencyResolver =
              new SimpleInjectorWebApiDependencyResolver(container);
        }
    }
}
