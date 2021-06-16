var yql = 'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=manusquall';
$.getJSON(yql, function (data) {
    
    if (data) {
        for (i = 0; i < data.length; i++) {
            //console.log(data[i]["repo"]);
            document.getElementsByClassName("squall-pinner-area")[0].innerHTML += ' <div class="col-md-6 col-lg-4 mb-5"> <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal' + (i + 1) + '"> <div data="https://github.com/ManuSquall/' + (data[i]["repo"]) +'" class="github-pinner flat" style="visibility: visible;"></div> </div> </div';         
        }else {
            var repos;
            document.getElementsByClassName("squall-pinner-area")[0].innerHTML = '<div class="col-md-6 col-lg-4 mb-5">< div class="portfolio-item mx-auto" data - bs - toggle="modal" data - bs - target="#portfolioModal1" ><div data="https://github.com/ManuSquall/Restaurant-Web-App" class="github-pinner flat" style="visibility: visible;"></div></div ></div ><div class="col-md-6 col-lg-4 mb-5"><div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2"><div data="https://github.com/ManuSquall/squalltalk" class="github-pinner flat" style="visibility: visible;"></div></div></div><div class="col-md-6 col-lg-4 mb-5"><div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3"><div data="https://github.com/ManuSquall/QIUM-project" class="github-pinner flat" style="visibility: visible;"></div></div></div><div class="col-md-6 col-lg-4 mb-5 mb-lg-0"><div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4"><div data="https://github.com/ManuSquall/basic_winform_calculator" class="github-pinner flat" style="visibility: visible;"></div></div></div><div class="col-md-6 col-lg-4 mb-5 mb-md-0"><div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5"><div data="https://github.com/ManuSquall/Tweeter_SquallBot" class="github-pinner flat" style="visibility: visible;"></div></div></div><div class="col-md-6 col-lg-4"><div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6"><div data="https://github.com/ManuSquall/banque_du_peuple" class="github-pinner flat" style="visibility: visible;"></div></div></div>';
        }
    }
});


            



