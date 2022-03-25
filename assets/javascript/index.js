

// document.addEventListener('DOMContentLoaded',function(event){
//   array with texts to type in typewriter

const texts = [
    "Full Stack Developer",
    "Website Designer",
    "Programmer",
    "Cake-Artist"
    
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  (function type() {
    
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter =  currentText.slice(0, ++index);
    
    document.querySelector(".dynamic-txt").innerHTML = letter ;
    

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }
    setTimeout(type, 300);

  })();

  




