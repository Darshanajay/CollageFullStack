var sname = document.querySelector("#name");
var email = document.querySelector("#email");
var address = document.querySelector("#address");
var sub = document.querySelector("#submit");





const checkValid = () => {
  let nameV = sname.value;
  let emailV = email.value;
  let addressV = address.value;
  localStorage.setItem("name",nameV);
  localStorage.setItem("email",emailV);
  localStorage.setItem("address",addressV);
  return;
}

sub.addEventListener("click",checkValid);