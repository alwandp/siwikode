$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  items: 4,
  dots: false,
  nav: true,
  navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  smartSpeed: 1200,
  autoHeight: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1
    },
    480: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    },
  }
});

// Function Login
function login(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username == "admin" && password == "admin"){
    // alert("login sukses!")
    window.location.href = "kelola-rekreasi.html";
  }else{
    document.geteleme("Username atau password salah!")
  }
}

function load() {
  alert("Username : admin & Password : admin");
}

function popup() {
  alert("Kelompok 6: Alwan, Ammar, Fathiah, Mubdi"); 
}
