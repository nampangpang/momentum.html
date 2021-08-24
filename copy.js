/*    const a = 5; //이것도 variable 만드는 방법 
    const b = 2;
    let    myName = "nico"; // const에 변수명을 지을 땐 띄어쓰기 불가
    // 그래서 다음오는 글자의 첫 글자에는 대문자를 쓰는게 대부분 Calmel class라고 부름 (낙타모양)
    // const와 iet의 차이점: constant는 상수이고 constant는 값이 변하지 않는다.
    // var도 변수 지정 가능 그치만 어디서든 업데이트 가능

    console.log("안녕하세요");
    console.log(a + b);
    console.log(a * b);
    console.log(a / b);
    console.log("hello " + myName);

    myName = "남광훈";

    console.log("your name is " + myName);
    */
/*
    const amIFat = null; //null은 아무것도 없음 그냥 비어있음보다는 아무것도 없는 샅애로 채워짐을 뜻함 
let something; //null은 절대 자연적으로 생기지 않음. 여기엔 값이 없다. 라고 알려줄 때 쓰는거임
console.log(something);
console.log(amIFat);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
*/

/*
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const nonsense = [1, 2, "hello", null, false, true, undefined, "남광훈"]; //이것도 가능

console.log(daysOfWeek);

daysOfWeek.push("sun");

console.log(daysOfWeek);
*/

/*
const player = {
    name: "nico",
    points: 10,
    fat: true,

};


console.log(player);

player.fat = false;
player.lastname = "potato";
console.log(player);
console.log(player.name); //console.log(player["name"]);도 가능함
player.name
*/
/*
function sayHello(nameOfPerson, age){
    console.log("Hello my naem is " + nameOfPerson + " and I'm " + age );
}

sayHello("nico", 10);
sayHello("dal", 20);
sayHello("lynn", 21);
*/
/*
function plus(a, b){
    console.log(a, b);
}

plus(8, 60);
*/
/*
const player = {
    name: "nico",
    sayHello: function (otherPersonName) {
        console.log("hello " + otherPersonName + " nice to meet you!");
    },
};


player.sayHello("lynn");
*/
/*
const a = 5;
let isNicofat = true;

isNicofat = false;
*/
/*
const calculator = {
    add : function(a , b) {
        console.log(a + b);
    },
    minus : function(a , b) {
        console.log(a - b);
    },
    divibe : function(a , b) {
        console.log(a / b);
    },
    poowerOf : function(a , b) {
        console.log(a ** b);
    }
};

calculator.add(3 , 2);
calculator.minus(4, 2);
calculator.divibe(8 , 3);
calculator.poowerOf(2 , 3);
*/
/*
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);
*/
/*
const age = parseInt(prompt("How old are you?") );


if (isNaN(age) || age < 0) {
    console.log("please write a real positive number.");
} else if(age < 18) {
    console.log("어려");
} else if (age >= 18 && age <= 50) { //||는 or &&는 and
    console.log("가능");
} else if (age > 50 && age <= 80) {
    console.log("노놉")
} else {
    console.log("ㄱㅅ");
}
*/
/*
console.dir(title);


title.innerText = "Got you!";
*/
/*
const hellos = document.getElementsByClassName("hello");

console.log(hellos);
*/

/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "마우스 여기 있다.";
}

function handleMouseLeave() {
    h1.innerText = "마우스 대라";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SoS no WIFI!");
}

function handleWindowOnline() {
    alert("ALL GooD");
}



h1.addEventListener("click", handleTitleClick); // title.onclick = handleTitleClick; 도 가능
h1.addEventListener("mouseenter", handleMouseEnter); // title.onmouseenter = handleMouseEnter; 도 가능
h1.addEventListener("mouseleave", handleMouseLeave);
//addEventListener를 선호하는 이유: 나중에 removeEventListener를 통해서 event listener를 제거할 수 있기 때문


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if(
        currentColor === "blue") {
            newColor = "gray";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
*/
/*
const h1 = document.querySelector("div.hello:first-child h1");


function handleTitleClick() {
    h1.classList.toggle("clicked"); 
}
// toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 
//만약 있다면, toggle이 clicked를 제거해줌
//만약 없다면, toggle이 clicked를 classList에 생성해줌

h1.addEventListener("click", handleTitleClick);
*/



