"use strict";
/* For sticky navigation bar */
var navbar = document.querySelector("#navigation");
var sticky = navbar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.background = "rgb(48 104 99 / 81%)";
  } else if (window.pageYOffset < sticky) {
    navbar.classList.add("sticky");
    navbar.style.background = "#9ba6af43";
  }
  else {
    navbar.classList.remove("sticky");
  }
};
/* ----------------------------------------------------------- */

/* For the download box of logos */
function open_logo_box() {
  var model_box_all = document.querySelector(".logo_discription");
  model_box_all.style.display = "block";
}
function close_logo_box() {
  var model_box = document.querySelector(".logo_discription");
  model_box.style.display = "none";
}
function open_logo_1_download_box() {
  var model_box_all = document.querySelector(".logo_download_box");
  var logo_display = document.querySelector(".logo_display");
  var img = document.createElement('img');
  var logo_download = document.querySelector("#logo_download");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  logo_download.setAttribute('href', '/images/logo/logo_5.PNG');
  model_head_info.innerHTML = "पुरानाे लाेगाे डाउन्लाेड बक्स";
  model_box_all.style.display = "block";
  img.src = '/images/logo/logo_5.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub1() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  model_box_all.style.display = "none";
  model_head_info.innerHTML = "";
  img.remove();
}
function open_logo_2_download_box() {
  var model_box_all = document.querySelector(".logo_download_box");
  var logo_display = document.querySelector(".logo_display");
  var img = document.createElement('img');
  var logo_download = document.querySelector("#logo_download");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  logo_download.setAttribute('href', '/images/logo/logo_2.PNG');
  model_head_info.innerHTML = "स्ट्याम्प लाेगाे डाउन्लाेड बक्स";
  model_box_all.style.display = "block";
  img.src = '/images/logo/logo_2.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub2() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display = "none";
  img.remove();
}
function open_logo_3_download_box() {
  var model_box_all = document.querySelector(".logo_download_box");
  var logo_display = document.querySelector(".logo_display");
  var img = document.createElement('img');
  var logo_download = document.querySelector("#logo_download");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  logo_download.setAttribute('href', '/images/logo/logo_1.PNG');
  model_head_info.innerHTML = "डिजिटल लाेगाे डाउन्लाेड बक्स";
  model_box_all.style.display = "block";
  img.src = '/images/logo/logo_1.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub3() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display = "none";
  img.remove();
}
function open_logo_fav_download_box() {
  var model_box_all = document.querySelector(".logo_download_box");
  var logo_display = document.querySelector(".logo_display");
  var img = document.createElement('img');
  var logo_download = document.querySelector("#logo_download");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  logo_download.setAttribute('href', '/images/fav-icon/fav-icon.PNG');
  model_head_info.innerHTML = "त्याब बार आइकन डाउन्लाेड बक्स";
  model_box_all.style.display = "block";
  img.src = '/images/fav-icon/fav-icon.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_subfav() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display = "none";
  img.remove();
}
/*---------------------------------------------------------------------------- */

/* Animation for opening and closing of left side more boxes in desktop view */
function open_left_side_box_more() {
  var hidden_icons = document.querySelector(".left_side_more_icon");
  var more_icon = document.querySelector(".see_more_box");
  more_icon.style.display = "none";
  hidden_icons.style.display = "block";
  hidden_icons.setAttribute("closing", "");
}
var hidden_icons = document.querySelector(".left_side_more_icon");
var hidden_icons_closing = document.querySelector(".left_side_more_icon[closing]");
var more_icon = document.querySelector(".see_more_box");
function close_left_side_box_more() {

  hidden_icons_closing.style.animation = "close_boxes 300ms forwards ease-in-out";
  hidden_icons_closing.addEventListener(
    "animationend",
    () => {
      animation_End();
    },
    { once: true }
  );
}
function animation_End() {
  more_icon.style.display = "flex"
  hidden_icons.style.display = "none";
  hidden_icons.removeAttribute("closing");
  hidden_icons_closing.style.animation = "open_boxes 500ms forwards ease-in-out";
}
/* ------------------------------------------------------------------------------------ */

/* homepage left side box footer when clicked in  थप*/
function open_more_left_foot() {
  var open_box = document.querySelector(".left_side_foot_more");
  open_box.classList.toggle('flex');
}
/* ------------------------------------------------------------------------------------ */

/* for navigation bar for tab and mobile phone */
function open_nav_small() {
  var nav_bar = document.querySelector(".navigation_items");
  var open_icon = document.querySelector(".nav_menu_open");
  var close_icon = document.querySelector(".nav_menu_close");
  nav_bar.removeAttribute('closing');
  nav_bar.classList.add("show_hide_nav_bar");
  nav_bar.style.transformOrigin = "top center";
  nav_bar.style.animation = "nav_open 400ms ease-in forwards";
  if (nav_bar.offsetHeight != 0) {
    open_icon.style.display = "none";
    close_icon.style.display = "block";
  }
}
var nav_bar = document.querySelector(".navigation_items");
var nav_lists = document.querySelector("#navigation_items");
var nav_list_background = document.querySelector("#nav_bar_layer");
var nav_list_btn_open = document.querySelector("#nav_menu_open");
var nav_list_btn_close = document.querySelector("#nav_menu_close");
window.onclick = function (event) {
  var count = 0;
  do {
    if (count === 0) {
      close_nav_small();
      count = count + 1;
    }
  } while (event.target.id !== nav_lists && event.target.id !== nav_list_background && event.target.id !== nav_list_btn_open && event.target.id !== nav_list_btn_close); {
    do {
      if (count === 1) {
        open_nav_small();
      }
    } while (event.target.id === nav_list_btn_open);
  }
  nav_bar.classList.add("show_hide_nav_bar");
  nav_bar.style.transformOrigin = "top center";
  nav_bar.style.animation = "nav_open 400ms ease-in forwards";
  if (nav_bar.offsetHeight != 0) {
    open_icon.style.display = "none";
    close_icon.style.display = "block";
  }
};
function close_nav_small() {
  var nav_list_background = document.querySelector("#nav_bar_layer");
  var nav_bar = document.querySelector(".navigation_items");
  var nav_close = document.querySelector(".show_hide_nav_bar");
  var open_icon = document.querySelector(".nav_menu_open");
  var close_icon = document.querySelector(".nav_menu_close");
  nav_bar.style.transformOrigin = "top center";
  nav_bar.style.animation = "nav_close 400ms ease-in forwards";
  close_icon.style.display = "none";
  open_icon.style.display = "block";
  nav_bar.setAttribute('closing', '');
  nav_close.addEventListener(
    "animationend",
    () => {
      nav_bar.classList.remove("show_hide_nav_bar");
      nav_bar.removeAttribute("closing");
    },
    { once: true }
  );
}

/* -------------------------------------------------------------- */

/* For copyright year */
var date = new Date();
var year = date.getFullYear();
document.querySelector(".year").innerHTML = year;
document.querySelector("#year").innerHTML = year;
/* ----------------------------------------------------------- */