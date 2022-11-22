var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;
window.onscroll = function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.background= "#008073fa";
  } else if (window.pageYOffset < sticky) {
    navbar.classList.add("sticky");
    navbar.style.background= "#9ba6af43";
  }
  else {
    navbar.classList.remove("sticky");
  }
}
function open_logo_box() {
  var model_box_all = document.querySelector(".logo_discription");
  model_box_all.style.display="block";
}
function close_logo_box() {
  var model_box = document.querySelector(".logo_discription");
  model_box.style.display="none";
}
function open_logo_1_download_box() {
  var model_box_all = document.querySelector(".logo_download_box");
  var logo_display = document.querySelector(".logo_display");
  var img = document.createElement('img');
  var logo_download = document.querySelector("#logo_download");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  logo_download.setAttribute('href', '/images/logo/logo_5.PNG');
  model_head_info.innerHTML = "पुरानाे लाेगाे डाउन्लाेड बक्स";
  model_box_all.style.display="block";
  img.src ='/images/logo/logo_5.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub1() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  var model_head_info = document.querySelector(".logo_download_box_head_info");
  model_box_all.style.display="none";
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
  model_box_all.style.display="block";
  img.src ='/images/logo/logo_2.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub2() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display="none";
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
  model_box_all.style.display="block";
  img.src ='/images/logo/logo_1.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_sub3() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display="none";
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
  model_box_all.style.display="block";
  img.src ='/images/fav-icon/fav-icon.PNG';
  logo_display.appendChild(img);
}
function close_logo_box_subfav() {
  var model_box_all = document.querySelector(".logo_download_box");
  var img = document.querySelector(".logo_display img");
  model_box_all.style.display="none";
  img.remove();
}
function open_left_side_box_more() {
  var hidden_icons = document.querySelector(".left_side_more_icon");
  var more_icon = document.querySelector(".see_more_box");
  more_icon.style.display="none";
  hidden_icons.style.display="block"; 
  hidden_icons.setAttribute("closing","");

}
function close_left_side_box_more() {
  var hidden_icons = document.querySelector(".left_side_more_icon");
  var hidden_icons_closing = document.querySelector(".left_side_more_icon[closing]");
  var more_icon = document.querySelector(".see_more_box");
  hidden_icons_closing.style.animation = "close_boxes 500ms forwards ease-in-out";
  hidden_icons_closing.addEventListener(
    "animationend",
    () => {
      more_icon.style.display="flex";
      hidden_icons.style.display="none";
      hidden_icons.removeAttribute("closing");
      hidden_icons_closing.style.animation = "open_boxes 500ms forwards ease-in-out";
    },
    { once: true }
  );
}
/*animation: close_boxes 500ms forwards ease-in-out; */
/*var close = document.querySelector(".see_less_box");
var hidden_icons = document.querySelector(".left_side_more_icon");
close.addEventListener('animationend' , () => {
hidden_icons.removeAttribute("closing");
}, {once: true})*/

function open_more_left_foot() {
  var open_box = document.querySelector(".left_side_foot_more");
  var background = document.body;
  open_box.classList.toggle('flex');
  background.onclick() = function() {
    open_box.classList.remove('flex');
  }
  
}
/* for navigation bar for tab and mobile phone */
function open_nav_small() {
  var nav_bar = document.querySelector(".navigation_items");
  var nav_menu = document.querySelector(".nav_menu");
  var nav_close = document.querySelector(".show_hide_nav_bar")
  var menu_text = document.querySelector(".nav_hide_menu")
  nav_bar.classList.toggle("show_hide_nav_bar");
  if(nav_bar.offsetHeight != 0) {
    nav_menu.style.background = "#000000b4";
    menu_text.style.color = "#d1d4d4";
  } else {
    nav_menu.style.background = "#989898b4";
    menu_text.style.color = "inherit";
    nav_bar.setAttribute('closing', '');
  }
}

/* For copyright year */
var date = new Date();
var year = date.getFullYear();
document.querySelector(".year").innerHTML = year;
document.querySelector("#year").innerHTML = year;