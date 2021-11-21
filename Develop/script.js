document.querySelector("#currentDay");
var m = moment().format("dddd MMMM, Do");

//gives the inline 
$("#currentDay").text(m);

var currentHour = parseInt(moment().format('H'));


//changes background-color according to time
//tB refers to the timeBlock
$(".timeblock").each(function () {
    var tB = $(this).attr("id")
    if (tB == currentHour) {

        $(this).children("textarea").addClass("present");
    } else if (tB < currentHour) {
        $(this).children("textarea").addClass("past");

    } else if (tB > currentHour) {
        $(this).children("textarea").addClass("future");
    }
});


saveSchedule = function () { 
    var textBoxArea = $(this).siblings("textarea").val();
    var textBoxID = $(this).parent().attr("id")
    localStorage.setItem(textBoxID, textBoxArea);
}




//save the text fields when save button is clicked
$(".saveBtn").on("click", saveSchedule)

// var textBoxArea = $(this).siblings(".hour").children("textarea").val();
// var textBoxID = $(this).siblings(".hour").attr("id");
// localStorage.setItem(textBoxID, textBoxArea);

//description class, 

$("#hour9").children("textarea").val(localStorage.getItem("hour9"));
$("#hour10").children("textarea").val(localStorage.getItem("hour10"));
$("#hour11").children("textarea").val(localStorage.getItem("hour11"));
$("#hour12").children("textarea").val(localStorage.getItem("hour12"));
$("#hour13").children("textarea").val(localStorage.getItem("hour13"));
$("#hour14").children("textarea").val(localStorage.getItem("hour14"));
$("#hour15").children("textarea").val(localStorage.getItem("hour15"));
$("#hour16").children("textarea").val(localStorage.getItem("hour16"));
$("#hour17").children("textarea").val(localStorage.getItem("hour17"));