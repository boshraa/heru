$(document).ready(function(){
    /** Start Globals **/
    /* Required Inputs */
  $("input,textarea").each(function(){
    if($(this).attr('required')){
      $(this).parent().append("<span class='required'>Required</span>");
    }
  })

  $("input,textarea").focus(function(){
    $(this).parent().find(".required").addClass("hide");
  })

  $("input,textarea").focusout(function(){
    if(!$(this).val()){
      $(this).parent().find(".required").removeClass("hide");
    }
  })
    /* Required Inputs */
    /* Cookies */
    $('.container-cookies .content .actions > a').on('click',function(e){
      e.preventDefault();
      var icon = $(this).find('i');
      if(icon.hasClass('fa-angle-down')){
        icon.removeClass('fa-angle-down').addClass('fa-angle-up');
      }else{
        icon.removeClass('fa-angle-up').addClass('fa-angle-down');
      }
      $('.container-cookies .settings').slideToggle(600);
    })
    $('.container-cookies .content .actions > button').on('click',function(){
        acceptCookies();
    })
    /* Cookies */
    /* Start Navbar*/
    /* Click Burger Menu Button And Show Main Menu */
    $(".header .nav-container .links .burger-menu").on('click',function(){
        $(this).toggleClass("clicked");
        $(".header .nav-container .main-menu").toggleClass("show");
    })
    /* Click Burger Menu Button And Show Main Menu */
    /* Change Language Style */
    $('.header .nav-container .links .langs-menu > li > a').click(function(){
        $(this).parent().addClass('active').siblings().each(function(){
          $(this).removeClass('active');
      });
    })
  /* Change Language Style */
  /* End Navbar*/
  /** End Globals **/
  /** Start Contact Page **/
  // Show Map
  $('.contact-main .main-content .content .infos .main-btn').on('click',function(e){
    e.preventDefault();
    $('.contact-main .main-content').addClass('hide');
      $('.contact-main .hide-map').addClass('show');
      $('.contact-main .map-link').addClass('active');
  });
  // Hide Map
  $('.contact-main .hide-map').on('click',function(e){
    e.preventDefault();
    $('.contact-main .main-content').removeClass('hide');
      $('.contact-main .hide-map').removeClass('show');
      $('.contact-main .map-link').removeClass('active');
  });
  /** End Contact Page **/

  /** Start Pricing Step 2 Page **/
  $('.pricing-main .main-content .content .pricing-categories .category .price-category-details > li .title > i').click(function(){
    $(this).toggleClass('clicked');
    $(this).parent().next().slideToggle(200);
    $(this).parent().parent().siblings().find('.category-details-content').slideUp(200);
    $(this).parent().parent().siblings().find('.title > i').removeClass('clicked');
  });

  $('.pricing-main .main-content .content .pricing-categories .category .details-btn').click(function(){
    $(this).parent().find('.price-category-details').slideToggle(200);
    $(this).toggleClass('clicked');
  });
  /** End Pricing Step 2 Page **/

  /** Start Pricing Step 3 Page **/
  $('.pricing-main .main-content .content .contact-form .main-btn').click(function(){
    giveFive();
    $('.pricing-main .main-content .custom-progress > span').addClass('completed');
  });
  /** End Pricing Step 3 Page **/
  /** Start Pricing Tailor Mode Page **/
  $('.tailor-pricing-main .main-content .content .contact-form .main-btn').click(function(){
    giveFive();
    $('.tailor-pricing-main .main-content .custom-progress > span').addClass('completed');
  });
  /** End Pricing Step 3 Page **/
  /** Start Index Page **/
    /** Run Counter In Index Page**/
      runCounter();
      /** Run Typing In Index Page**/
      var strings = ["react","laravel","web good","single page applications","cms implementation"];
      Typing(strings);
  /** End Index Page **/
  
  // Functions
  function runCounter () {
    $('.main-content .statistics .number').each(function(){
      const This = $(this);
      $({Count: This.text()}).animate(
        {Count: This.parent().attr("data-count")},
        {
          duration: 2000,
          easing: "linear",
          step: function(){
            This.text(Math.floor(this.Count))
          },
          complete: function(){
            This.text(this.Count)
          }
        }
      )
    })
  }
  // Typing in index page
  function Typing(typeStrings){
    var typed = new Typed('.main-content .main-title .typed',{
      strings: [...typeStrings],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
    });
    return typed
  }
  // Accept Cookies
  function acceptCookies(){
    $('.container-cookies').hide();
  }
  //Show Give Us Five Modal
  function giveFive(){
    $('.finish-modal').modal('show');
  }
});
