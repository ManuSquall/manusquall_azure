using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using System.Net.Http;

namespace manusquall.Controllers
{
    public class PortfolioController : Controller
    {
        // GET: PortfolioController
        public ActionResult Index()
        {
            Task.WaitAll(ExecuteAsync());

         
            ViewData["pinnedRepos"] = "";
            return View();
        }

        public static async Task ExecuteAsync()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri("https://api.github.com");
            var token = "";

            client.DefaultRequestHeaders.UserAgent.Add(new System.Net.Http.Headers.ProductInfoHeaderValue("AppName", "1.0"));
            client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));
            client.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Token", token);

            var response = await client.GetAsync("/manusquall");
            Console.WriteLine(response);
        }


    }
}
