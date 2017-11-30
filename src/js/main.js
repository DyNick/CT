$(document).ready(function() {
	$('.menu-toggle').click(function(){
		$(this).toggleClass('open');
        $('.nav').toggleClass('active-nav');
	});

    $('.link-menu').click(function(){
        $('.nav').toggleClass('active-nav');

    });




    $('.start').fadeIn(15000, function(){ console.log('test'); });

	//TYPEWRITE SCRIPT 
	$('#typewriteText').typewrite({
		actions: [
			{delay: 1000},
			{type: 'Интенсивный курс '},
			{type: '<br>'},
           /* {type: 'курс '},*/
			{type: '<span>'},
            {type: 'ICO'},
            {type: '</span>'},
			{type: ' с нуля'},
		],
		showCursor: false
	});

    //TYPEWRITE SCRIPT
    $('#typewriteTextMore').typewrite({
        actions: [
            {delay: 3700},
            {type: 'Целый месяц интенсивного обучения'}

        ],
        showCursor: false
    });



});


/*=========================FORM==============================*/
$(document).ready(function() {



// jQuery Mask Plugin v1.14.10
// github.com/igorescobar/jQuery-Mask-Plugin
    var $jscomp={scope:{},findInternal:function(a,f,c){a instanceof String&&(a=String(a));for(var l=a.length,g=0;g<l;g++){var b=a[g];if(f.call(c,b,g,a))return{i:g,v:b}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,f,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[f]=c.value)};
    $jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.polyfill=function(a,f,c,l){if(f){c=$jscomp.global;a=a.split(".");for(l=0;l<a.length-1;l++){var g=a[l];g in c||(c[g]={});c=c[g]}a=a[a.length-1];l=c[a];f=f(l);f!=l&&null!=f&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:f})}};
    $jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,c){return $jscomp.findInternal(this,a,c).v}},"es6-impl","es3");
    (function(a,f,c){"function"===typeof define&&define.amd?define(["jquery"],a):"object"===typeof exports?module.exports=a(require("jquery")):a(f||c)})(function(a){var f=function(b,h,e){var d={invalid:[],getCaret:function(){try{var a,n=0,h=b.get(0),e=document.selection,k=h.selectionStart;if(e&&-1===navigator.appVersion.indexOf("MSIE 10"))a=e.createRange(),a.moveStart("character",-d.val().length),n=a.text.length;else if(k||"0"===k)n=k;return n}catch(A){}},setCaret:function(a){try{if(b.is(":focus")){var p,
        d=b.get(0);d.setSelectionRange?d.setSelectionRange(a,a):(p=d.createTextRange(),p.collapse(!0),p.moveEnd("character",a),p.moveStart("character",a),p.select())}}catch(z){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which);b.data("mask-previus-value",b.val())}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",d.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",
        function(){c===d.val()||b.data("changed")||b.trigger("change");b.data("changed",!1)}).on("blur.mask",function(){c=d.val()}).on("focus.mask",function(b){!0===e.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){e.clearIfNotMatch&&!g.test(d.val())&&d.val("")})},getRegexMask:function(){for(var a=[],b,d,e,k,c=0;c<h.length;c++)(b=m.translation[h.charAt(c)])?(d=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,(b=b.recursive)?(a.push(h.charAt(c)),k={digit:h.charAt(c),pattern:d}):
        a.push(e||b?d+"?":d)):a.push(h.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");k&&(a=a.replace(new RegExp("("+k.digit+"(.*"+k.digit+")?)"),"($1)?").replace(new RegExp(k.digit,"g"),k.pattern));return new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var d=b.is("input")?"val":"text";if(0<arguments.length){if(b[d]()!==a)b[d](a);d=b}else d=b[d]();return d},calculateCaretPosition:function(a,d){var h=
        d.length,e=b.data("mask-previus-value")||"",k=e.length;8===b.data("mask-keycode")&&e!==d?a-=d.slice(0,a).length-e.slice(0,a).length:e!==d&&(a=a>=k?h:a+(d.slice(0,a).length-e.slice(0,a).length));return a},behaviour:function(e){e=e||window.event;d.invalid=[];var h=b.data("mask-keycode");if(-1===a.inArray(h,m.byPassKeys)){var h=d.getMasked(),c=d.getCaret();setTimeout(function(a,b){d.setCaret(d.calculateCaretPosition(a,b))},10,c,h);d.val(h);d.setCaret(c);return d.callbacks(e)}},getMasked:function(a,b){var c=
        [],p=void 0===b?d.val():b+"",k=0,g=h.length,f=0,l=p.length,n=1,v="push",w=-1,r,u;e.reverse?(v="unshift",n=-1,r=0,k=g-1,f=l-1,u=function(){return-1<k&&-1<f}):(r=g-1,u=function(){return k<g&&f<l});for(var y;u();){var x=h.charAt(k),t=p.charAt(f),q=m.translation[x];if(q)t.match(q.pattern)?(c[v](t),q.recursive&&(-1===w?w=k:k===r&&(k=w-n),r===w&&(k-=n)),k+=n):t===y?y=void 0:q.optional?(k+=n,f-=n):q.fallback?(c[v](q.fallback),k+=n,f-=n):d.invalid.push({p:f,v:t,e:q.pattern}),f+=n;else{if(!a)c[v](x);t===x?
        f+=n:y=x;k+=n}}p=h.charAt(r);g!==l+1||m.translation[p]||c.push(p);return c.join("")},callbacks:function(a){var f=d.val(),p=f!==c,g=[f,a,b,e],k=function(a,b,d){"function"===typeof e[a]&&b&&e[a].apply(this,d)};k("onChange",!0===p,g);k("onKeyPress",!0===p,g);k("onComplete",f.length===h.length,g);k("onInvalid",0<d.invalid.length,[f,a,b,d.invalid,e])}};b=a(b);var m=this,c=d.val(),g;h="function"===typeof h?h(d.val(),void 0,b,e):h;m.mask=h;m.options=e;m.remove=function(){var a=d.getCaret();d.destroyEvents();
        d.val(m.getCleanVal());d.setCaret(a);return b};m.getCleanVal=function(){return d.getMasked(!0)};m.getMaskedVal=function(a){return d.getMasked(!1,a)};m.init=function(c){c=c||!1;e=e||{};m.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch;m.byPassKeys=a.jMaskGlobals.byPassKeys;m.translation=a.extend({},a.jMaskGlobals.translation,e.translation);m=a.extend(!0,{},m,e);g=d.getRegexMask();if(c)d.events(),d.val(d.getMasked());else{e.placeholder&&b.attr("placeholder",e.placeholder);b.data("mask")&&b.attr("autocomplete",
        "off");c=0;for(var f=!0;c<h.length;c++){var l=m.translation[h.charAt(c)];if(l&&l.recursive){f=!1;break}}f&&b.attr("maxlength",h.length);d.destroyEvents();d.events();c=d.getCaret();d.val(d.getMasked());d.setCaret(c)}};m.init(!b.is("input"))};a.maskWatchers={};var c=function(){var b=a(this),c={},e=b.attr("data-mask");b.attr("data-mask-reverse")&&(c.reverse=!0);b.attr("data-mask-clearifnotmatch")&&(c.clearIfNotMatch=!0);"true"===b.attr("data-mask-selectonfocus")&&(c.selectOnFocus=!0);if(l(b,e,c))return b.data("mask",
        new f(this,e,c))},l=function(b,c,e){e=e||{};var d=a(b).data("mask"),h=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"===typeof c&&(c=c(b)),"object"!==typeof d||h(d.options)!==h(e)||d.mask!==c}catch(u){}},g=function(a){var b=document.createElement("div"),c;a="on"+a;c=a in b;c||(b.setAttribute(a,"return;"),c="function"===typeof b[a]);return c};a.fn.mask=function(b,c){c=c||{};var e=this.selector,d=a.jMaskGlobals,h=d.watchInterval,d=c.watchInputs||d.watchInputs,g=function(){if(l(this,b,
            c))return a(this).data("mask",new f(this,b,c))};a(this).each(g);e&&""!==e&&d&&(clearInterval(a.maskWatchers[e]),a.maskWatchers[e]=setInterval(function(){a(document).find(e).each(g)},h));return this};a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)};a.fn.unmask=function(){clearInterval(a.maskWatchers[this.selector]);delete a.maskWatchers[this.selector];return this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})};a.fn.cleanVal=function(){return this.data("mask").getCleanVal()};
        a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements;(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)};g={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&g("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},
            S:{pattern:/[a-zA-Z]/}}};a.jMaskGlobals=a.jMaskGlobals||{};g=a.jMaskGlobals=a.extend(!0,{},g,a.jMaskGlobals);g.dataMask&&a.applyDataMask();setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},g.watchInterval)},window.jQuery,window.Zepto);







    var emailInput;
    var nameInput;
   // var phoneInput;

    $("#email").on("change", function() {
        emailInput = $(this).val();

        if (validateEmail(emailInput)) {
            $(this).css({
                border: "1px solid green"
            });
        } else {
            $(this).css({
                border: "1px solid red"
            });

            // alert("not a valid email address");
        }
    });
    //$('#phone').mask('+00(000)000-00-00', {placeholder: "+38(___)___-__-__"});
   $("#phone").mask('+00(000)000-00-00', {placeholder: "+38(___)___-__-__"}, function() {
        phoneInput = $(this).val();

        if (validatePhone(phoneInput)) {
            $(this).css({
                border: "1px solid green"
            });
        } else {
            $(this).css({
                border: "1px solid red"
            });

        }
    });
    $("#name").on("change", function() {
        nameInput = $(this).val();

        if (validateName(nameInput)) {
            $(this).css({
                border: "1px solid green"
            });
        } else {
            $(this).css({
                border: "1px solid red"
            });

            // alert("not a valid email address");
        }
    });

    $("#subscribe-button").on("click", function(e) {
        // e.preventDefault();
        if (validateEmail(emailInput)  && validateName(nameInput) ) {
            $('.error-massage').css ('display','none');
            $('.section-successful-popup').css('display','block')

        } else {
            $('.error-massage').css ('display','block');
            return false;
        }
    });

    function validateEmail(email) {
        var pattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        return $.trim(email).match(pattern) ? true : false;
    }
    function validateName(name) {
        var namepattern = /^[a-zA-Zа-яА-Я ]{2,30}$/;
        return $.trim(name).match(namepattern) ? true : false;
    }
 /*  function validatePhone(phone) {
        var phonepattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return $.trim(phone).match(phonepattern) ? true : false;
    }*/
    function validatePhone() {
        if( phoneInput==true){
            return true
        }
       else{
            return false
        }
    }




});
/*



/*==============PARALLAX ===================*/

$(document).ready(function () {
    $('.hidden').fadeIn(2000).removeClass('hidden');
});


$(window).scroll(function () {
    var st = $(this).scrollTop();
 /*   $('.typewriter').css({
        "transform" : "translate(0%, "+ st/2 +"%"
    });*/
    $('').css({
        "transform" : "translate(0%, "+ st/2 +"%"
    });

    $('.container--promotion').css({
        "transform" : "translate(0%, "+ st/100 +"%"
    });

    $('.marketing-image-ruby').css({
        "transform" : "translate(0%, -"+ st/50 +"%"
    })
    $('.marketing-header').css({
        "transform" : "translate(0%, "+ st/10 +"%"
    });
    $('.marketing-rhombus').css({
        "transform" : "translate(0%, "+ st/100 +"%",
        "transform":  "rotate(45 deg)"
    });

});



/*=======================SCROLL ANIMATION================*/

function scrollNav() {
    $('.header-nav-list__item a').click(function(){
        $('html, body').stop().animate({
            scrollTop: $( $(this).attr('href') ).offset().top - 160
        }, 1000);
        return false;
    });
   // $('.scrollTop a').scrollTop();
}
scrollNav();


/*========================broadcast====================*/

$(document).ready(function(){
    var $arrLinks = [
        'https://www.youtube.com/embed/KujY3tPaa14?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/Rdp6obrzfcI?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/3Si2ytdbzuk?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/kOEbD_8Qiks?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/vHl5tX32A-w?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/0_6IlA_E1dQ?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/X2kEChifetA?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/8qpRIdY5b28?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/huv8vql4pOA?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/qPlXxaQtbe0?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/8B4GcjD_jig?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1'
    ]; // Массив ссылок для iframe
    var $buttons = $('.owl-carousel-slide1-item--video1 > .youtube_img');
    for ( var i = 0; i < $buttons.length; i++) {
        $($buttons[i]).on('click',function() {
            var $indexBtn = $($buttons).index(this);
            $('.intro_iFrame').attr('src', $arrLinks[$indexBtn]);
            $('html,body').animate({scrollTop: 0}, 1000);// Поднимаем вверх к видео
        });
    }
});

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1.6,
        loop:false,
        center:true,
        margin:10,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        responsive:{
            320:{
                items:1,
                nav:true,
            },
            480:{
                items:1,
                nav:true,
            },
            768:{
                items:1,
                nav:true,
            },
            1024:{
                items:1,
                nav:true,
            },

            1280:{
                items:1.13,
                nav:true
            },
            1366:{
                items:1.205,
                nav:true,
            },
            1440:{
                items:1.27,
                nav:true
            },
            1536:{
                items:1.355,
                nav:true
            },
            1680:{
                items:1.482,
                nav:true
            },
            1920:{
                items:1.67,
                nav:true
            }
        }
    });
})

/*=================successful-popup============*/
$('.close-successful-popup').click(function () {
    $('.section-successful-popup').css('display','none')
});



/*======================animation block=============*/

/*
jQuery(function($) {

    var doAnimations = function() {


        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');


        if ($animatables.size() == 0) {
            $(window).off('scroll', doAnimations);
        }


        $animatables.each(function(i) {
            var $animatable = $(this);
            if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                $animatable.removeClass('animatable').addClass('animated');
            }
        });

    };

    $(window).on('scroll', doAnimations);
    $(window).trigger('scroll');

});*/
/*==========================INDEX-NEWS============*/

$(document).ready(function($) {
    "use strict";
    $('.block-carousel').owlCarousel( {
        loop: true,
        center: true,
        items: 3,
        dots:true,
        nav: false,
        //navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});



// FOR INDEX PAGE
$(document).ready( function () {
    $('.index-search').on( 'click', function () {
        $('.search').toggleClass('active-search');
        $('.index-search__icon').toggleClass('index-search__icon-close');
    });
})

$(function() {
    var slider = $('.video_slider'),
        sliderContent = slider.html(),                      // Содержимое слайдера
        slideHeight = $('.video_slider > li').outerHeight(),         // высота слайдера
        slideCount = $('.video_slider > li').length,               // Количество слайдов
        prev = $('.intro_slider__nav .prev'),                      // Кнопка "назад"
        next = $('.intro_slider__nav .next'),                      // Кнопка "вперед"
        sliderInterval = 100000,                              // Интервал смены слайдов
        animateTime = 300,                                 // Время смены слайдов
        course = 1,                                         // Направление движения слайдера (1 или -1)
        margin = - slideHeight;                              // Первоначальное смещение слайдов
    $('.slider li:last').clone().prependTo('.video_slider'); // Копия последнего слайда помещается в начало.
    $('.slider img').eq(1).clone().appendTo('.video_slider'); // Копия первого слайда помещается в конец.
    $('.video_slider').css('margin-top', -slideHeight);         // Контейнер .slider сдвигается вверх на высоту одного слайда.
    function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
        interval = window.setInterval(animate, sliderInterval);
    }

    function animate(){
        if (margin==-slideCount*slideHeight-slideHeight){     // Если слайдер дошел до конца
            slider.css({'marginTop':-slideHeight});           // то блок .slider возвращается в начальное положение
            margin=-slideHeight*2;
        }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
            slider.css({'marginTop':-slideHeight*slideCount});// то блок .slider перемещается в конечное положение
            margin=-slideHeight*slideCount+slideHeight;
        }else{                                              // Если условия выше не сработали,
            margin = margin - slideHeight*(course);              // значение margin устанавливается для показа следующего слайда
        }
        slider.animate({'marginTop':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
    }

    function sliderStop(){                                // Функция преостанавливающая работу слайдера
        window.clearInterval(interval);
    }

    prev.click(function() {                               // Нажата кнопка "назад"
        if (slider.is(':animated')) { return false; }       // Если не происходит анимация
        var course2 = course;                               // Временная переменная для хранения значения course
        course = -1;                                        // Устанавливается направление слайдера справа налево
        animate();                                          // Вызов функции animate()
        course = course2 ;                                  // Переменная course принимает первоначальное значение
    });

    next.click(function() {                               // Нажата кнопка "назад"
        if (slider.is(':animated')) { return false; }       // Если не происходит анимация
        var course2 = course;                               // Временная переменная для хранения значения course
        course = 1;                                         // Устанавливается направление слайдера справа налево
        animate();                                          // Вызов функции animate()
        course = course2 ;                                  // Переменная course принимает первоначальное значение
    });

    slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
        sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
    }, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.

    nextSlide();                                          // Вызов функции nextSlide()
});


$(document).ready(function(){
    var $arrLinks = [
        'https://www.youtube.com/embed/KujY3tPaa14?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/Rdp6obrzfcI?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/3Si2ytdbzuk?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/kOEbD_8Qiks?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/vHl5tX32A-w?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/0_6IlA_E1dQ?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/X2kEChifetA?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/8qpRIdY5b28?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/huv8vql4pOA?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/qPlXxaQtbe0?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1',
        'https://www.youtube.com/embed/8B4GcjD_jig?rel=0&amp;controls=1&amp;showinfo=0;autoplay=1'
    ]; // Массив ссылок для iframe
    var $videoText = [
        'План B: обзор ICO. Интервью c Ярославом Мудрым',
        'Выпуск второй. "План В" Интервью с Андреем Великим',
        'Интервью на Ukrainian Blockchain Day с Евгением Нетребовым',
        'Новое интервью на Ukrainian Blockchain Day с со-организатором ивента Максимом Онегиным',
        'Проект от Дмитрия Окрамчука на Ukrainian Blockchain Day',
        'Интервью с Vince Meens (Винсом Меенсом) на Ukrainian Blockchain Day.',
        'Интервью с Jason Inch (Джейсон Инчь) на Ukrainian Blockchain Day.',
        'Интервью с Mihail Lukan (Михаил Лукань) на Ukrainian Blockchain Day.',
        'Интервью с Денисом Борисовым на Ukrainian Blockchain Day.',
        'Интервью с Itay Malinski (Итаем Малинским) на Ukrainian Blockchain Day.',
        'Интервью c Jan Keil (Ян Кейл) в рамках Ukrainian Blockchain Day'
    ];
    var $buttons = $('.video_slider > li > .overlay');
    var $aboutVideoText = $('.text_about__video');
    for ( var i = 0; i < $buttons.length; i++) {
        $($buttons[i]).on('click',function() {
            var $indexBtn = $($buttons).index(this);
            $aboutVideoText.text($videoText[$indexBtn]);
            $('.video_wrap > iframe').attr('src', $arrLinks[$indexBtn]);
        });
    }
});

//  SLIDER for COURSE SECTION
$(document).ready( function() {
    $('.slider_course__wrap').owlCarousel({
        stagePadding: 200,
        // center:true,
        loop:true,
        dots: true,
        margin: -20,
        nav:true,
        items:1,
        // lazyLoad: true
    })

});