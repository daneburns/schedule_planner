

var saveBtn = $(".saveBtn");
var day = moment().days()
console.log(day)
console.log($("row:nth-child(2)").hasClass('saved'))
saveBtn.on("click", function(e) {
localStorage.setItem($(this).prev().val())
  
});

var textAreas = $('textarea')

textAreaClear()

var currentHour = moment().hour();
var hours = $('.hour')
var hoursArray = [];

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

console.log(textAreas[0].attributes[0])

function textAreaClear(){
  for (let i = 0; i < textAreas.length; i++) {
    // if(!textAreas[i].attributes[0].value.contains('saved') ('saved')){
    textAreas[i].value = ' '
    // }
  }
}
