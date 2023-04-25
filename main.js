let mealList = [];
let foodList = [];

// 串接資料
fetch("mealList.json")
    .then(function(response){
        // 從Json格式轉回Js物件
        return response.json()
    })
    .then(function(data){
        mealList = data;
        // console.log(mealList);
    })
    .catch(function(error){
        // 抓資料不成功 錯誤 就會進catch
        console.log(error)
    })

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
    console.log(foodList)
    // console.log(mealList)
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