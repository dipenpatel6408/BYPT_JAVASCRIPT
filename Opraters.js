let a=10;
let b=3;
//arithmatic 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//comparison 
a=1;
console.log(a>0);
console.log(a>=1);
console.log(a<1);
console.log(a<=1);

//equality
console.log(1===1);
console.log('1'===1);
console.log(1==1);
console.log('1'=='1');
console.log(true==1);//boolean
//ternary
let points=110;

let type=(points>100)?'Gold': 'silver';
console.log(type);

//nested ternary
 type=(points>100)? (points>105) ? ' Gold +':'Gold': 'silver';
console.log(type);


