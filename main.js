const mealList = [
    {
        "name": "泰灶咖",
        "category": ["rice", "noodle", "foreign"],
        "filter": false
    },
    {
        "name": "鄉鄰",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "翰香食堂",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "鍋燒麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["hotpot"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle", "foreign"],
        "filter": false
    },
    {
        "name": "米菓廚房",
        "category": ["rice", "noodle", "foreign"],
        "filter": false
    },
    {
        "name": "神武拉麵",
        "category": ["noodle", "foreign"],
        "filter": false
    },
    {
        "name": "陳昭料理所",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    }, 
    {
        "name": "甲侯八拉麵",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "雞肉飯",
        "category": ["rice"],
        "filter": false
    }
]
// console.log(random);
// console.log(mealList[random].name);

//foodType
const rice = document.querySelector("#rice");
const noodle = document.querySelector("#noodle");
const hotpot = document.querySelector("#hotpot");
const foreign = document.querySelector("#foreign");
const others = document.querySelector("#others");

const checkList = [rice, noodle, hotpot, foreign, others];
 
// Roll Btn
const btn = document.querySelector("#btn");
// order
const order = document.querySelector("#order");

//checkbox 勾選
let foodList = [];
// foodList = mealList;
function filter(){
    checkList.forEach(function(i){
        if(i.checked){
            mealList.forEach(function(m){
                if(m.category.includes(i.value)){
                    m.filter = true;
                }
            })
        }
    })
    foodList = mealList.filter(i => i.filter);
}

// 隨機數
function mealRandom(){
    const random = Math.floor(Math.random() * foodList.length);
    order.innerText = foodList[random].name;
}


btn.addEventListener("click", function(){
    filter();
    mealRandom();
});