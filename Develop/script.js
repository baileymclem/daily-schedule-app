$(document).ready(function () {
    //Save button
    $(".saveBtn").on("click", function () {
        //need to get to right element -- sibling of parent's child
        let key = $(this).siblings("input").attr("id");
        let value = $(this).siblings("input").val();
        console.log("key:" + key, "value:" + value);
        localStorage.setItem(key, value);

    })



    console.log(moment().hours());
    // checking background color
    $(".description").each(function () {
        if (moment().hours() === parseInt($(this).attr("id"))) {
            // current hour
            $(this).addClass("present");
        } else if (moment().hours() > parseInt($(this).attr("id"))) {
            // Past hour
            $(this).addClass("past");
        } else {
            //future
            $(this).addClass("future");
        }
    })


    //retrieving info from localstorage
    $("textarea").each(function() {
        if()
    })


})
