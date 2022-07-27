const loadingContainer = document.getElementById('loading');
const header = document.getElementsByTagName('header')[0];

window.addEventListener('scroll', () => {
    if (window.innerWidth >= 1000) {
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 ? header.classList.add('isScrolled') : header.classList.remove('isScrolled')
    }
})



setTimeout(function () {
    $("#loading").addClass("animated fadeOut");
    setTimeout(function () {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
    }, 800);
}, 300);

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('body,html').animate({
                scrollTop: $(hash).offset().top
            }, 1800, function () {
                window.location.hash = hash;
            });
        }
    });

});

const slides = document.querySelectorAll('.slide')

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
        slide.classList.add('active')
    })
})

// The classic 'todo fix'
const accordeonsOrHowererYouSpellThisShit = document.getElementsByClassName('card-header');

for (let i; i < accordeonsOrHowererYouSpellThisShit.length; i++) {
    console.log(i)
    accordeonsOrHowererYouSpellThisShit[i].addEventListener('click' , (thing) => {
        console.log('wwwwwwjfslkdjfklsajdflaksjf;lkasdj')
        thing.target.nextSibling.toggle('active')
    })
}