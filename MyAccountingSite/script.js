$('#btn1').click(function(){
  $('#vanish1').toggleClass('show');
  $('body').animate({
        scrollTop: $("#vanish1").offset().top
    }, 2000);
  
});

$('#btn2').click(function(){
  $('#vanish2').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish2").offset().top
    }, 2000);
});

$('#btn3').click(function(){
  $('#vanish3').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish3").offset().top
    }, 2000);
});

$('#btn4').click(function(){
  $('#vanish4').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#vanish4").offset().top
    }, 2000);
});

$('#btn5').click(function(){
  $('#conclusion').toggleClass('show');
  $('html, body').animate({
        scrollTop: $("#conclusion").offset().top
    }, 2000);
});

function CalculateWip() {

    var laborValue = Number(document.getElementById("labor").value);
    var materialValue = Number(document.getElementById("materials").value);
    var ohValue = Number(document.getElementById("overhead").value);

   
    document.getElementById("wip").value = laborValue + materialValue + ohValue;
}

function CalculateJobOne() {

    var indirect = Number(document.getElementById("job1direct").value);
    var direct = Number(document.getElementById("job1indirect").value);

    var jobTotal = indirect + direct;
    var otherJobTotal = Number(document.getElementById("job2").value);
    document.getElementById("job1").value = jobTotal;
    document.getElementById("jobWip").value = jobTotal + otherJobTotal;
    
}
   
    
function CalculateJobTwo() {

    var indirect = Number(document.getElementById("job2direct").value);
    var direct = Number(document.getElementById("job2indirect").value);

    var jobTotal = indirect + direct;
    var otherJobTotal = Number(document.getElementById("job1").value);
    document.getElementById("job2").value = jobTotal;
    document.getElementById("jobWip").value = jobTotal + otherJobTotal;
}