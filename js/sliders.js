$(()=>{
    $('.mosaico .container .wraper-mosaico').slick({
        centerMode: false,
        arrows:false,
       slidesToShow:5,
       responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
        },
        ,{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2
            }
        }
    ]
        });

        $('.tratamento .container').slick({
            centerMode:false,
            arrows:false,
            slidesToShow: 3,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    infinite: false,
                    arrows: false,
                    dots: true,
                    centerMode: true,
                    slidesToShow: 2
                }
            }]
        });

        $('.depoimentos .container').slick({
            centerMode:false,
            arrows:false,
            slidesToShow:1,
            dots:true
        })

})