$(document).ready(function() {

    //Save button
    $(".saveBtn").on("click", function() {

        console.log('this', $(this).siblings('input').val());

        console.log('this', $(this).siblings('input').attr('id'));

        let key =  $(this).siblings('input').attr('id')
        let value = $(this).siblings('input').val()

        localStorage.setItem(key, value);

        $(this).siblings('input').val(localStorage.getItem(key));

    });


    console.log(moment().hours());
    // checking background color
    $(".description").each(function(){
        if(moment().hours()  === parseInt($(this).attr('id'))){
            // current hour
            $(this).addClass('present');
        }else if(moment().hours() > parseInt($(this).attr('id'))){
            // Past hour
            $(this).addClass('past');
        }else{
            //future
            $(this).addClass('future');
        }
    })




  });
