// var count_particles, stats, update;
//   stats = new Stats;
//   stats.setMode(0);
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//   document.body.appendChild(stats.domElement);
//   count_particles = document.querySelector('.js-count-particles');
//   update = function() {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//       count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
//   };
//   requestAnimationFrame(update);



$(window).mousemove(function(event) {

  var clientY = event.clientY
  var clientX = event.clientX

var animeX = clientX / 40;
var animeY = clientY / 40;


$(".pens").css("right",animeX);
$(".pens").css("top",animeY);


});















$(document).scroll(function(){


     var scroli =   $(this).scrollTop();
     // console.log(scroli);

     if (scroli > 200) {

      $(".navigation").addClass("scrol_nav");
      $(".nav-link").css("color","#a0a0a0");

     }else if (scroli < 200) {


    $(".navigation").removeClass("scrol_nav");
    $(".nav-link").css("color","#fff");

     };

})





$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 90
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      });
    }  // End if
  });
});





// resizze bg moshordes

$(".navbar-toggler").on("click",function(){


$(".navigation").toggleClass("nav_bg");


})

function navv(){

if ($(window).width() > 992) {

  $(".navigation").removeClass("nav_bg");
 
};

}

  $(document).ready(navv);


  $(window).on('resize',navv);





//


// nav active class


  $(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 600, function() {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });
});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop()+100;

    // Show/hide menu on scroll
    // if (scrollDistance >= 850) {
    //     $('nav').fadeIn("fast");
    // } else {
    //     $('nav').fadeOut("fast");
    // }
  
    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('.nav-item a.tokk').removeClass('tokk');
            $('.nav-item a').eq(i).addClass('tokk');
        }
    });
}).scroll();






$(".nav-link").on("click",function(){

 $(".navbar-toggler").addClass("collapsed");
 $(".navbar-collapse").addClass("collapse");
 $(".navbar-collapse").removeClass("show");


})



// portfolio filter
$(function () {
    
    var filterList = {
    
      init: function () {
      
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixItUp({
          selectors: {
            target: '.portfolio',
            filter: '.filter' 
          },
          load: {
            filter: '.app'  
          }     
        });               
      
      }

    };
    
    // Run the show!
    filterList.init();
    
    
  }); 











//   setInterval(function(){

//   $(".skils_progress").each(function(){

//   var ChildW = $(this).width(); 
//   var ParentW = $(this).parent().width();
//   var Proc = Math.floor((ChildW / ParentW) * 100)

//   $(this).find('span').text(Proc + "%");

// })

//   },20);












$(window).on('scroll', check_if_in_view);
$(window).on('scroll resize', check_if_in_view);
$(window).trigger('scroll');

function check_if_in_view() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.skils_progress'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

   var clasArr = ["grapchice","frameworks","design","ui_design"];  
     
    $('.skils_progress').each(function(index,current){
      $(this).addClass(clasArr[index]);
      });


     setInterval(function(){

  $(".skils_progress").each(function(){

  var ChildW = $(this).width(); 
  var ParentW = $(this).parent().width();
  var Proc = Math.floor((ChildW / ParentW) * 100)

  $(this).find('span').text(Proc + "%");

})

  },20);
     
    }
  });
}




if ($(window).width() > 992) {
 $(".blog_box").css("opacity", "0");
$(window).on('scroll', check_if_in_view1);
$(window).on('scroll resize', check_if_in_view1);
$(window).trigger('scroll');

function check_if_in_view1() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.offer_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".offer_box").css("opacity", "1");
      $(".offer_box").addClass("flipInX");
     
    }
  });
}

}




if ($(window).width() > 992) {

 $(".blog_box").css("opacity", "0");
$(window).on('scroll', check_if_in_view2);
$(window).on('scroll resize', check_if_in_view2);
$(window).trigger('scroll');

function check_if_in_view2() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop() -100;
  var window_bottom_position = (window_top_position + window_height);

  $.each($('.blog_box'), function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

   
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {

  
      
      $(".blog_box").css("opacity", "1");
      $(".blog_box").addClass("rotateIn");
     
    }
  });
}

};


