
//Remove Dublicates from An Array

let arr = [1, 2, 3, 3, 4, 5, 5];

let uniqueArr = [];

for (let i = 0; i < arr.length; i++) 
    {
    if (uniqueArr.indexOf(arr[i]) === -1)// All new values Position Will be -1 so, add 1, 2, 3,
         {
        uniqueArr.push(arr[i]);    //[1,2,3,4,5] if again enter 3 it will be show corresponent position like 2 or 3
    }
}

console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]
 
//create new array using push()

let new_arr = [];
for (let i = 0; i<10;i++){
    new_arr.push(i);
}
console.log(new_arr);

// get the values from Fruits Array using forEach

let fruits = ["apple","orange","banana","pear"];

fruits.forEach(function(_fruits){
        console.log(_fruits);
})


console.log(fruits);
