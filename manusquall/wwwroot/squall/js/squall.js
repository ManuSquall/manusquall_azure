var yql = 'https://gh-pinned-repos-5l2i19um3.vercel.app/?username=manusquall';

$.getJSON(yql, function (data) {
    
    if (data) {
        for (i = 0; i < data.length; i++) {
            //console.log(data[i]["repo"]);
            console.log("squall");
            document.getElementsByClassName("squall-pinner-area")[0].innerHTML += ' <div class="col-md-6 col-lg-4 mb-5"> <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal' + (i + 1) + '"> <div data="https://github.com/ManuSquall/' + (data[i]["repo"]) +'" class="github-pinner flat" style="visibility: visible;"></div> </div> </div';         
        }
    } else {
        var repo = ["Restaurant-Web-App", "squalltalk", "QIUM-project", "basic_winform_calculator", "Tweeter_SquallBot", "banque_du_peuple"];
        for (i = 0; i < repo.length; i++) {
            //console.log(data[i]["repo"]);
            document.getElementsByClassName("squall-pinner-area")[0].innerHTML += ' <div class="col-md-6 col-lg-4 mb-5"> <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal' + (i + 1) + '"> <div data="https://github.com/ManuSquall/' + (repo[i]) + '" class="github-pinner flat" style="visibility: visible;"></div> </div> </div';
        }
    }
});


            



