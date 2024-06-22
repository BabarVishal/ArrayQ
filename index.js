// Q. Display the original properties of an Array.

Array.prototype.extraProperty = "Vishal";

const myNewArray = [1, 2, 3, 4, 5];

for(let v in myNewArray){
    console.log(v);
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4
// extraProperty

for(let v in myNewArray){
    if(myNewArray.hasOwnProperty(v)){
        console.log(v);
    }
}
//OUTPUT
// 0
// 1
// 2
// 3
// 4
