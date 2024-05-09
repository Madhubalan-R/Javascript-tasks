// using Recursion print the values 

function print(a, b) {
    if (a === b) {
        return a;
    } else {
        console.log(a);
        return print(a+1,b);
    }
}

console.log(print(1, 10));



//factorial

function fact(n){
    if(n==0 || n==1){ 
        return 1;

    }
    else{
       
        return n*fact(n-1);
    }
}
console.log(fact(5));
