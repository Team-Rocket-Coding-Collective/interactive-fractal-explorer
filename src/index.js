import Complex from "./complex";

let Z = new Complex(2.4, 45.3);
let C = new Complex(Z.real(), Z.imag());
console.log(C.toString());

window.setup = function(){
    createCanvas(500, 500);
    ellipse(50,50,50,50);
};