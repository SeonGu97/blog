// 데이터 타입

// 1.숫자타입
var integer = 10; // 정수
var double = 10.12; // 실수
var negative = -20; // 음의 정수

// 숫자 타입은 모두 실수로 처리된다.
console.log(1 === 1.0); //true

// 숫자 타입의 특별한 세 가지 값
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(1 * 'String'); // NaN

// 2.문자열 타입
var string;
string = '문자열'; // 작은따옴표
string = "문자열"; // 큰따옴표
string = `문자열`; // 백틱(ES6)

string = '작은따옴표로 감싼 문자열 내의 "큰따옴표"는 문자열로 인식된다.';
string = "큰따옴표감싼 문자열 내의 '작은따옴표'는 문자열로 인식된다.";

// 따옴표로 감싸지 않은 hello를 식별자로 인식한다.
var string = hello; // ReferenceError: hello is not defined

// 3.템플릿 리터럴
var template = `Template literral`;
console.log(template); // Template literral


// 표현식 삽입
// 따옴표
var first = 'Ung-mo';
var last = 'Lee';
// ES5: 문자열 연결
console.log('My name is' + first + ' ' + last + '.'); // My name is Ung-mo Lee.

// 백틱
var first = 'Ung-mo';
var last = 'Lee';
// ES6: 표현식 삽입
console.log(`My name is ${first} ${last}.`); // My name is Ung-mo Lee.

// 백틱
console.log(`1 + 2 = ${1 + 2}`); // 1 + 2 = 3

// 따옴표
console.log('1 + 2 = ${1 + 2}') // 1 + 2 = ${1 + 2}; 

// 4.불리언 타입
var foo = true;
console.log(foo); // true

foo = false;
console.log(foo); // false

// 5.undefined 타입
var foo;
console.log(foo); // undefined

// 6.null 타입
var foo = 'Lee';

// 이전 참조를 제거. foo 변수는 더이상 'Lee'를 참조하지 않는다.
foo = null;

// 7.심벌타입
// 심벌 값 생성
var key = Symbol('key');
console.log(typeOF key); // symbol

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = 'value';
console.log(obj[key]) // value