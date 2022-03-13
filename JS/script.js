$(document).ready(function(){
    $(".design").click(function(){
        $("#hide1").slideToggle();
        $("#design1").slideToggle();
    });
    $(".development").click(function(){
        $("#hide2").slideToggle();
        $("#design2").slideToggle();
    })
    $(".product").click(function(){
        $("#hide3").slideToggle();
        $("#design3").slideToggle();
    })
    $('#project1').hide();
    $('.port').hover(function(){
        $(this).find('#project1').toggle(500);
    });
    $('#project2').hide();
    $('.port').hover(function(){
        $(this).find('#project2').toggle(500);
    });
    $('#project3').hide();
    $('.port').hover(function(){
        $(this).find('#project3').toggle(500);
    });
    $('#project4').hide();
    $('.port').hover(function(){
        $(this).find('#project4').toggle(500);
    });
    $('#project5').hide();
    $('.port').hover(function(){
        $(this).find('#project5').toggle(500);
    });
    $('#project6').hide();
    $('.port').hover(function(){
        $(this).find('#project6').toggle(500);
    });
    $('#project7').hide();
    $('.port').hover(function(){
        $(this).find('#project7').toggle(500);
    });
    $('#project8').hide();
    $('.port').hover(function(){
        $(this).find('#project8').toggle(500);
    });
    $('#button').click(function(){
        const name = document.getElementById("name").value;
        const email = document.getElementById('email').value;
        const message = document.getElementById("message").value;
        if (name == "" || email == ""|| message == ""){
            alert("Please fill in the details");
        } else {
            alert("Thank you " + name + " for contacting us")
        }
    })

});




