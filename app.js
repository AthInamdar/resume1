let boxs=document.querySelectorAll(".box");
let resetbtn =document.querySelector("#Resetbtn"); 
let result=document.querySelector(".result");


let turnO= true;

let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO==true) {
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText= "X";
            turnO=true;
        }
        box.disabled=true;

        cheakwinner();
        
    })
})

let cheakwinner=()=>{
    for(let patters of winPattern){
       let place1=boxs[patters[0]].innerText;
       let place2=boxs[patters[1]].innerText;
       let place3=boxs[patters[2]].innerText;
       const b1= boxs[patters[0]];
       const b2= boxs[patters[1]];
       const b3= boxs[patters[2]];
        if(place1!="" && place2!="" && place3!=""){
            if(place1==place2 && place2==place3){
                result.innerText="The winner is "+place1;
                boxdisa();
                b1.style.backgroundColor ="red";
                b2.style.backgroundColor ="red";
                b3.style.backgroundColor ="red";

            }
        }
    }
};

let boxdisa=() => {
    for(let box of boxs){
        box.disabled=true;
    }
}

resetbtn.addEventListener("click", () => {
    for(let box of boxs){
        turnO=true;
        box.innerText="";
        box.disabled=false;
        box.style.backgroundColor="blanchedalmond";
        result.innerText="";
    }
})