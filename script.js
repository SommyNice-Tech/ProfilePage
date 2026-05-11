// const button = document.getElementById("darkModeToggle");
// button.addEventListener("click", function () {
//   document.body.classList.toggle("dark-mode");
// });

// var tablinks = document.getElementsByClassName("tab-links");
// var tabcontents = document.getElementsByClassName("tab-contents");

// function opentab( tabname) {
//   for (tablink of tablinks) {
//     tablink.classList.remove("active-link");
//   }
//   for ( tabcontent of tabcontents) {
//     tabcontent.classList.remove("active-tab");
//   }
//   event.currentTarget.classList.add("active-link");
//   document.getElementById(tabname).classList.add("active-tab");
// }

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemeu = document.getElementById("sidemenu");

function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
};

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyI5TC5leQBWeRcm7VGezshGypsv5u8hGATpL05fxG1bY7ZL8p4eVzq69536Gl-urDCHw/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
