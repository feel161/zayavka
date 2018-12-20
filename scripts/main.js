 function iget(n){
 return (document.getElementById(n));
}
/*function get_timer(string) {
    var date_new = string;
    var date_t = new Date(date_new);var date = new Date();
    var timer = date_t - date;
    if(date_t > date) {
        var day = parseInt(timer/(60*60*1000*24));
        if(day < 10) {day = "0" + day;}day = day.toString();
        var hour = parseInt(timer/(60*60*1000))%24;
        if(hour < 10) {hour = "0" + hour;}hour = hour.toString();
        var min = parseInt(timer/(1000*60))%60;
        if(min < 10) {min = "0" + min;}min = min.toString();
        var sec = parseInt(timer/1000)%60;
        if(sec < 10) {sec = "0" + sec;}sec = sec.toString();
        timethis = day + " : " + hour + " : " + min + " : " + sec;
        $(".timerhello p.result .result-day").text(day);
        $(".timerhello p.result .result-hour").text(hour);
        $(".timerhello p.result .result-minute").text(min);
        $(".timerhello p.result .result-second").text(sec);
    }
    else {
        $(".timerhello p.result .result-day").text("00");
        $(".timerhello p.result .result-hour").text("00");
        $(".timerhello p.result .result-minute").text("00");
        $(".timerhello p.result .result-second").text("00");
        } 
}
function getfrominputs(){string = "05/09/2015 00:00"; get_timer(string);setInterval(function(){get_timer(string);},1000);}

function blind()
{
	if ($('body').css('font-size') == '12px')
    {
        $('body').css({'font-size':'18px'});
        $('.news0').css({'height':'480px'});
        $('.news1').css({'height':'480px'});
        $('.news2').css({'height':'480px'});
        $('.news3').css({'height':'480px'});
        $(".slider").hide();
        $.get ('/menu.php');
    }
    else
    {
        $('body').css({'font-size':'12px'});
        $('.news0').css({'height':'300px'});
        $('.news1').css({'height':'300px'});
        $('.news2').css({'height':'300px'});
        $('.news3').css({'height':'300px'});
        $(".slider").show();
    }
}*/


$(document).ready(function(){
   slider = $('#slidercontent').bxSlider({
    displaySlideQty: 4,
    moveSlideQty: 2,
    prevText:'<<< ',
    nextText:'>>>'
  });
   $('span#blink1').click(function(){
        $('#googleform').toggleClass('googleform-hide');
        $('#googleform').toggleClass('googleform-show');
        
    });
    /*странно, но тут тоже самое*/
    $('#closegoogle').click(function(){
        $('#googleform').toggleClass('googleform-hide');
        $('#googleform').toggleClass('googleform-show');
        
    });
  $('a#xmail').colorbox({rel:'group2', iframe:true, width:"680", height:"640"});
  $('a#img').colorbox({rel:'group8'});
  $('a#imgh').colorbox({rel:'group9'});
  //$("#docdoc").colorbox({inline:true, width:"640", height:"680"});
  $("#comovcall").colorbox({iframe:true, width:"600", height:"620"});
  $('#rightslider').bxSlider({
    auto: true,
    pause: 6000,
    prevText:'<<< ',
    nextText:'>>>'
  });
   
  $.datepicker.regional['ru'] = {
		closeText: 'Закрыть',
		prevText: '&#x3c;Пред',
		nextText: 'След&#x3e;',
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
		'Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
		dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		weekHeader: 'Не',
		dateFormat: 'yy-mm-dd',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ru']);
  //for(i=0; i<5; i++){ не работает в ФФ
  $("#hidem").click(function(){
     $(".slider").slideToggle("slow");
     $("#open").toggleClass("hidden");
     $.get ('/menu.php');
      return false;
  });
  $("#open").click(function(){
     $(".slider").slideToggle("slow");
     $("#open").toggleClass("hidden");
     $.get ('/menu.php');
     return false;
  });
  set_menus();
  $('#calendar').calendarLite({
				showYear: true,
                linkFormat: '/videonews/{%yyyy}-{%mm}-{%dd}'
});
/*$('#do').hover(function(){
     $('#logomenu1').fadeIn(300);
    
  },
  function() {
    $('#logomenu1').hide();
  });*/
$('#docdoc').hover(function(){
     $('#about').fadeIn(300);
    
  },
  function() {
    $('#about').fadeOut(600);
  });
/*$('#cont').hover(function(){
     $('#fly').fadeIn(300);
    
  },
  function() {
    $('#fly').fadeOut(600);
  });
  $('#portal').hover(function(){
     $('#student').fadeIn(300);
    
  },
  function() {
    $('#student').fadeOut(600);
  });
$('#dpro').hover(function(){
     $('#logomenu2').fadeIn(300);
    
  },
  function() {
    $('#logomenu2').hide();
  });*/
  $('a#html5').click(function() {
                var url = $(this).attr('href');
                var title = 'Хак';
                $.ajax({
                    url:     url + '?emptytmp=1',
                    dataType: 'json',
                    success: function(data){
                       $('#h0').html(data.title);
                       $('title').text(data.top);
                       title = data.title;
                       $('.tdtext').html(data.text);
                       var offset = $('#m0').offset();
                       $(window).scrollTop(offset.top);
                    }
                });

                if(url != window.location){
                    window.history.pushState(null, title, url);
                    //$('#dod').colorbox({rel:'group1', inline:true, open:true});
                }

                return false;
            });

/*$(window).bind('popstate', function() {
                $.ajax({
                    url:     location.pathname + '?emptytmp=1',
                    dataType: 'json',
                    success: function(data) {
                       $('#h0').html(data.title);
                       $('title').text(data.top);
                       $('.tdtext').html(data.text);
                    }
                });
                
});

  $.fn.alignCenter = function() {
   var marginLeft = Math.max(40, parseInt($(window).width()/2 - $(this).width()/2)) + 'px';
   var marginTop = Math.max(40, parseInt($(window).height()/2 - $(this).height()/2)) + 'px';
   return $(this).css({'margin-left':marginLeft, 'margin-top':marginTop});
  };
*/

    $('.ui-selectmenu').selectmenu();
    $("input[type='submit']").button();
});
/*function showPopup(popup_type){
 $('#opaco').height($(document).height()).toggleClass('hidden').fadeTo('slow', 0.7)
     .click(function(){closePopup();});
  $('#popup')
   .alignCenter()
   .toggleClass('hidden');
  return false;
}

function closePopup()
{
  $('#opaco').toggleClass('hidden').removeAttr('style');
  $('#popup').toggleClass('hidden');
  return false;
}

function set_myie(url,w,h){
    showPopup('bug');
    iget('myie').width = w;
    iget('myie').height = h;
    $('#popup').alignCenter();
    iget('myie').src=url;
    return false;
}
*/
function set_menus()
//Бред, однако в ФФ цикл не работает!
{
$('#m0').hover(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(0);
    if ($('.slider').css('display') == 'none') $('#openmenu0').fadeIn(300);
    
  },
  function() {
    $('#openmenu0').hide();
  });
$('#m0').click(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(0);
  });
  
  $('#m1').hover(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(1);
    if ($('.slider').css('display') == 'none') $('#openmenu1').fadeIn(300);
  },
  function() {
    $('#openmenu1').hide();
  });
$('#m1').click(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(1);
    
  });
  
  $('#m2').hover(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(2);
    if ($('.slider').css('display') == 'none') $('#openmenu2').fadeIn(300);
    
  },
  function() {
    $('#openmenu2').hide();
  });
$('#m2').click(function(){
   if ($('.slider').css('display') != 'none')  slider.goToSlide(2);
    
  });
  
  $('#m3').hover(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(3);
    if ($('.slider').css('display') == 'none') $('#openmenu3').fadeIn(300);
    
  },
  function() {
    $('#openmenu3').hide();
  });
$('#m3').click(function(){
   if ($('.slider').css('display') != 'none')  slider.goToSlide(3);
    
  });
  
  $('#m4').hover(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(4);
    if ($('.slider').css('display') == 'none') $('#openmenu4').fadeIn(300);
    
  },
  function() {
    $('#openmenu4').hide();
  });
$('#m4').click(function(){
    if ($('.slider').css('display') != 'none') slider.goToSlide(4);
    
  });
  
}
/*(function($){$.fn.Zoomer=function(b,x,y,x1,y1,r1,r2,s1,s2){
var c=$.extend({speedView:200,speedRemove:400,altAnim:false,speedTitle:400,debug:false},b);
var d=$.extend(c,b);
function e(s){if(typeof console!="undefined"&&typeof console.debug!="undefined"){console.log(s)}else{alert(s)}}
if(d.speedView==undefined||d.speedRemove==undefined||d.altAnim==undefined||d.speedTitle==undefined)
{
e('speedView: '+d.speedView);
e('speedRemove: '+d.speedRemove);
e('altAnim: '+d.altAnim);
e('speedTitle: '+d.speedTitle);return false
}
if(d.debug==undefined){
    e('speedView: '+d.speedView);
    e('speedRemove: '+d.speedRemove);
    e('altAnim: '+d.altAnim);
    e('speedTitle: '+d.speedTitle);
    return false
    }
if(typeof d.speedView!="undefined"||typeof d.speedRemove!="undefined"||typeof d.altAnim!="undefined"||typeof d.speedTitle!="undefined"){
    if(d.debug==true){
        e('speedView: '+d.speedView);
        e('speedRemove: '+d.speedRemove);
        e('altAnim: '+d.altAnim);
        e('speedTitle: '+d.speedTitle)
        }
    $(this).hover(function(){
        $(this).css({'z-index':'10'});
        $(this).find('img').addClass("hover").stop().animate({marginTop:r2+'px',marginLeft:r1+'px',top:'50%',left:'50%',width:x1+'px',height:y1+'px',padding:'20px'},d.speedView);//размеры ховера
        if(d.altAnim==true){
            var a=$(this).find("img").attr("alt");
            if(a.length!=0){
                $(this).prepend('<span class="titlex">'+a+'</span>');$('.titlex').animate({marginLeft:s1+'px',marginTop:s2+'px'},d.speedTitle).css({'z-index':'10','position':'absolute','float':'left'})}}}, function(){$(this).css({'z-index':'0'});
                $(this).find('img').removeClass("hover").stop().animate({marginTop:'0',marginLeft:'0',top:'0',left:'0',width:x+'px',height:y+'px',padding:'5px'},d.speedRemove);//размеры картинки
                $(this).find('.titlex').remove()})}
}})(jQuery);*/
