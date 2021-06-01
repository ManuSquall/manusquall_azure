using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace manusquall.Controllers
{
    public class PortfolioController : Controller
    {
        // GET: PortfolioController
        public ActionResult Index()
        {
            return View();
        }

        
    }
}
