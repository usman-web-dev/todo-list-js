function ontodo() {
  const input$ = document.getElementById("input");
  const btn$ = document.getElementById("button");

  if (input$.value === "") {
    btn$.setAttribute("disabled", "");
  } else {
    btn$.removeAttribute("disabled");
  }
}
