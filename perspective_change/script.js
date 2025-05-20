const btn = document.getElementById("btn");
const body = document.querySelector("body");
const bodywrapper= document.getElementById("active");
const lines = btn.getElementsByClassName("line");
for(let i=0;i<lines.length;i++){
    console.log(lines[i]);
}
// let flag = 0;/
//instad of flag simply use toggle.
btn.addEventListener("click",function(){
    // if(flag!==1){
    //     bodywrapper.classList.remove("body-wrapper");
    //     bodywrapper.classList.add("active");
    //     flag=1;
    // }else{        
    //     bodywrapper.classList.add("body-wrapper");
    //     bodywrapper.classList.remove("active");
    //     flag=0;
    // }
    // console.log("hello");
    bodywrapper.classList.toggle("active");
    bodywrapper.classList.add("shadow-1");
    lines[0].classList.toggle("rotate-270");
    lines[1].classList.toggle("notrequired");
    lines[2].classList.toggle("rotate-90");
})
