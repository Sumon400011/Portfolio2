
   // ====== Adding animations to the sections =====
   $("section").addClass("wow fadeIn");
   $("section").attr("data-wow-delay", "0.2s");


   // ======= Dotted scrollspy =======
   $('body').scrollspy({
      target: '.dotted-scrollspy'
   });


   // =========== tooltip ===========
   $(document).ready(function(){
      $('[data-toggle="tooltip"]').tooltip({
         trigger:'hover'
      });
   });


   


   // =========== Active Navbar ================
	$(document).ready(function(){

		var page_link = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
      // console.log(page_link);
		$(".main_navigation .navbar li a").each(function(){
			if($(this).attr("href") == page_link)
				$(this).addClass("nav-active");
			else
				$(this).removeClass("nav-active");
		});
	});
    
    

   
   // if (window.location.href.substr(window.location.href.lastIndexOf("/") + 1) == "index.html") {
	   
   	// ================ show Time ================
	   (function () {
	      function checkTime(i) {
	         return (i < 10) ? "0" + i : i;
	      }

	      function startTime() {
	         var today = new Date(),
	            h = checkTime(today.getHours()),
	            m = checkTime(today.getMinutes()),
	            s = checkTime(today.getSeconds());
	         
	            document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
	           
	           t = setTimeout(function () {
	               startTime()
	           }, 500);


	         if(h>=5 && h<12){
	            document.getElementById('greet').innerHTML = "Good Morning";
	         }
	         else if(h>=12 && h<15){
	            document.getElementById('greet').innerHTML = "Good Noon";
	         }
	         else if(h>=15 && h<17){
	            document.getElementById('greet').innerHTML = "Good Afternoon";
	         }
	         else if(h>=17 && h<21){
	            document.getElementById('greet').innerHTML = "Good Evening";
	         }
	         else{
	            document.getElementById('greet').innerHTML = "Good Night";
	         }
	   	}
	     startTime();
	      
	   })();


	   // =========== type js initialization ===========
	   var typed = new Typed('#typed', {
			strings: ["Hello!", "This Is", "Sumon Mondol"],
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 3000,
			loop: true
	   });


	   // =========== Mixitup ================
	   $(document).ready(function(){
	      
	      var container = document.querySelector('.mix_container');

	      var mixer = mixitup(container, {
	        // controls: {
	        //   toggleLogic: 'and'
	        // }

	        selectors: {
	          control: '[data-mixitup-control]'
	        }
	      });
	   });
   // }




   



   // =========== owlCarousel ================
   $('.owl-carousel').owlCarousel({
      loop:true,
      autoplay:true,
      margin:10,
      smartSpeed:450,
      responsiveClass:true,
      responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:2,
				nav:false
			},
			1000:{
				items:4,
				nav:true,
				dots: false,
				loop:true

         }
      }
   })



   // =========== wow js initialization ===========
	$( document ).ready(function() {
		new WOW().init();
	});

    