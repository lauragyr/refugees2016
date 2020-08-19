// get all diagrams in an array
var diagrams = document.querySelectorAll(".diagram")

// for every diagram, add an event listener
for(var i=0; i < diagrams.length; i++) {
  var diagram = diagrams[i]
  diagram.addEventListener("click", toggleData)
}

// get all legend svgs in an array
var legends = document.querySelectorAll(".legend-svg")

// for every legend, add an event listener
for(var i=0; i < legends.length; i++) {
  var legend = legends[i]
  legend.addEventListener("click", toggleData)
}

// add a class if it does not have it
// take it away if it does
function toggleData(e) {
  var parent = e.target.parentElement
  if(parent.classList.contains("showdata")) {
    parent.classList.remove("showdata")
  } else {
    parent.classList.add("showdata")
  }
}
