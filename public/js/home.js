// searchForm = document.querySelector('.search-form');
// document.querySelector('#search-btn').onclick = () => {
//   searchForm.classList.toggle('active');
// }

let loginform = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
  loginform.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
  loginform.classList.remove('active');
}

let vidbtn = document.querySelectorAll('.vid-btn');
vidbtn.forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelector('.controls .active').classList.remove('active');
    btn.classList.add('active');
    let src = btn.getAttribute('data-src');
    document.querySelector('#vid-slider').src = src;
  });
});

window.onscroll = () => {
  searchForm.classList.remove('active');
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}
window.onload = () => {
  if (window.scrollY > 80) {
    document.querySelector('.header .header-2').classList.add('active');
  }
  else {
    document.querySelector('.header .header-2').classList.remove('active');
  }
}
var swiper = new Swiper(".offer-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let chatbot = document.querySelector('.chatbot');
document.querySelector('.chat-icon').onclick = () => {
  chatbot.classList.toggle('active');
}
document.querySelector('.chat-icon').onclick = () => {
  chatbot.classList.remove('active');
}

questionFirst = $('[data-question]:first').attr('data-question');
$('#chatlist ul').append('<li class="admin-message">' + questionFirst + '</li>');

$('[data-question]:first').appendTo('.message-box');

$('#send').click(function (event) {
  questionVal = $('.message-box [data-question]').val();
  $("#chatlist ul").append('<li class="client-message">' + questionVal + '</li>');
  dataName = $('.admin-client-message-wrap [data-name]').attr('data-question');
  if ($('.message-box [name]').attr('name') == "name") {
    nameVal = $('.message-box [name]').val();
    $('.admin-client-message-wrap [data-name]').attr('data-question', "Hello ", +nameVal + ",</br>" + dataName)
  };
  $('.message-box [data-question]').appendTo('.submit_info');

  if ($('.admin-client-message-wrap').children().length != 0) {
    questionFirst = $('[data-question]:first').attr('data-question');
    $('#chatlist ul').append('<li class="admin-message">' + questionFirst + '</li>');
    $('[data-question]:first').appendTo('.message-box');

    $('#send').css({ "pointer-events": "none" });
    $('.message-box [data-question]').bind('click change keyup', function (event) {
      if ($(this).val() == "") {
        $('#send').css({ "pointer-events": "none" });
      }
      else {
        $('#send').css({ "pointer-events": "auto" });
      }
    });
}
  $('#chatlist').animate({ scrollTop: 5000 });
});

$('.message-box [data-question]').bind('click change keyup', function (event) {
  if ($(this).val() == "") {
    $('#send').css({ "pointer-events": "none" });
  }
  else {
    $('#send').css({ "pointer-events": "auto" });
  }
});
$("#confirm").click(function(event){
 $('#submit').trigger('click');
});
$("#notconfirm").click(function(event){
 location.reload();
});








  // var swiper = new Swiper(".brand-slider", {

  //   slidesPerView: 3,
  //   cssMode: true,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  //   mousewheel: true,
  //   keyboard: true,
  //  });
