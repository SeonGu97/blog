//객체
//자바스크립트는 객체 기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의 "모든 것"이 객체다.
let person1 = {
    name: 'Lee',
    age: 20
  };
// (name: 'Lee', age: '20'는 프로퍼티), (name, age는 프로퍼티 키), ('Lee', 2)은 프로퍼티 값
let counter = {
    num: 0, // => 프로퍼티
    increase: function () { // => 메서드
      this.num++;
    }
  };

// 프로퍼티
//객체는 프로퍼티의 집합이며, 프로퍼티는 키오 값으로 구성된다.
let person2 = {
    // 프로퍼티 키는 name, 프로퍼티 값은 'Lee';
    name: 'Lee';
    //프로퍼티 키는 age, 프로퍼티 값은 20
    age: 20
  };
//프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
//프로퍼티 값 : 자바스크립트에서 사용할수 있는 모든 값
  

// 메서드
//자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값으로 사용할 수 있다고 했다. 아직 살펴보지 않았지만 자바스크립트의 함수는 객체다.
//따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있다.
let circle = {
    radius: 5, // => 프로퍼티
  
    // 원의 지름
    getDiameter: function () { // => 메서드
        return 2 * this.radius; // this는 circle을 가리킨다.
    }
  };
  
  console.log(circle.getDiameter()); // 10