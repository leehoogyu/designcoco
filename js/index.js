var ww = $(window).width()
console.log(ww)


if ( ww>1024 ) {
    $('#nav .depth1 > li').hover(
        function(){ 
            $(this).addClass('on')
        },
        function(){
            $(this).removeClass('on')
        }
    )
    
} else {
    $('#nav .depth1 > li').on('click', function(){
        $(this).toggleClass('on')
        $(this).siblings().removeClass('on')
    })
}

$('#header .open').on('click', function(){
    $(this).next().css({
        display:'block'
    })
    $(this).css({
        display:'none'
    })
    $(this).next().next().css({
        display:'block'
    })
})
$('#header .close').on('click', function(){
    $(this).prev().css({
        display:'none'
    })
    $(this).css({
        display:'none'
    })
    $(this).prev().prev().css({
        display:'block'
    })
})




$(".slide-group").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 3000, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

$('.article1 .plpa').on('click', function(){
    // .addClass() : 클래스 추가
    // .removeClass() : 클래스 삭제
    // .hasClass() : 클래스 유무 판단 (결과는 true 또는 false)
    var $ibutton = $(this).find('i')
    if ( $ibutton.hasClass('fa-pause') ) {
        $('.article1 .slide-group').slick('slickPause')
        $ibutton.removeClass('fa-pause').addClass('fa-play')
    } else{
        $('.article1 .slide-group').slick('slickPlay')
        $ibutton.removeClass('fa-play').addClass('fa-pause')
    }
})


// .index( ): 선택자의 인덱스 번호를 알아냄
// 변수선언 var 변수명;
// p. 60~61 참고
var num;
$('.cs_board .tabmenu > li').on('click', function(){
    $(this).addClass('active')
    .siblings().removeClass('active')
    // console.log( $(this).index() )
    // 변수에 값 저장하기 : 변수명 = 값 
    // 변수는 값을 하나만 저장할 수 있음
    num = $(this).index()
    $(this).parent().next().children()
    .eq($(this).index()).addClass('active')
    .siblings().removeClass('active')
})



