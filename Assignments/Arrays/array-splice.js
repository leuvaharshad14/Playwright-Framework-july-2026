let arr = [10, 20, 30, 40, 50, 60]
console.log(arr);
arr.splice(2, 1)
console.log(arr);//[ 10, 20, 40, 50, 60 ]

arr.splice(1, 1)
console.log(arr);// 10, 40, 50, 60 ]

arr.splice(1, 1, 45)
console.log(arr);// 10, 45, 50, 60 ]

arr.splice(1, 2)
console.log(arr);// 10, 45, 50, 60 ]


