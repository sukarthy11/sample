//let number=[1,2,"three",true];

//let names = new Array("john","james");

//console.log(number[2]);
//console.log(names,length);
//filter()

//let result=number.filter(result => number[3]);
//console.log(result);
//slice = delete the element based on index value 
//let r=[1,2,3,4,5];
 //r.splice(1,2,"haii");
//console.log(r)

//object
/*let details ={
    names:"vave",
    totalmark:"95"
}
console.log(details.totalmark)
console.log(details["names"]);*/
let employees=[];

function addEmp(id,name,salary = true)
{
    employees.push({id,name,salary});
    console.log("employee added",employees);
}
addEmp(1,"vikashini",20000)
addEmp(2,"abi",50000)
addEmp(3,"anushree",60000)
