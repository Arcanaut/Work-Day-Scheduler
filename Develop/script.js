document.querySelector("#currentDay");
var m = moment().format("dddd MMMM, Do");

//gives the inline 
$("#currentDay").text(m);

var currentHour = parseInt(moment().format('H'));


//changes background-color according to time
//tB refers to the timeBlock
$(".timeblock").each(function () {
    var tB = $(this).attr("id")
    console.log(tB);
    if (tB == currentHour) {

        $(this).children("textarea").addClass("present");
    } else if (tB < currentHour) {
        $(this).children("textarea").addClass("past");

    } else if (tB > currentHour) {
        $(this).children("textarea").addClass("future");
    }
});

var textboxArea = $(this).siblings(".hour").children("textarea").val();
var textboxID = $(this).siblings(".hour").attr("id");

var saveSchedule = function () {
    console.log($(this).siblings(".hour").children("textarea").val());
    var textboxArea = $(this).siblings(".hour").children("textarea").val();
    var textboxID = $(this).siblings(".hour").attr("id");
    localStorage.setItem(textBoxID, textBoxArea);
}

//save the text fields when save button is clicked
$(".saveBtn").on("click", saveSchedule)