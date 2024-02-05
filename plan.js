var coll = document.getElementsByClassName("collapsible");
var i;

var pageOrder = ["intro.html", "sb1.html", "sb2.html", "sb3.html"];

for (i = 0; i < 4; i++) {
  coll[i].addEventListener("click", function() {
    // Get the index of the clicked element
    var index = Array.prototype.indexOf.call(coll, this);

    // Check if the index is valid
    if (index >= 0 && index < pageOrder.length) {
      // Construct the URL and navigate to the page
      window.location.href = pageOrder[index];
    }
  });
};