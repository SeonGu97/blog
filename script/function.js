// 함수의 선언과 호출
function add(x, y) { // 함수의 선언, add는 함수 이름, (x, y)는 매개변수
    return x + y; // return은 함수를 즉시 종료하고 값을 반환하는 역할을 한다.
  }
const result = add(1, 2); // 함수의 호출, (1, 2)는 매개변수에 들어갈 값, x + y는 1 + 2와 같다.
console.log(result); // 3

// 함수의 재사용
function minus(x, y) {
    return x - y;
}
console.log(minus(2, 1)); // 1
console.log(minus(4, 2)); // 2
console.log(minus(6, 3)); // 3

// 콜백 함수
function callback(x, y) {
    // 1 + 2가 3이 맞다면 x()실행 아니라면 y()실행
    return 1 + 2 == 3 ? x() : y(); // x()
}
callback(print1, print2);

function print1() {
    console.log('Hello');
}

function print2() {
    console.log('World');
}

