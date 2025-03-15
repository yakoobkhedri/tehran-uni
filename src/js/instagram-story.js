const defaultStoryDuration = 7000;
// init stories swiper
new Swiper('#storiesSwiperSm', {
    changeDirection: 'rtl',
    slidesPerView: 3.3,
    spaceBetween: 41,
    loop:false,
    speed: 200,
    freeMode:true,
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
        enabled:false
    },
    breakpoints: {
        // when window width is >= 992px
        1200: {
            slidesPerView: 9,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:true
            },
        },
        992: {
            slidesPerView: 8.3,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:true
            },
        },
        768: {
            slidesPerView: 6.3,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:true
            },
        },
        576: {
            slidesPerView: 5.3,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:false
            },
        },
        380: {
            slidesPerView: 4.3,
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:false
            },
        }
    }
});

// init large stories
const largeStoriesSwiper = new Swiper('#storiesSwiperLg', {
    changeDirection: 'rtl',
    effect: 'cube',
    autoplay: {
        delay: defaultStoryDuration,
        disableOnInteraction:false,
    },
    on: {
        afterInit: function () {
            this.autoplay.stop();
        },
        autoplayTimeLeft: function (swiper, timeLeft, percentage) {
            let p = percentage * 100;
            let width = 100 - p;
            if (width > 0 && width < 100 && (this.autoplay.running && !this.autoplay.paused)) {
                $('.large-stories-swiper .swiper-pagination-bullet-active > span').css('width',width + '%');
            }
        },
        autoplayPause:function (){
            console.log('autoplayPause');
            let activeSlide = this.slides[this.activeIndex];
            let btn = $(activeSlide).find('.story-play-pause-btn');
            let storyItem = $(activeSlide).find('.story-item-lg');
            let videoTag = storyItem.find('video').get(0);
            btn.removeClass('playing');
            if (videoTag){
                videoTag.pause();
            }
        },
        autoplayResume: function (){
            console.log('autoplayResume');
            let activeSlide = this.slides[this.activeIndex];
            let btn = $(activeSlide).find('.story-play-pause-btn');
            let storyItem = $(activeSlide).find('.story-item-lg');
            let videoTag = storyItem.find('video').get(0);
            btn.addClass('playing');
            if (videoTag){
                videoTag.play();
            }
        },
        autoplayStart: function (){
            console.log('autoplayStart');
            let activeSlide = this.slides[this.activeIndex];
            let storyItem = $(activeSlide).find('.story-item-lg');
            let videoTag = storyItem.find('video').get(0);
            if(storyItem.hasClass('video') && videoTag && document.readyState === 'complete'){
                videoTag.play();
            }
        },
        autoplayStop: function (){
            console.log('autoplayStop');

        },
        slideChange:function (){
            console.log('slideChange');

            let activeSlide = this.slides[this.activeIndex];
            let storyItem = $(activeSlide).find('.story-item-lg');
            let videoTag = storyItem.find('video').get(0);
            let playBtn = $(activeSlide).find('.story-play-pause-btn');
            let timeout = 0;
            if (!$('.stories-wrapper').hasClass('show')) timeout = 1000;

            // pause all videos
            stopAllVideos();
            // reset autoplay width
            $('.large-stories-swiper .swiper-pagination-bullet > span').css('width',0 + '%');


            if (storyItem.hasClass('video') && videoTag){
                let swiper = this;
                videoTag.addEventListener('loadeddata', function() {
                    swiper.params.autoplay.delay = videoTag.duration * 1000;
                    setTimeout(function (){
                        videoTag.play();
                        playBtn.addClass('playing');

                    },timeout);
                    console.log('delay set to video: ' + swiper.params.autoplay.delay);
                });


            }else{
                this.params.autoplay.delay = defaultStoryDuration;
            }


        }
    },
    cubeEffect: {
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"><span></span></span>';
        }
    },
    navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
        enabled:false
    },
    breakpoints:{
        568:{
            navigation: {
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
                enabled:true
            }
        }
    }
})

$(document).on('click','.story-item',function (e){
    e.preventDefault();
    let index = $(this).attr('data-story-index');

    // animate
    let circle = $(this).find('.story-item-circle');
    circle.addClass('animated');

    // check clicked story type
    let clickedStory = $(largeStoriesSwiper.slides[index]).find('.story-item-lg');
    let video = undefined;
    // load video if exist
    if (clickedStory.hasClass('video')){
        // set autoplay delay to video duration
        let videoTag = clickedStory.find('video').first();
        if (videoTag){
            video = videoTag.get(0);
            video.load();
        }
    }else{
        largeStoriesSwiper.params.autoplay.delay = defaultStoryDuration;
    }

    // show story
    setTimeout(function(){
        // slide to clicked story
        if(largeStoriesSwiper.realIndex !== index){
            largeStoriesSwiper.slideTo(index,0,false);
        }
        if (clickedStory.hasClass('video') && video !== undefined){
            // set autoplay delay to video duration
            console.log("!!!!!! video.duration: " + video.duration);
            largeStoriesSwiper.params.autoplay.delay = video.duration * 1000;
        }else{
            largeStoriesSwiper.params.autoplay.delay = defaultStoryDuration;
            console.log('story delay has been set to default: ' + largeStoriesSwiper.params.autoplay.delay);
        }

        $('.stories-wrapper').addClass('show');
        circle.removeClass('animated');
        largeStoriesSwiper.autoplay.start();

        if(largeStoriesSwiper.autoplay.paused){
            largeStoriesSwiper.autoplay.resume();
        }

    },1000);
});

// video end event
$('video.story-video-tag').on('ended',function(){
    largeStoriesSwiper.slideNext();
});

// story volume button
$(document).on('click','.story-volume-btn',function (){
    let btn = $(this);
    let storyItem = btn.parents('.story-item-lg');
    let videoTag = storyItem.find('video').get(0);
    let allVideos = $(largeStoriesSwiper.slides).find('video');

    if(btn.hasClass('muted')){
        videoTag.volume = 1;
        $('.story-volume-btn').removeClass('muted');
        localStorage.setItem("volume","1");

        $(allVideos).each(function() {
            let video = $(this).get(0);
            video.volume = 1;
        });
    }else{
        videoTag.volume = 0;
        $('.story-volume-btn').addClass('muted');
        localStorage.setItem("volume","0");

        $(allVideos).each(function() {
            let video = $(this).get(0);
            video.volume = 0;
        });
    }
});

// story play/pause button
$(document).on('click','.story-play-pause-btn',function (){
    if(largeStoriesSwiper.autoplay.paused){
        largeStoriesSwiper.autoplay.resume();
    }else{
        largeStoriesSwiper.autoplay.pause();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const storiesWrapper = document.querySelector('.stories-wrapper');
    if (storiesWrapper){
        storiesWrapper.addEventListener('click', function(event) {
            // Check if the event target is the wrapper itself
            if (event.target === storiesWrapper) {
                closeStories();
            }
        });
    }
});

// story back button
$(document).on('click','.story-item-lg-back',function (){
    closeStories();
});

function closeStories(){
    // pause all videos
    stopAllVideos();
    // hide stories
    $('.stories-wrapper').removeClass('show');

    // stop swiper autoplay
    largeStoriesSwiper.autoplay.stop();
}
function setVolumeSetting(){
    let allVideos = $(largeStoriesSwiper.slides).find('video');
    let buttons = $(".story-volume-btn");
    let volume = localStorage.getItem("volume");
    if (volume === "0"){
        buttons.addClass('muted');
        $(allVideos).each(function() {
            let video = $(this).get(0);
            video.volume = 0;
        });
    }
}

function stopAllVideos(){
    let videos = $(largeStoriesSwiper.slides).find('video');
    $(videos).each(function() {
        let video = $(this).get(0);
        video.pause();
        video.currentTime = 0;
    });
}
