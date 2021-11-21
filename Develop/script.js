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
    console.log(tB);
});


saveSchedule = function () {
    var textBoxArea = $(this).siblings("textarea").val();
    var textBoxID = $(this).parent().attr("id")
    localStorage.setItem(textBoxID, textBoxArea);
}




//saves the text fields when save button is clicked
$(".saveBtn").on("click", saveSchedule)


$("#9").children("textarea").val(localStorage.getItem("9"));
$("#10").children("textarea").val(localStorage.getItem("10"));
$("#11").children("textarea").val(localStorage.getItem("11"));
$("#12").children("textarea").val(localStorage.getItem("12"));
$("#13").children("textarea").val(localStorage.getItem("13"));
$("#14").children("textarea").val(localStorage.getItem("14"));
$("#15").children("textarea").val(localStorage.getItem("15"));
$("#16").children("textarea").val(localStorage.getItem("16"));
$("#17").children("textarea").val(localStorage.getItem("17"));