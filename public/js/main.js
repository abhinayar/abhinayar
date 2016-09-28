/* JS for AbhiNayar.com */

$(document).ready(function(){
    function populateShowcase(showcaseLimiter){        
        $(".showcase .item").fadeOut("fast").addClass("hidden");
        
        $items = $(".showcase .item." + showcaseLimiter).fadeIn("fast").removeClass("hidden");
        $($items).removeClass("round-right");
        $($items).removeClass("round-left");
        
        $.each($items, function(i, item){            
            var projName = $(item).attr("data-target");
            var bgItem = document.createElement("div");
            $(bgItem).css("background-image", "url('./public/img/projects/" + projName + ".jpg')");
            
            $(bgItem).addClass("bgItem").appendTo(item);
            
            console.log(projName, showcaseLimiter);
        });
        
        $($items).eq(0).addClass("round-left");
        $($items).eq(2).addClass("round-right");
        
    }
    
    populateShowcase("all");
    
    $(".portfolio-links .link").click(function(){
        $(".portfolio-links .link").removeClass("active");
        $(this).addClass("active");
        var target = $(this).attr("data-target");
        populateShowcase(target);
    });
    
    $("a.scroll").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500); 
    });
});

$(window).load(function(){    
    setTimeout(function(){
        $("body .loader-bg").fadeOut("slow");
        $("body .container-fluid").fadeIn("slow").removeClass("hidden");
    }, 800);
});