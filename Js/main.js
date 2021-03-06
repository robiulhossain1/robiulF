// document.write('<select>');
// document.write('<option>Year</option>')

// var i;
// for(i=2019; i>=1960; i--){
//     document.write('<option>'+i+'</option>');
// }

// document.write('</select>');

// var m=1;
// while(m<=30){
//     document.write('hello');
//     m=m+1
// }

// for(i=1; i<=100; i++){
//     document.write("<div class='namta'>")
//     for(j=1; j<=10; j++){
//      var r = i*j;
//      document.write(i+'X'+j+'='+r+'<br>')
//     }
//     document.write('</div>')
// }


// var m=60;
// if(m>=00 && m<33){
//     document.write('<span>Grade F</span>')
// }
// else if(m>=33 && m<40){
//     document.write('<span>D</span>')
// }
// else if(m>=40 && m<50){
//     document.write('<span>C</span>')
// }
// else if(m>=50 && m<60){
//     document.write('<span>B</span>')
// }
// else if(m>=60 && m<=100){
//     document.write('<span>A+</span>')
// }

// else{
//     document.write('<h1>Invalid Marks</h1>')
// }
function check(){
    var user_name = document.getElementById('user');
    var user_email = document.getElementById('email');
    var renter_email = document.getElementById('remail');
    if(user_name.value==''){
        alert('User Name Required');
        user_name.focus();
        return false;
    }
    if(user_email.value==''){
        alert('E-mail Required');
         user_email.focus();
         return false;
    }
    if(renter_email.value==''){
        alert('Confirm Your E-mail');
         renter_email.focus();
         return false;
    }
    if(user_email.value != renter_email.value){
         alert('Email Not Matched');
         renter_email.focus();
         return false;
    }
}