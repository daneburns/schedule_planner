

var saveBtn = $(".saveBtn");
saveBtn.on("click", function(e) {
  alert("clicked!", this.saveBtn[i]);
  
});

var textAreas = $('textarea')
console.log(textAreas[0])

textAreaClear()
function textAreaClear(){
  for (let i = 0; i < textAreas.length; i++) {
    var textAreaNum = textAreas[i]
    if(!textAreaNum.hasClass('saved')){
    textAreas[i].value = ''
    }
  }
}

var currentHour = moment().hour();
var hours = $('.hour')
var hoursArray = [];
console.log(hours[0])


console.log(textAreas)

for (let i = 0; i < 9; i++) {
  hoursArray.push(parseInt(hours[i].textContent))
}



  // if hours = current hour then assign .present
  // else if hours < current assign class .past
  // else if hours > current assign class .future to the timeblock in the same div as that hour 

for (let i = 0; i < hoursArray.length; i++) {
  if(hoursArray[i] > currentHour){
    $(textAreas[i]).addClass('future')
  }
  else if(hoursArray[i] < currentHour){
    $(textAreas[i]).addClass('past')
  }
  else{
    $(textAreas[i]).addClass('present')
  }
  
}


