document.addEventListener("DOMContentLoaded", function() {
	setTimeout(function() {
	  const preloader = document.querySelector(".preloader");
	  const content = document.querySelector(".content");
 
	  preloader.style.display = "none";
	  content.style.display = "block";
	}, 2400);
 });
 