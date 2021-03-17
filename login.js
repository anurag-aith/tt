function login() {

  if (document.box.txt.value == "Himanshu" && document.box.pas.value == "himanshu@123") {
    window.location = "paper.html";
  }
  else {
    alert("Username Or Password Is Incorrect Please Try Again");
  }
}