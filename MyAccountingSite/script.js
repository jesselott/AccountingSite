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
        var totalCost = 720.00 + 648.00 + 367.50;
        document.getElementById('crust3').value = totalCost;

    }
    else if (selected == 2) {
        alert("You send FLOUR?! to the Diabolical Saucers?!! The section manager, Genghis, threatens you and your family over the phone.  You sheepishly hang up and rethink your decision.");
    }

    else {//selected == 3
        alert("Ay, mate, this is some funky cheese, we wasted about a quarter of it until we realized...it ain't cheese!")
    }
}

function ProcessTomatoes() {
    var selected = document.getElementById("sel2").value;

    if (selected == 1) {
        alert("Whoa, whoa, whoa, slow down Turbo.  We don't need yer stinkin tomatas over ere in Crustin!");
        
    }
    else if (selected == 2) {
        alert("Wow, you're on a roll!  You sent the tomatoes to the Saucing Department.")
        var totalCost = 900.00 + 600.00 + 122.50;
        document.getElementById('sauz3').value = totalCost;
    }

    else {//selected == 3
        alert("We don't make no veggie-tarian pizzers over here, send these tomatoes to get sauced, mate!")
    }
}




function ProcessPork() {
    var selected = document.getElementById("sel3").value;

    if (selected == 1) {
        alert("Whoa, whoa, whoa, slow down Turbo.  We don't need yer stinkin pork butts over ere in Crustin!");
        
    }
    else if (selected == 2) {
        alert("You send PORK?! to the Diabolical Saucers?!! The section manager, Genghis, threatens you and your family over the phone.  You sheepishly hang up and rethink your decision.");
    }

    else {//selected == 3
        alert("You're the best!  You sent the pork to the Topping Department.")
        var totalCost = 1020 + 1200 + 245
        document.getElementById('sauz3').value = totalCost;
    }
}

function CalculatePizzaCost() {

 var crust = document.getElementById('crust3').value;
 var sauce = document.getElementById('sauz3').value;
 var pork = document.getElementById('pork3').value;

 if (crust && sauce && pork) {

    var totalCost = crust + sauce + pork;
    //calc total
    document.getElementById('totalcost').value = totalCost;
    
    
    //calc price per pie
    document.getElementById('costperpizza') = totalCost / 1250;

    alert('Congratulations, you helped us have a great week, make a lot of pizzas, and a lot of dough!  Literally.')

 }



}
