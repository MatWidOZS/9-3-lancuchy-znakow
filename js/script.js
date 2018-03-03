var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

dinosaur = dinosaur.toUpperCase();

console.log(dinosaur);

text = text.replace('Velociraptor', dinosaur);

console.log(text.length/2);  // = 72

var halfText = text.slice(0, 72);

console.log(halfText);