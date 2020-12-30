
var today=new Date();
var day =today.getDay();
var dd= today.getDate();
var daylist=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is:"+ daylist[day]);
console.log(day);
console.log(today);
console.log(dd);
let hour=today.getHours();
let min=today.getMinutes();
let sec=today.getSeconds();
console.log(hour +' ' + min + '  '+ sec);




/*console.log('--------------------');
for (var year = 2014; year <= 2050; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() == 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('--------------------');*/



/*let numbers=[1,2,3,4,5,6,7,8,9];
let max=0;
for(let i=0;i<numbers.length;i++){
     if(max<numbers[i])
     max=numbers[i];
}
console.log(max);*/

/*function change_case(txt) {
    var str1 = "";
    for (var i = 0; i < txt.length; i++) {
        if (/[a-z]/.test(txt[i])) str1 += txt[i].toLowerCase();
        else str1 += txt[i].toUpperCase();
    }
    return str1;
}

console.log(change_case("w3resource"));
console.log(change_case("Germany"));
let number =Math.ceil(Math.random()*10);
console.log(number);

*/

/*function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    // edit: increment months if d2 comes later in its month than d1 in its month
    if (d2.getDate() >= d1.getDate())
        months++
    // end edit
    
    console.log( months <= 0 ? 0 : months);
}

monthDiff(
    new Date(2001, 21, 4), // November 4th, 2008
    new Date(2020, 12, 30));  // March 12th,2010*/

    // convert into hour and minute
 function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + ":" + minutes;         
}

console.log(time_convert(71));
console.log(time_convert(450));
console.log(time_convert(1441));
    