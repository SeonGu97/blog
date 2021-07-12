var num = 1;
var kind;

// if 문
if(num > 0) {
  kind = '양수'; // 만약 num의 값이 0보다 크면 kind = '양수'; 가 실행된다.
}
console.log(kind); // 양수

// if...else 문
if(num > 0) {
  kind = '양수'; // 만약 num의 값이 0보다 크면 kind = '양수'; 작으면 kind = '음수';
}else {
  kind = '음수';
}
console.log(kind) // 양수

// if...else if 문
if(num > 0) {
  kind = '양수'; // // 만약 num의 값이 0보다 크면 kind = '양수'; 1과 같다면 '같음'; 작으면 '음수';
}else if(num === 1) {
  kind = '같음';
}else {
  kind = '음수';
}
console.log(kind); // 같음

// switch 문
let month = 11;
let monthName;

switch (month) {
  case 1 : monthName = 'January';
    break;
  case 2 : monthName = 'February';
    break;
  case 3 : monthName = 'March';
    break;
  case 4 : monthName = 'April';
    break;
  case 5 : monthName = 'May';
    break;
  case 6 : monthName = 'June';
    break;
  case 7 : monthName = 'July';
    break;
  case 8 : monthName = 'August';
    break;
  case 9 : monthName = 'September';
    break;
  case 10 : monthName = 'October';
    break;
  case 11 : monthName = 'November';
    break;
  case 12 : monthName = 'December';
    break;
  default : monthName = 'Invalid month';
}
console.log(monthName); // November

// for문(반복문)
for(let i = 0; i < 5; i++) { // 변수 i의 값이 5보다 큰가? 크지 않으면 i의 값을 1씩 증가, 크다면 반복문 종료
    console.log(i);// 1, 2, ,3 ,4
  }
// while문(반복문)
let counter = 0;

// 무한루프
while (true) {
  console.log(counter);
  counter++;
  
  // counter가 5이면 코드 블록을 탈출한다.
  if(counter === 3) break; // 0, 1, 2
}