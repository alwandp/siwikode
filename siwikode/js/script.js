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

// Alert kelompok 6
function kel() {
  alert("Kelompok 6 : Alwan Dwi Putra, Ammar Mubarok R, Fathiah Al Habsyi, Mubdi Haryanto")
}

// Function Login
function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if(username == "admin" && password == "admin"){
    window.location.href = "kelola-rekreasi.html";
  }else{
    alert("Username atau password salah!");
  }
}

// Login
function load() {
  alert("Username : admin & Password : admin");
}


// Form Validatiom
function validatePhoneNumber(input_str) {
  var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(input_str);
}
function validateEmail(input_str) {
  var em = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return em.test(input_str);
}

function formValidation(){
  var nw = document.forms["registForm"]["nama"].value;
  var sel = document.forms["registForm"]["select"].selectedIndex;
  var desk = document.forms["registForm"]["desc"].value;
  var cp = document.forms["registForm"]["cp"].value;
  var hp = document.forms["registForm"]["phone"].value;
  var email = document.forms["registForm"]["email"].value;
  var url = document.forms["registForm"]["url"].value;
  var alamat = document.forms["registForm"]["alamat"].value;
  if (nw == "") {
    document.getElementById("textvalid").innerHTML = "Nama tidak boleh kosong";
    nw.focus();
    return false;
  }
  if (sel == "") {
    document.getElementById("selvalid").innerHTML = "Jenis wisata harus dipilih"
    sel.foucs();
    return false;
  }
  if (desk == "") {
    document.getElementById("deskvalid").innerHTML = "Deskripsi harus diisi";
    desk.focus();
    return false;
  }
  if (cp == "") {
    document.getElementById("cpvalid").innerHTML = "Kontak Person harus diisi";
    cp.focus();
    return false;
  }
  if (hp == "") {
    document.getElementById("phonevalid").innerHTML = "Nomor handphone harus diisi";
    hp.focus();
    return false;
  }
  else if (!validatePhoneNumber(hp)) {
    document.getElementById("phonevalid").innerHTML = "Nomor handphone tidak valid";
    hp.focus();
    return false;
  }
  if (email == "") {
    document.getElementById("emailvalid").innerHTML = "Email harus diisi";
    email.focus();
    return false;
  }
  else if (!validateEmail(email)) {
    document.getElementById("emailvalid").innerHTML = "Email tidak valid";
    email.focus();
    return false;
  }
  if (url == "") {
    document.getElementById("urlvalid").innerHTML = "Url harus diisi";
    url.focus();
    return false;
  }
  if (alamat == "") {
    document.getElementById("alamatvalid").innerHTML = "Alamat harus diisi";
    alamat.focus();
    return false;
  }

  return true;
}
