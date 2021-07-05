// *변수는 하나의 값을 저장하기 위한 메커니즘이다. 여러 개의 값을 저정하려면 여러 개의 변수를 사용해야 한다.
// 단, 배열이나 객체 같은 자료구조를 사용하면 관련이 있는 여러 개의 값을 그룹화해서 하나의 값처럼 사용 할 수 있다.

// 변수는 하나의 값을 저장하기 위한 수단이다.
var userId = 1;
var userName = 'Lee';
console.log(userId, userName);

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용 할 수 있다.
var user = {id: 1, name: 'Lee'};
console.log(user);

var users = [
    {id: 1, name: 'Lee'},
    {id: 2, name: 'Kim'}
];
console.log(users[0], users[1]);


// 10 + 20은 연산을 통해 새로운 값 30을 생성한다. 그리고 연산을 통해 생성된 값 30은 메모리 공간에 저장된다.
// 이때, 메모리 공간에 저정 된 값 30을 다시 읽어 들여 재사용할 수 있도록 값이 저장된 메모리 공간에 상징적인 이름을 붙인 것이 바로 변수다.
var result = 10 + 20;
console.log(result);

// 식별자(변수 이름)은 값이 아니라 메모리 주소를 기억하고 있다!
// 변수를 사용하려면 반드시 선언이 필요하다. 변수를 선언 할때는 var, let, const 키워드를 사용한다. (ES6부터 let, const 도입)

// function level scope(함수 레벨 스코프)
var a = 'Hellow World';
var a = 'Good Night'; // var는 재선언이 가능

function print1() {
console.log(a);
}
print1();

function print2() {
console.log(a);
}
print2();

function print3() {
var a = 'nice to meet you';
console.log(a);
}
print3();

// block level scope(블록 레벨 스코프)
//1
let b = 'Hellow World';

function print4() {
let c = 'nice to meet you';
console.log(b, c);
}
print4();

// console.log(b, c); // c에 접근할 수 없으므로 주석처리

//2
let counter1 = 0;

setInterval(function add1() {
    counter1++;
    console.log(counter1);
}, 2000);

//3
const counter2 = 0;

setInterval(function add2() {
    counter2++;
    console.log(counter2);
}, 2000);