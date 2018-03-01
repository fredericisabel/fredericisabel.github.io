window.addEventListener("load", function  (evt) {
  afficherDate();
}, false);	

function afficherDate(){
	var date = new Date;
	document.getElementById("footer_copyright").innerHTML = "&copy; " + date.getFullYear() + " - Frédéric Isabel";
}