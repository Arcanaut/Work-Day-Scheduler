document.querySelector("#currentDay");
var m = moment().format("dddd MMMM, Do");

//gives the inline 
$("#currentDay").text(m);

var currentHour = (moment().format('H'));


//changes background-color according to time
//tB refers to the timeBlock
$(".timeblock").each(function(){
    var tB = $(this).attr("id")
    console.log(tB);
if (tB === currentHour ) {
    
    $(this).children("textarea").addClass("present");
}
else if(tB < currentHour)
{
    $(this).children("textarea").addClass("past");

}
else if(tB >currentHour ){
    $(this).children("textarea").addClass("future");
}
});
