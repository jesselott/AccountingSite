// $('#btn1').click(function(){
//   $('#vanish1').toggleClass('show');
//   $('body').animate({
//         scrollTop: $("#vanish1").offset().top
//     }, 2000);
  
// });

// $('#btn2').click(function(){
//   $('#vanish2').toggleClass('show');
//   $('html, body').animate({
//         scrollTop: $("#vanish2").offset().top
//     }, 2000);
// });

// $('#btn3').click(function(){
//   $('#vanish3').toggleClass('show');
//   $('html, body').animate({
//         scrollTop: $("#vanish3").offset().top
//     }, 2000);
// });

// $('#btn4').click(function(){
//   $('#vanish4').toggleClass('show');
//   $('html, body').animate({
//         scrollTop: $("#vanish4").offset().top
//     }, 2000);
// });

// $('#btn5').click(function(){
//   $('#conclusion').toggleClass('show');
//   $('html, body').animate({
//         scrollTop: $("#conclusion").offset().top
//     }, 2000);
// });

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

function ProcessFlour() {
    var selected = document.getElementById("sel1").value;

    if (selected == 1) {
        alert("Congrats, you are a natural!  You sent the flour to the Crusting Department.")

    }
    else if (selected == 2) {
        alert("You send FLOUR?! to the Diabolical Butchers?!! The section manager, Genghis, threatens you and your family over the phone.  You sheepishly hang up and rethink your decision.");
    }

    else {//selected == 3
        alert("Ay, mate, this is some funky cheese, we wasted about a quarter of it until we realized...it ain't cheese!  You lose a quarter of your flour, and have to order more, raising your flour costs.")
    }
}

function ProcessPepperoni() {

}

function ProcessCheese() {

}
