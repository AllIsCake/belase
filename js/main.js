//questions close btn
let btns = document.querySelectorAll('.qustions-list_item__content-cross');
let question = document.querySelectorAll('.questions-list_item');
question.forEach( (elem)=> {
    elem.addEventListener('mouseenter', (event) => {
        event.target.querySelector('.qustions-list_item__content').classList.remove('questions-content_hide');
    });
});
btns.forEach((elem) => {
    elem.addEventListener('click', (event) => {
        console.log(event.target.closest('.qustions-list_item__content'));
        event.target.closest('.qustions-list_item__content').classList.add('questions-content_hide');
    });
});
//additionally qustions items

$(function() {
    //input mask
    $(".phoneInput").each(function () {  
        $(this).mask("+7(999) 999-99-99");      
    });
    //additionally qustions items
    let questionsItems =  $(".questions-list_item")
    for (let i = 5; i < questionsItems.length; i++) {
        questionsItems[i].classList.add('questions-content_hide')
    }
    $(".questions-list_link__more").on('click', function() {
        if (questionsItems[6].classList.contains('questions-content_hide')) {
            $(this).text('Скрыть')
        } else {
            $(this).text('Ещё вопросы')
        }
        for (let i = 5; i < questionsItems.length; i++) {
            questionsItems[i].classList.toggle('questions-content_hide');
        }
    });
    //stock slider
    if (window.innerWidth >= 1281) {
        $('.stock-items').slick({
            autoplay:true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    } else if (window.innerWidth <= 1280 && window.innerWidth >= 1024) {
        $('.stock-items').slick({
            autoplay:true,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
        });
    } else {
        $('.stock-items').slick({
            autoplay:true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    }
    //mobile menu
    $(".mobile-menu-btn").on('click', function() {
        $(this).toggleClass("mobile-menu-btn__active");
        $(".mobile-menu").toggleClass("mobile-menu__active");
    })
});
//form validation check
function checkEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
} 
var submitBtn = document.querySelector(".price-form-submit_btn");
submitBtn.addEventListener('click', () => {
    if (checkEmail(priceInputEmail.value)) {
        console.log('adasd');
        priceInputEmail.setCustomValidity("");
    } else {
        priceInputEmail.setCustomValidity("input the correct email");
    }
})