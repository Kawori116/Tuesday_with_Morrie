var s = skrollr.init();

// Author Slide
var authorbiolist = {}
authorbiolist.background = [{
    text: "Mitch Albom is an American author, journalist, screenwriter, playwright, and radio and television broadcaster. He was born on May 23, 1958, in Passaic, New Jersey."
}, {
    text: "Albom grew up in a Jewish family in New Jersey and attended Columbia University in New York, where he earned a bachelor's degree in sociology. He later attended graduate school at the University of Michigan, where he earned a master's degree in journalism."
}]
authorbiolist.inspiration = [{
    text: "\"Tuesdays with Morrie\" is based on Mitch Albom's real-life experiences with his former college professor, Morrie Schwartz. After seeing a Nightline interview with Morrie, Albom reached out to him and they reconnected. Morrie had been diagnosed with ALS (also known as Lou Gehrig's disease) and had only a few months to live."
}, {
    text: "Albom started visiting Morrie every Tuesday, and their conversations covered a range of topics, from love and relationships to aging and death.These conversations formed the basis for the book \"Tuesdays with Morrie\"."
}]

authorBio("background");
$('.change').click(function () {
    if ($('.author-title1').html().trim() === 'Inspiration <br> for') {
        $(".author-title1").html("Author <br> Information");
        $(".author-title2").html("Mitch Albom’s <br> background");
        authorBio("background");
        $(".change").addClass("red");
        $(".change").removeClass("change-color");
        $(".part1, .part2").css("background-color", '#EFEFEF');
        $(".part1, .part2").css("color", '#999999');

    } else {
        $(".author-title1").html("Inspiration <br> for");
        authorBio("inspiration");
        $(".author-title2").html("\"Tuesdays with Morrie\"");
        $(".change").addClass("change-color");
        $(".change").removeClass("red");
        $(".part1, .part2").css("background-color", '#9F382E');
        $(".part1, .part2").css("color", '#F9F4FB');
        // $(".part1").css("background-color",'#EFEFEF');
    }
});

function authorBio(topic) {
    $('#part-1').html(authorbiolist[topic][0].text);
    $('#part-2').html(authorbiolist[topic][1].text);
}
// Lessons Slide
var lessonlist = {}
lessonlist.love = [{
        quote: "Love each other or perish",
        explanation: "Morrie emphasized the importance of love in our lives. He believed that without love, we cannot truly live. He reminded us that love should be at the center of everything we do, including our relationships, careers, and personal pursuits."
    },
    {
        quote: "Love transcends death",
        explanation: "Morrie also taught us that love is eternal and that it transcends death. He believed that our loved ones never truly leave us, and that they continue to live on through our memories and the impact they had on our lives."
    },
    {
        quote: "Love requires sacrifice",
        explanation: "Morrie emphasized the importance of sacrificing one's own desires for the sake of their loved ones. He believed that love requires selflessness and putting others before oneself."
    },
    {
        quote: "Love transcends boundaries",
        explanation: "Morrie taught that love has no boundaries and can bridge differences in race, culture, religion, and age. He believed that love can unite people and bring them closer together."
    }
]
lessonlist.forgiveness = [{
        quote: "Forgive yourself",
        explanation: "Morrie believed that forgiveness is essential for our own well-being. He stressed the importance of forgiving ourselves for our mistakes and shortcomings, as well as forgiving others for any harm they may have caused us."
    },
    {
        quote: "Forgiveness frees us",
        explanation: "Morrie also taught us that forgiveness is liberating. It frees us from the burden of anger, resentment, and bitterness, and allows us to move forward with love and compassion in our hearts."
    },
    {
        quote: "Forgiveness is a gift to oneself",
        explanation: "Morrie believed that holding onto anger and resentment only harms oneself, and that forgiveness is a gift that allows one to let go of negative emotions and move on."
    },
    {
        quote: "Forgiveness is a process",
        explanation: "Morrie taught that forgiveness is not a one-time event, but a process that requires effort and time. He believed that it is a journey of healing and growth."
    }
]
lessonlist.aging = [{
        quote: "Aging is natural",
        explanation: "Morrie believed that aging is a natural part of life and that we should embrace it with grace and dignity. He reminded us that our bodies may change as we age, but our spirits can remain strong and vibrant."
    },
    {
        quote: "Aging brings wisdom",
        explanation: "Morrie also taught us that aging brings wisdom. He believed that as we age, we gain a deeper understanding of life and its meaning. He encouraged us to learn from our experiences and to share our knowledge with others."
    },
    {
        quote: "Aging is a natural part of life",
        explanation: "Morrie believed that aging is a natural process that everyone goes through, and that it is important to embrace it rather than fight it."
    },
    {
        quote: "Aging can bring wisdom",
        explanation: "Morrie taught that aging can bring wisdom and insight, and that it is possible to learn and grow throughout one's life, no matter how old they are."
    }
]

var lessonlist_html = "<li><div class='icon'>{{icon}}</div><h3>{{quote}}</h3></li></ul></div>";
var lessonexplain_html = "<p>❝{{explanation}}❞</p>";

function displayLessons(lessonType, icon) {
    $("#showlesson_list").empty();

    for (var i = 0; i < lessonlist[lessonType].length; i++) {
        var item = lessonlist[lessonType][i];

        var current_list_html = lessonlist_html
            .replace("{{quote}}", item.quote)
            .replace("{{icon}}", icon);
        $('#showlesson_list li').first().css("color", "#9F382E");

        current_list_html = $(current_list_html).click(function () {
            var index = $(this).index();
            var current_explain_html = lessonexplain_html
                .replace("{{explanation}}", lessonlist[lessonType][index].explanation);
            $("#showlesson_explain").empty().append(current_explain_html);
            $("#showlesson_list li").css("color", "white");
            $(this).css("color", "#9F382E");
        });

        $("#showlesson_list").append(current_list_html);
    }

    var current_explain_html = lessonexplain_html
        .replace("{{explanation}}", lessonlist[lessonType][0].explanation);
    $("#showlesson_explain").empty().append(current_explain_html);
}

displayLessons("love", "♥");

$(".love-btn").click(function () {
    displayLessons("love", "♥");
    $(".lesson-title").text("Lessons on Love");
    $(".btn-wrap .button").css('color', "#999999")
    $(this).css('color', "black");
});

$(".forgiveness-btn").click(function () {
    displayLessons("forgiveness", "☻");
    $(".lesson-title").text("Lessons on Forgiveness");
    $(".btn-wrap .button").css('color', "#999999")
    $(this).css('color', "black");

});
$(".aging-btn").click(function () {
    displayLessons("aging", "⧗");
    $(".lesson-title").text("Lessons on Aging");
    $(".btn-wrap .button").css('color', "#999999")
    $(this).css('color', "black");
});

// Gallery
const slideData = [{
    title: 'Images',
    images: [
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ]
}];
slideData[0].images.forEach(function (image) {
    const swiperSlide = $('<div>').addClass('swiper-slide');
    const imgUrl = $('<a>').attr('href', image).attr('data-fancybox', 'gallery');
    const img = $('<img>').addClass('image').attr('src', image).attr('alt', '');
    swiperSlide.append(imgUrl);
    imgUrl.append(img);
    $('.swiper-wrapper').append(swiperSlide);
});

var swiper = new Swiper('.carousel-gallery .swiper-container', {
    effect: 'slide',
    speed: 900,
    direction: 'horizontal',
    loop: false,
    slidesPerView: '5',
    spaceBetween: 60,
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        425: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        991: {
            slidesPerView: 4,
            spaceBetweenSlides: 60
        },
        1240: {
            slidesPerView: 5,
            spaceBetweenSlides: 70
        },
    }
});

$('[data-fancybox]').fancybox({
    buttons: [
        'close'
    ],
    toolbar: false,
    clickContent: false
});