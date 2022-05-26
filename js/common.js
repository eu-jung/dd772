var swiper = new Swiper(".topsw", {
  navigation: {
	nextEl: ".swiper-button-next",
	prevEl: ".swiper-button-prev",
  },
  loop:true,
});


jQuery(function($){


	var $tab_list = $('.tab.list');
	$tab_list.removeClass('jx').find('ul ul').hide();
	$tab_list.find('li li.active').parents('li').addClass('active');
	$tab_list.find('li.active>ul').show();
	$tab_list.each(function(){
		var $this = $(this);
		$this.height($this.find('li.active>ul').height()+40);
	});
	function listTabMenuToggle(event){
		var $this = $(this);
		$this.next('ul').show().parent('li').addClass('active').siblings('li').removeClass('active').find('>ul').hide();
		$this.closest('.tab.list').height($this.next('ul').height()+40);
		if($this.attr('href') === '#'){
			return false;
		}
	}
	$tab_list.find('>ul>li>a').click(listTabMenuToggle).focus(listTabMenuToggle);


   // $('.sub').css('display','none');
   $(".quickt").click(function() {	 
	$(".quickboxw").css("display","block")  ; 
	$(".quickt").css("display","none")  ; 
	$(".quicktover").css("display","block")  ; 
   });
   $(".quicktover").click(function() {	 
	$(".quickboxw").css("display","none")  ; 
	$(".quickt").css("display","block")  ; 
	$(".quicktover").css("display","none")  ; 
   });

   

   
   $("nav > ul > li > a, .subm > li> a").click(function() {			
        var display=$(this).next('.sub').css('display');
		
        if (display == "none") {          
            $(this).next('.sub').css('display', 'block');		
			$(this).addClass("sson");
        } else {         
            $(this).next('.sub').css('display', 'none');
			$(this).removeClass("sson");   	
        }
    });



 $(".has-child").click(function(){	
 //$('.navSub>ul>li>ul').css("display","none");
  //$(this).next().toggle();
 // $('.gnb-area-wrap').css("height", $(".subm").height()+100);
 });


 $(".gnb >ul >li >a").hover(function(){	
		$('.gnb-area .navSub,  .gnb-area-wrap').show();	
		
  });
  
 $(".teatsc").click(function(){	
		$('.teatsc-box').toggle();
  });
  
   $(".myearc").click(function(){	
		$('.mtcs ul').toggle();
  });
  
  
  
  
$(".gnb-area").on('mouseleave', function(){
		$('.gnb-area .navSub').hide();
		$(".black_shadow").hide();    
		$(".gnb-area-wrap").hide();
	});

 $(".tipbox").click(function(){	
  $(".tipcont").slideToggle();
 });
 
  $(".toggleopen p").click(function(){  
   
    var bb=$(this).text();

	if(bb=='모두열기'){ 
		$(this).text('모두닫기');
	}
	else{ 
		$(this).text('모두열기'); 
	}


	var aa=$('.weekdetail').css('display');		
        if (aa == "none") {          
            $('.weekdetail').css('display', 'block');		
			
        } else {         
            $('.weekdetail').css('display', 'none');
				
        }

	
 });
 
 
 
 
  $(".togglebtn").click(function(){	
    $(this).parent().parent().find(".weekdetail").toggle();
	$(this).parent().toggleClass("on");
 });
 
 



$('.site_close').hide();
	$('.site_open').click(function(){
		$(this).hide();
		$('.site_list').show();
		$('.site_close').show();
	})
	
	$('.site_close').click(function(){
		$(this).hide();
		$('.site_open').show();
		$('.site_list').hide();
	})	
	$('.footer .select_box ul li a').click(function(){
		  $('.site_list').hide();
		  $('.site_close').hide();
		  $('.site_open').show();
     });
	 
	
scroll = $(window).scrollTop();		
	$('.q-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});


	$(".btn_more_opt.is_list_btn").on("click", function(e) {
		e.stopPropagation();
		$(this).parent().parent().find(".is_list_btn").show();
});
	$(document).on("click", function (e) {
		if(!$(e.target).closest('.is_list_btn').length) {
				$(".more_opt.is_list_btn").hide();
		}
});

$(".talkContent .bo_btn_sort a").click(function(){		
	$(".bo_list").toggle();	
	$(this).toggleClass("bon")
});




});