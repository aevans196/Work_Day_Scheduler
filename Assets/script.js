let userInput;
let hourSpan;
let hour = moment().hours();
const todaysDate = moment().format("dddd, MMMM Do");

// Use the latest version of jQuery (3.6.0)
const nineAm = $("#9");
const tenAm = $("#10");
const elevenAm = $("#11");
const twelvePm = $("#12");
const onePm = $("#13");
const twoPm = $("#14");
const threePm = $("#15");
const fourPm = $("#16");
const fivePm = $("#17");

let interval = setInterval(function() {
  $('#day').html(todaysDate);
}, 1 * 100);

function initSchedule() {
  const am9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(am9);
  const am10 = JSON.parse(localStorage.getItem("10:00 am"));
  tenAm.val(am10);
  const am11 = JSON.parse(localStorage.getItem("11:00 am"));
  elevenAm.val(am11);
  const pm12 = JSON.parse(localStorage.getItem("12:00 pm"));
  twelvePm.val(pm12);
  const pm1 = JSON.parse(localStorage.getItem("01:00 pm"));
  onePm.val(pm1);
  const pm2 = JSON.parse(localStorage.getItem("02:00 pm"));
  twoPm.val(pm2);
  const pm3 = JSON.parse(localStorage.getItem("03:00 pm"));
  threePm.val(pm3);
  const pm4 = JSON.parse(localStorage.getItem("04:00 pm"));
  fourPm.val(pm4);
  const pm5 = JSON.parse(localStorage.getItem("05:00 pm"));
  fivePm.val(pm5);
} 

function backgroundColor () {     
  $(".form-control").each(function () {
    let time = parseInt($(this).attr("id"));
    hour = parseInt(hour);

    if (hour > time) {
      $(this).addClass("past");
    } else if (hour < time) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
}

$(document).ready(function() {
  initSchedule();
  backgroundColor();

  $(".save").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  });

  $("#clear").on("click", function(){
    localStorage.clear();
    initSchedule();
  });
});