// 1. prime number

/*for (let i = 1; i <= 5; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if ( flag == 0) {
        console.log(i);
    }
}*/
  //Output:235

// 2.new string first and last char pos is change
/*function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length-1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abcd'));*/

// 3.chech given strings in a and b between 3 gap
/*function ab_Check(str)
 {
    return (/a...b/).test(str) || (/b...a/).test(str);
 }

console.log(ab_Check("Chainsbreak"));
console.log(ab_Check("pane borrowed"));
console.log(ab_Check("abCheck"));*/

//Output:true true  false

//4. count vowel in string
/*function vowel_Count(str)
{ 
  return str.match(/[aeiou]/g).length;
 
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));*/

//Output: 1 5

// 5. to check in string p and a is same time repeat
/*function equal_pt(str)
{ 
  var str_p = str.match(/[p]/g);

  var str_t = str.match(/[t]/g);

  var p_num = str_p.length;
  var s_num = str_t.length;

  return p_num === s_num;
         
}
console.log(equal_pt("paatpss"));
console.log(equal_pt("paatpst"));*/

//Output:false true

//6.is given string first char convert in upper case
/*function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  
    }

    return str.join(" ");
}

console.log(capital_letter("this is india"));
*/

//Output:This Is India


//7.in is given string first and last char remove and create new string
/*function flchar(str)
{
    if(str.length>=3)
    {
                     //substr  -2
        let nstr=str.substring(1,str.length-1);
        return nstr;
    }
    else
    return false;
}

console.log(flchar('abcd'));
console.log(flchar('abcde'));*/


//Output:bc bcd

//8.this program two string first char remove than create new string combine two string
/*function flconcate(str,str1)
{
    if(str.length>=2 && str1.length>=2)
    {
         str=str.substring(1);
         str1=str1.substring(1);

         return str + str1;
    }
     else
     return false;
}

console.log(flconcate('php','js'));
console.log(flconcate("A","B"));
console.log(flconcate("AA","BB"));*/


//Output: hps false AB

//9.is given string last three char is move to first of string
/*function right_three(str)
{
   if(str.length>=4)
   {
       return str.slice(-3) +  str.slice(0,-3);
   }
   else
   return false;
}

console.log(right_three('python'));*/

//Output:honpyt

//10.this program to find middle string
/*function middle_three(str) {
    if (str.length % 2!= 0) {
    
     mid = (str.length + 1)/2;
     return str.slice(mid - 2, mid + 1);
     }
   return str;
 }
     console.log(middle_three('abcdefg'));
     console.log(middle_three('HTML5'));
     console.log(middle_three('Python'));
     console.log(middle_three('PHP'));
     console.log(middle_three('Exercisesgb'));*/

// Output: cde TML Python PHP cis




     
// 11.this programe two string is equal or not check than not equal than long string remove char 
    /*function str_con_cat(str1, str2) {
        const m = Math.min(str1.length, str2.length);
      
        return str1.substring(str1.length - m) + str2.substring(str2.length - m);
      }
      
      console.log(str_con_cat("Python", "JS"));
      console.log(str_con_cat("abc", "ab"));*/

    //Output: onJS bcab

//12.this program to check string end with 'Script'
     /* function end_script(str) {
  if (str.substring(str.length - 6, str.length) == 'Script') 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}
       console.log(end_script("JavaScript"));
       console.log(end_script("Java Script"));
      console.log(end_script("Java Scripts"));*/ 
      
//Output: true true false

