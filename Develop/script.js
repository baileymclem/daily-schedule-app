$(document).ready(function () {

    //current day
    $("#currentDay").append(moment().format("MMM Do YY"));

    //Save button
    $(".saveBtn").on("click", function () {
        //need to get to right element -- sibling of parent's child
        let key = $(this).parent().siblings(".second").find("input").attr("id");
        let value = $(this).parent().siblings(".second").find("input").val();
        console.log("key: " + key, "value: " + value);
        localStorage.setItem(key, value);

    })


    // checking background color
    $(".description").each(function () {
        if (moment().hours() === parseInt($(this).attr("id"))) {
            // current hour
            $(this).addClass("present");
        } else if (moment().hours() > parseInt($(this).attr("id"))) {
            // past hour
            $(this).addClass("past");
        } else {
            //future
            $(this).addClass("future");
        }
    })



    //retrieving info from localstorage

    //failing to figure out how to do that with a loop

    // for (i = 0; i < localStorage.length; i++) {

    //      if(localStorage.key(i) == $("input").attr("id")) {
    //         $("input").attr("id").val(localStorage.getItem(key));
    //     }


    //just retrieving info from local storage this way
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));






})
