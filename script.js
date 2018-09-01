var main = document.querySelector(".main");
var sidebar = document.querySelector(".sidebar");
var openNav = document.querySelector(".openNav");

function toggleOpen() {
	main.classList.toggle("mainON");
	sidebar.classList.toggle("sidebarON");
	openNav.classList.toggle("openNavON");
}

