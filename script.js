var saveBtn = $(".saveBtn");
saveBtn.on("click", function(e) {
  alert("clicked!");
});
var currentHour = moment().hour();

var getHours = [];
var test = [];

for (let i = 0; i < 9; i++) {
  test.push(parseInt($(".hour")[i].textContent));
  var timeBlock = $('.timeblock')
  console.log(timeBlock);
  if ($(".hour")[i].textContent) > currentHour) {
    $(timeBlock[i]).addClass("future");
  } else if (test < currentHour) {
    $(timeBlock[i]).addClass("past");
  } else {
    $(timeBlock[i]).addClass("present");
  }
