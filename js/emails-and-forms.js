/**
 * Write an email address to the screen. Helps so that bots can't parse email addresses from the site.
 *
 *     writeEmail("info", "info", "domain.com");
 *
 * @param string
 * @param string
 * @param string
 */
function writeEmail(contact, email, emailHost) {
  document.write("<a href=" + "&#109a&#105l" + "&#116&#111:" + email + "@" + emailHost+ ">" + contact + "@" + emailHost+"</a>");
}

jQuery(document).ready(function ($) {

  $(".infieldlabel").inFieldLabels();

	$('.popup-video').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
	
			fixedContentPos: false
	});
   
 	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
		$('#btnMenu').toggleClass('white');
	});
	 
	$("#btnWednesday").click(function(){
		$(this).addClass('active');
		$("#btnFriday").removeClass('active');
		$("#btnThursday").removeClass('active');
	  $("#divWednesday").show();
	  $("#divThursday").hide();
	  $("#divFriday").hide();
	  $.scrollTo(".schedule_content", {duration: 1000 });
	});  

	$("#btnThursday").click(function(){
		$(this).addClass('active');
		$("#btnFriday").removeClass('active');
		$("#btnWednesday").removeClass('active');
	  $("#divThursday").show();
	  $("#divFriday").hide();
	  $("#divWednesday").hide();
	  $.scrollTo(".schedule_content", {duration: 1000 });
	});  

	$("#btnFriday").click(function(){
		$(this).addClass('active');
		$("#btnThursday").removeClass('active');
		$("#btnWednesday").removeClass('active');
	  $("#divThursday").hide();
	  $("#divWednesday").hide();
	  $("#divFriday").show();
	  $.scrollTo(".schedule_content", {duration: 1000 });
	});    

	$("#btnMenu").click(function(){
	  $("#menuOverlay").toggle();
	});  

	$(".menuLink").click(function(){
	  $("#menuOverlay").hide();
		$('#nav-icon4').toggleClass('open');
	});  

	$('.photo-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return '<small>by Jennifer Stelly</small>';
			}
		}
	});



	/**
	*
	*     This code changes the background of the Menu button after it passes a div
	*
	*/
 
	// get the value of the bottom of the #main element by adding the offset of that element plus its height, set it as a variable
	var mainbottom = $('#divTop').offset().top + $('#divTop').height();
	
	// on scroll, 
	$(window).on('scroll',function(){
	
	    // we round here to reduce a little workload
	    stop = Math.round($(window).scrollTop());
	    if (stop > mainbottom) {
	        $('#btnMenu').addClass('white');
	    } else {
	        $('#btnMenu').removeClass('white');
	   }
	
	});  
  
});


/**
 *
 *     This code is for Campaign  Monitor
 *
 */


$(function () {
    $('#formEmail').submit(function (e) {
        e.preventDefault();
        $.getJSON(
        this.action + "?callback=?",
        $(this).serialize(),
        function (data) {
            if (data.Status === 400) {
                alert("Error: " + data.Message);
            } else { // 200
                $('#divEmailConfirmation').show();
                $('#divEmail').hide();
            }
        });
    });
});
