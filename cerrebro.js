
window.onload = function() {
  const Entrada = document.querySelector("input")
  const Spoiler = document.querySelector("#spoiler")

const Neurona = new braind.NeuronaNetwork();


  Entrada.addEventListener("change", (e) =>{
    Spoiler.style.background = e.target.value;
    var ColorRGB = getRgb(e.target.value);
    console.log("camiar color "+e.target.value);
    console.log("Rojo "+ColorRGB.r);
    console.log("Azul "+ColorRGB.b);
    console.log("Verde "+ColorRGB.g);
  })


  function getRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
    g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
    b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
  } : null;
 }
}
