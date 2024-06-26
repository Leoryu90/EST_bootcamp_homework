/ * this */
function sayName(){
    console.log(this.name);
}

var name = 'Hero';
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
    name : 'Peter Parker',
    sayName : sayName
}

let bruce = {
    name : 'Bruce Wayne',
    sayName : sayName
}

sayName();
peter.sayName();
bruce.sayName();

/* sayName() 함수를 실행했을 때와
peter, bruce 객체의 sayName 함수를 호출했을 때의 결과를 비교해 보세요 */