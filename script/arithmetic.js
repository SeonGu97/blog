// 연산자
// 연산자는 하나 이상의 표현식을 대상으로 산술, 할당 비교, 논리 타입, 지수 연산등을 수행해 하나의 값을 만든다.
// 이때, 연산자의 대상을 피연산자라 한다. 피연산자는 값으로 평가될 수 있는 표현식 이어야 한다.

//산술 연산자
5 + 4; // 20

//문자열 연결 연산자
'My name is ' + 'Lee'; // 'My name is Lee'

//할당 연산자
var color;
color = 'red'; // 'red'

//비교 연산자
3 > 5 // false

//논리 연산자
true && false // false

//타입 연산자
typeof 'Hi' // string


// 단항 산술 연산자
let counter1 = 0;
console.log(counter1++); // 뒤에 ++, --를 붙이면 선할당 후증가가 되어서 0이 출력된다.

let counter2 = 0;
console.log(++counter2); // 앞에 ++, --를 붙이면 선증가 후할당이 되어서 1이 출력된다.

// 할당 연산자
let num;

num = 10;
console.log(num); // 10

num += 5;
console.log(num); // 15

num -= 5;
console.log(num); // 10

num *= 5;
console.log(num); // 50

num /= 5;
console.log(num); // 10

num %= 5;
console.log(num); // 0

// 문자열 연결 연산자
let str = 'Hello ';
str += 'World'; // str = str + 'World';
console.log(str); // Hello World

// 대소 관계 비교 연산자
5 > 0; // true
5 > 5; // false
5 >= 5; // true
5 <= 5; // true

// 삼항 조건 연산자
let x = 3;

// 여기서 조건은 x == 3 이다. '같다' 자리는 true를 반환하고, '다르다' 자리는 false를 반환한다.
console.log(x == 3 ? '같다' : '다르다'); // x 와 3은 값이 같기 때문에 '같다'를 반환한다. 

// 논리 연산자
// 논리합(||) 연산자
true || true; // true
true || false; // false
false || true; // true
false || false ; // false
// ||는 피연산자의 값 중 true가 하나라도 있다면 true를 반환한다.

// 논리곱(&&) 연산자
true || true; // true
true || false; // false
false || true; // false
false || false ; // false
// &&는 피연산자의 값이 모두 true이여야 true를 반환한다

//부정논리(!) 연산자
!true; // false
!false; // true



