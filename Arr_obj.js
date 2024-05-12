// create a array 
/*

const transaction1 =[
    {firstName:"madhubalan",Age:20,Acc_no:389000,Type:"Credit",Bal:2000},
    {firstName:"Aakah",Age:30,Acc_no:389003,Type:"Depit",Bal:5000},
    {firstName:"maadesh",Age:24,Acc_no:389043,Type:"Depit",Bal:2560},
    {firstName:"Arun",Age:26,Acc_no:389042,Type:"credit",Bal:4560},
    {firstName:"mUkesh",Age:40,Acc_no:389023,Type:"Depit",Bal:4000},
];
console.log(transaction);
//loop method

/*
transaction.forEach(trans => {
    console.log(trans.Acc_no,"Transaction type is "+trans.Type,"Balance "+trans.Bal);
});


//Get particular method
console.log(transaction[0].Bal); 

//update the value

transaction[0].Bal = 3000;
console.log(transaction[0].Bal); //output 3000

*/
function Transactions(transactions) {

    const categories = {
        Credit: [],
        Debit: []
    };

    transactions.forEach(transaction => {
        if (transaction.Type.toLowerCase() === 'credit') {
            categories.Credit.push(transaction);
        } else if (transaction.Type.toLowerCase() === 'debit') {
            categories.Debit.push(transaction);
        }
    });

   
    categories.Credit.totalAmount = categories.Credit.reduce((acc, curr) => acc + curr.Bal, 0);
    categories.Debit.totalAmount = categories.Debit.reduce((acc, curr) => acc + curr.Bal, 0);

    return categories;
}

// Example usage:
const transaction = [
    { firstName: "madhubalan", Age: 20, Acc_no: 389000, Type: "Credit", Bal: 2000 },
    { firstName: "Aakah", Age: 30, Acc_no: 389003, Type: "Debit", Bal: 5000 },
    { firstName: "maadesh", Age: 24, Acc_no: 389043, Type: "Debit", Bal: 2560 },
    { firstName: "Arun", Age: 26, Acc_no: 389042, Type: "Credit", Bal: 4560 },
    { firstName: "mUkesh", Age: 40, Acc_no: 389023, Type: "Debit", Bal: 4000 },
];

const categorizedTransactions = Transactions(transaction);
console.log(categorizedTransactions);

