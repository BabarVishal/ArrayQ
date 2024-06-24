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

// Q2, implement a custom forEach in javaScript

Array.prototype.customForEachOne = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
}
// this => array
// i => index


 Array.prototype.forEachtwo = function(callback, thisContext){
    if(typeof callback !== "function"){
        throw`This not a function`;
    }

    let length = this.length;
    let i = 0;

    while(i < length){
        if(this.hasOwnProperty){
            callback.call(thisContext, this[i], i, this);
        }
        i++
    }

 }
