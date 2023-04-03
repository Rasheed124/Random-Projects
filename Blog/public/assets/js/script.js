// NAVABR
const menuHarmburger = document.querySelector(".menu_harmburger");
side_menu_container = document.querySelector(".side_menu_container"),
  side_menu = document.querySelector(".side_menu"),
  mobile_active = document.querySelector(".mobile_active");

const body_stack = document.querySelector(".body_stack");




// TOGGLE NAVBAR 
menuHarmburger.addEventListener("click", (e) => {

  side_menu_container.classList.toggle("close");



});

mobile_active.addEventListener("click", (e) => {

  side_menu_container.classList.toggle("close");



});



// Header On scroll events
const header = document.querySelector(".scroll_header");
const fixed_header = document.querySelector(".fixed_header");


const sectionOne = document.querySelector(".header_banner_container");
const sectionOneOptions = {
  rootMargin: "-550px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
      fixed_header.classList.add("remove_fixed_header");
    } else {
      header.classList.remove("scrolled");
      fixed_header.classList.remove("remove_fixed_header");

    }
  });
},
  sectionOneOptions);

sectionOneObserver.observe(sectionOne);




$(document).ready(function () {


  //jquery for toggle sub menus
  $('.listitem_dropdown').click(function () {
    $(this).toggleClass('list');
    $(this).find('.sub-menu').slideToggle();
    $(this).find('.dropdown').toggleClass('rotate');
  });

  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('backToTop');
    } else {
      btn.removeClass('backToTop');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });



});

