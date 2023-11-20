function ontodo() {
  let inputdis = document.getElementById("input");
  let btn = document.getElementById("button");

  if (inputdis.value === "") {
    btn.setAttribute("disabled", '');
  } else {
    btn.removeAttribute("disabled");
  }
}