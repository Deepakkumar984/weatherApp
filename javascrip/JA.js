// var c = 5;
// var d = 5;
// var x = 2;
// var y = 2;
// var a = 9
// var b = 9
// var g;
// var h = "deepak";
// var e;
// var f = "faraz";
// if (c === d) {
//     if (x === y) {
//         g = h;
//         console.log("value x === y", g)
//     } else if (a === b) {
//         g = h;
//         console.log("value a === b", g)

//     } else {
//         e = f;
//     }
// } else {
//     e = f;
// }
// var arry1=[1,2,3,4];
// var arry2 =[5,6,7,8];
// var res=arry1.concat(arry2);
// console.log(res);


// var res = Math.max(3, 5, 74, 3, 2)
// console.log(res);

// function getdata(...args) { //rest operator
//     console.log(args);
//     for (var i = 0; i < args.length; i++) {
//         if (args[i] == "karachi") {
//             console.log(i);
//         }
//     }
// }
// getdata("umair", "khan", "karachi");


// var arr = ["Deepak", "is", "a", "good", "boy"];
// for (var a in arr) {
//     console.log(arr[a]);
// }
// for (var a of arr) {
//     console.log(a);
// // }


// function sum(name, ...arr) {
//     let sum = 0;
//     for (const a of arr) {
//         sum += a
//     }
//     console.log(`${name} ${sum}`)
// }
// sum("deepak", 30, 30, 60);


// function sum() {
//     let sum = 0;
//     for (const i in arguments) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// sum(20, 30);


// function myFunction(num) {
//     return num * 12
// }
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction);

// document.getElementById("demo").innerHTML = newArr;
// // document.write(numbers);

// function myFunction(num) {
//     return num * 10;
// }
// alert("hello world")

// practice
// const arr = ["apple", "mango", "banana", "orange"];

// var show = document.getElementById("demo");
// let arr2 = arr.map((index) => {
//     return (`<li>${index}</li>`);
// })
// show.innerHTML = arr2.join("")



// var arr = ["apple", "banana", "mango", "orange", "Mulberry", "Guava", "Papaya", "Pineapple", "Raspberry"];
// var show = document.getElementById("demo").innerHTML = happy();
// var c = arr.map();

// function happy() {
//     return (`<li>${c}</li>`);
// }


// method 1
// var a = [1, 2, 3, 4, 5]
// var b = a.map(myfunction);
// for (const b of a) {
//     c = b * 4;
//     console.log(c);
// }

// method 2
// var a = [1, 2, 3, 4, 5]
// a.forEach(b => {
//     c = b * 4;
//     console.log(c);
// });

// function myfunction(num2) {
//     return num2 * 5;
// }
// console.log(b);



//     var data = ["hello", "how are you ", "what do you do?"]
// var showPara = document.getElementById("demo")
// var showData = data.map((index) => {
//     })
// showPara.innerHTML = showData.join('')




// let cities = ["karachi", "peshawar", "quetta", "hyderabad"];
// let { age, address } = userdata
// console.log(age, address);

// function getuser(userdatas) {
//     let { username, address } = userdatas
//     console.log(username, address)
// }
// getuser({
//     username: 'deepak',
//     age: '20',
//     address: 'karachi',
//     institute: 'jawan pakistan',
//     module: 'module b'
// })

//  

// function clock(name, age) {
//     console.log(`this is a function of ${name} - ${age}`)
// }
// clock("deepak", "15");
// clock = name => `hello miss ${name}`
// console.log(clock("DEEPAK"));


// promises
prom = (a, b) => {
    return new Promise((resolve, reject) => {
        console.log("fetching data, please wait")
        var c = a / b;
        setTimeout(() => {
            if (c) {
                resolve(`your answer is : ${c}`);
            } else {
                reject("rejected!!!  your data is wrong");
            }

        }, 2000)
    });
}
prom(0, 0).then((result) => {
    console.log(result)
}).catch((Error) => {
    console.log(Error);
});