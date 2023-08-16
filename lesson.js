 function name ( a , b){
    return a + b;
 }
 console.log(name(2,5));

 function pozitive (a,b,c){
    if(a > 0){
        return "Positive"
    }   
    else if (b>0){
        return "Positive"
    }
    else if (c>0){
        return "Positive"
    }
    
}

console.log(pozitive(2,-3, 0));

function negative (a,b,c){
    if(a < 0){
        return "Negative"
    }   
    else if (b < 0){
        return "Negative"
    }
    else if (c < 0){
        return "Negative"
    }
    
}
console.log(negative(2,-3, 0));

function zero (a,b,c){
    if(a==0){
        return "Zero"
    }   
    else if (b==0){
        return "Zero"
    }
    else if (c==0){
        return "Zero"
    }
    
}
console.log(zero(2,-3, 0));

function multiply (a) {
    
    for (let index = 1;  index <= 10 ; index++) {
        console.log(a,"*",index,"=",a*index,);
    }

}
  multiply (2)

  function find (a) {
    if( a % 10 == 9){
        return "YES"
    }
    else {
       return"NO"
    }  
}
console.log(find(139));

function centry (a) {
    return Math.ceil(a/100)
}
console.log( centry (1705));

function area ( a , p=3.14) {
    let s
    return Math.round (s = (a * a) * p) 
    
}
console.log(area(5));

function divise (a) {
    
    return Math.floor( a/100 + a/10%10 + a%10)

}
console.log(divise(123));

function posneg (a) {
    if(a>0){
        return a+1;
    }
    else {
       return a-2;
    }
}
console.log(posneg(-3));

function pilus (a,b) {
    if (a+b > 100) {
        return "folse"
    }
    else{
        return "true"
    }
}
console.log(pilus(110,50));

function hour (a,b,c) {
 
    let j = a*3600; 
    let k = b*60;
   
    if (j > k && j > c ) {
        return a;
    }
    else if (k > j && k > c) {
        return b;
    } 
    else {
        return c;
    }
}
console.log(hour(15, 955, 59400));
