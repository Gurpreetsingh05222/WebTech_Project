$(document).ready(function() {
  var count = localStorage.getItem("itemCount");
	if(count == null) {
		count = 0;
	}
	else {
		count = parseInt(count);
	}
	$("#itemCount").text(count);
})
