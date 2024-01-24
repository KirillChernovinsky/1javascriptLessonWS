

// 'use strict'  //строгий режим
// alert("asd");
// let a;
// a = 5;
// console.log(a)
// // или так
// let b=5;
// console.log(b)
// //
// let c=b*a;
// console.log(c)
// // а если 2 раза?
// // let d=1;
// // let d=2;
//
// const name='Vasya';
// var new1 ='New'
// console.log(new1);
// ////
// ////
// if(true){
//     var test = true;
// }
//
// alert(test)
// ////
// ////
// let m=15.25
// console.log(typeof m)
// ///
// ///
// let o
// console.log(10/o)
// ///
// ///
// let t = 12345767n;
// console.log(`abd ${t}`)
// ///
// ///
// let name1 = prompt('Enter your name', ' Vasya')
// console.log(name1)
// let confirm1 = confirm('Are you a student?')
// console.log(confirm1)
// ////
// ////
// //// преобразование числа в строку
// let n = String(15);
// console.log(typeof n)


//// ЗАДАНИЯ
// let user_name = prompt('What is your name?')
// console.log(user_name)

// let age = 17
// console.log(`Мне ${age} лет`);
//
// let a = prompt('Ваше имя?');
// alert(a)

// let num = prompt("Введите число, " +
//     "которые нужно возвести в квадрат:")
// numquarty = num ** 2
// alert(numquarty)


// let stroka = 'abcde'
// let letter = stroka[0]
// let letter1 = stroka[3]
// console.log(letter, letter1)

///////////////////////////////////////

// let num = "12345";
// let product = 1;
//
// for (let digit of num) {
//     product *= parseInt(digit);
// }
//
// console.log(product);
///////////////////////////////////////
////


// // час
// let secondsInHour = 60 * 60;
// console.log("Секунд в часе: " + secondsInHour);
//
// // день
// let secondsInDay = secondsInHour * 24;
// console.log("Секунд в дне: " + secondsInDay);
//
// // неделя
// let secondsInWeek = secondsInDay * 7;
// console.log("Секунд в неделе: " + secondsInWeek);
//
// // месяц
// let secondsInMonth = secondsInDay * 30;
// console.log("Секунд в месяце: " + secondsInMonth);


// let num = 5
// let quertynum = num ** 2
// console.log(quertynum)



// let num = 10
// num = ++num
// alert(num)






// let a = 1, b = 1;
//
// let c = ++a ;
// let d = b++;
//
// console.log(c)
// console.log(d)
// console.log(b)

////
// let a = 2;
// let x = 1 + (a *= 2);
//
// console.log(a)
// console.log(x)

////
// let x = "" + 1 + 1
// console.log(typeof x)
// console.log(x)
//
// let x = "" - 1 + 0
// console.log(typeof x)
// console.log(x)
////Это не работает
//// let v = true + false
//// console.log(typeof v)
//// let s = '6' / 3
//// console.log(s)

////
// let a = prompt('Первое число?', 1);
// let b = prompt("Второе число?", 2);
// x = parseInt(a) + parseInt(b);
// console.log(typeof x);
// console.log(x);
// ////
//
// let num = 3;
// alert(num)


////
// let a = 10;
// let b = 2;
//
// alert(a+b);
// alert(a-b);
// alert(a*b);
// alert(a/b);


// let c = 15
// let d = 2
// let result = (c + d)
// console.log(result)
//
//
// let a = 10;
// let b =2;
// let c = 5;
// alert(a+b+c);
////

//
// let a = 17;
// let b = 10;
// let c = a - b;
// let d = 7;
// let result = c + d;
// alert(result)

////

// let n = "Привет, Мир!"
// console.log(n)

// let m = 'привет,';
// let k = 'Мир';
// console.log(m + k)

////
// let name = 'Kirill'
// let hei = "Привет,"
// console.log(hei, name)

///////////



// if (5<9){
//     console.log('yes')
// }else{
//     console.log('no')
// }
// if (5==8){
//     console.log('no, blin')
// } else if (3<7){
//     console.log('no')
// } else if (18+5 > 16){
//     console.log('aaaaa')
// } else {
//     console.log('oooooo')
// }


////
// let a=1;
// switch (a){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     default:
//         console.log('error')
//         break;
// }
////
//// в питоне тернарный оператор a = 15 if 1 > 5 else 0
//// тут проверка на ошибки
// let state = true
// let a = state ? console.log('yes') : console.log('no')

////
// let state = 9+15 < 3;
// let a = state ? console.log('yws') :
//     (2>6) ? console.log('sfvsf') :
//         (2+9 == 3) ? console.log('adf') : console.log('aafb')
//

//// Циклы
// let i = 0
// while (i<6){
//     console.log(i++);
// }
//
// do {
//     console.log(i--);
// }while (i>0);
//
//
//
// for (let i=0; i<10; i++){
//     console.log(i)
// }
//
//
//
// for (let i=0; i<10; ){
//     console.log(i)
//     i++
// }


// let array = [45,48,191,321]
// ////по индексам
// for (let i in array){
//     console.log(array)
// }
// ////по значениям
// for (let i in array){
//     console.log(array[i])
// }
//
// let array2 = {
//     'name': 'Vasya',
//     'age': 18
// }
// for (let i in array2){
//     console.log(i, array2[i])
// }
//
//
//
// first: for (let i=0; i<=5; i++){
//     for (let j=0; j<=5; j++) {
//         if (j == 3) {
//             continue first;
//         }
//      console.log(i, j)
//     }
// }




////в питоне def summ(a, b)
//// return a + b


// console.log(summ(2,3))
// function summ(a, b){
//     let one, two;
//
//     function first(x){
//         one = x
//     }
//     function second(x){
//         two = x
//     }
//     first(a);
//     second(b)
//     return one+two
// }
//
// // Function Declaration

// let i = 0;
// function sum(a,b){
//     console.log(i)
//     i++
//     if (i == 10){
//         clearInterval(time)
//     }
// }
// let time = setInterval(sum, 1000, 2,3)

//
// let a = sum
// console.log(a(5,9))
//
//
// // Function Expression
//
// let sum2 = function (a, b){
//     return a+b
// }
// console.log(sum2(1, 2))
//
//
// //Arrow Functions
//
// let sum3 = (a, b) => {return a+b}
// console.log(sum3(8,2))


// console.log(a)