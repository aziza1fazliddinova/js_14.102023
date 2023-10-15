// таблица умножения
// for(let i = 1 ; i <= 10 ; 
//     i++){
//     for (let k = 1; k <=10 ; 
//         k++){
//         document.write(` ${i}*${k}= ${i*k} <br/>`)
//     }
//     document.write(`<hr/>`)
// }


// for (let i= 5; i >0; i--){
//     for (let k = 0;  k <i; k++){
//         document.write('*')
//     }
//     document.write('<br/>')
// }
// *
// ** 
// *** 
// ****
// ***** 

let companies = [
    {
        id: 1,
        name: 'baxtMen',
        budget: 200000,
        tax: 19,
        expenses: [10000, 2000, 60000]
    },
    {
        id: 2,
        name: 'nosfrush',
        budget: 1000,
        tax: 0,
        expenses: [50, 100, 10]
    },
    {
        id: 3,
        name: 'artyomida',
        budget: 400000,
        tax: 23,
        expenses: [5000,14000,3000]
    },
    {
        id: 4,
        name: 'azizas',
        budget: 150000,
        tax: 0,
        expenses: [5000,6000,4000]
    },
    {
        id: 5,
        name: 'openBobur',
        budget: 500,
        tax: 12,
        expenses: [10,30,5]
    },
    {
        id: 6,
        name: 'IS_buildings',
        budget: 1000000,
        tax: 21,
        expenses: [500000, 25000, 10000]
    },
    {
        id: 7,
        name: 'XOJIK_RADAR',
        budget: 40000,
        tax: 12,
        expenses: [500, 2500, 1000]
    },
]
companies.forEach(company => {
    let obshie_expenses = company.expenses.reduce(( a, b ) => a + b);
    company.obshie_expenses= obshie_expenses;

    companies.forEach(company => {
        let obshiy_pribil = company.budget - company.obshie_expenses - (company.budget * (company.tax / 100));
        company.obshiy_pribil = obshiy_pribil ;
    });
    
});

console.table(companies);