function mobileNavIsActive(event) {
  const allNavBtns = document.querySelectorAll(".navMobile_btn");
  allNavBtns.forEach((btn) => btn.classList.remove("active_btn"));

  const clickedBtn = event.currentTarget.querySelector(".navMobile_btn");
  clickedBtn.classList.add("active_btn");
}
