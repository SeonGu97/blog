// variable hoisting
console.log(score); // undefined

var score; // 변수 선언문
// 변수가 선언되기 전에 호출을 하였다. 에러가 날것 같지만 실제로는 undefined가 출력이 된다.
// 즉, 자바스크립트 엔진은 변수 선언이 소스코드의 어디에 있든 상관없이 다른 코드보다 먼저 실행한다.

// function hoisting
printSeomting(); // 함수 호출

function printSeomting() { //함수 선언
    console.log('hi');
}
// 함수를 선언하기전 호출을 하였다. 하지만 정상적으로 console.log('hi');가 출력이 되었다.
// 모든 선언문은 런타임 이전 단계에서 먼저 실행되기 때문이다.

// 값의 할당
var name;
name = 'SeonGu';

var name = 'SeonGu';
// 변수 선언과 할당을 2개 문으로 나누어 표현한 코드와 변수 선언과 값의 할당이 하나의 문으로
// 단축 표현한 코드는 정확히 동일하게 동작을 한다. 자바스크립트는 변수 선언과 할당을 하나의 문으로
// 작성을 하여도 변수 선언과 할당을 2개의 문으로 나누어 실행한다.
