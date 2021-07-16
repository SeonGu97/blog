// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Lee';
person.seyHello = function () {
  console.log('Hi! My name is ' + this.name);
};

console.log(person); // {name: 'Lee', sayHello: f}
person.seyHello(); // Hi! My name is Lee



// String 생성자 함수에 의한 String 객체 생성
const strObj = new String('Lee');
console.log(typeof strObj); // Object
console.log(strObj); // String {'Lee'}

// Boolean 생성자 함수에 의한 Boolean 객체 생성
const boolObj = new Boolean(true);
console.log(typeof boolObj); // Object
console.log(boolObj); // Boolean {true}

// Function 생성자 함수에 의한 Function 객체(함수) 생성
const func = new Function('x', 'return x * x');
console.log(typeof func); // function
console.log(func); // f anonymous(x)

// Array 생성자 함수에 의한 Array 객체(배열) 생성
const arr = new Array(1, 2, 3);
console.log(typeof arr); // Object
console.log(arr); // [1, 2, 3]

// RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp); // Object
console.log(regExp); // /ab+c/i

// Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date); // Object
console.log(date); // Fri Jul 16 2021 13:59:28 GMT+0900 (대한민국 표준시)



// 객체 리터럴에 의한 객체 생성 방식의 문제점
const circle1 = {
    radius: 5,
    getDiameter() {
      return 2 * this.radius;
    }
};
 console.log(circle1.getDiameter()); // 10

 const circle2 = {
    radius: 10,
    getDiameter() {
      return 2 * this.radius;
    }
};
console.log(circle2.getDiameter()); // 20



// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle3 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle3.getDiameter()); // 10
console.log(circle4.getDiameter()); // 20



// this
// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
    console.log(this);
}
  
// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo(); window

const obj = {foo}; // ES6 프로퍼티 축약 표현

// 메서드로서 호출
obj.foo(); // obj

// 생성자 함수로서 호풀
const inst = new foo(); // inst
  