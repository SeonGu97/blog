function add(x, y) {
    // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
    // 즉, 매개변수의 스코프는 함수 몸체 내부이다.
    console.log(x, y); // 2, 5
    return x + y;
}
add(2, 5);
  
// 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
console.log(x, y); // ReferenceError: x is not defined

var num1 = 1; // 코드의 가장 바깥 영역에서 선언한 변수(전역 변수)

if(true) {
  var num2 = 2; // 코드 블록 내에서 선언한 변수
  if(true) {
    var num3 = 3; // 중첩된 코드 블록 내에서 선언한 변수
  }
}

function foo() {
  var num4 =  4; // 함수 내에서 선언한 변수

  function bar() {
    var num5 = 5; // 중첩된 함수 내에서 선언한 변수
  }
}

console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3
console.log(num4); // ReferenceError: num4 is not defined
console.log(num5); // ReferenceError: num5 is not defined
// 변수는 자신이 선언된 위치에 의해 자신이 유효한 범위, 즉 다른 코드가 변수 자신을 참조할 수 있는 범위가 결정된다.

