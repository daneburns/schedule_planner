
// initialize some variables we will need
var saveBtn = $(".saveBtn");
var day = moment().days()
var textAreas = $('textarea')
var currentHour = moment().hour();
var hours = $('.hour')
var hoursArray = [];
// when clicking on save button, stores these variables to the local storage
saveBtn.on("click", function(e) {
localStorage.setItem($(this).prev().prev().text(), $(this).prev().val())
  
});
//set currentDay
$("#currentDay").text(moment().format("dddd, MMMM Do"));

//create an array for data reference that holds the hours
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
//invoke clear function on page load
textAreaClear()
// function for clearing everything on load, except if that data has been stored in localstorage
function textAreaClear(){
  for (let i = 0; i < textAreas.length; i++) {
  textAreas[i].value = ' '
  if(localStorage.getItem(hoursArray[i]) != undefined){
    textAreas[i].value = localStorage.getItem(hoursArray[i])
  }
  }
}


