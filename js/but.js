let check=function (str, maxlen){
    if (str.length>=maxlen){
        str=str.slice(0,maxlen-3)
        str+="..."
    }
    return str
}
let butLickes=document.querySelectorAll(".but-licke")
let butBuy=document.querySelectorAll(".but-buy")
const bsk=document.querySelector(".bsk")
let ul =bsk.querySelector("ul")
const uved=bsk.querySelector(".uved")
butLickes.forEach((item)=>{
    item.addEventListener("click",()=>{
        if (item.style.backgroundColor==="rgb(255, 67, 67)"){
            item.children[0].style.color="#797676";
            item.style.backgroundColor="#b4b2b2";
        }else{
            item.style.backgroundColor="#ff4343";
            item.children[0].style.color="#ff0000";
        }

    })
})
butBuy.forEach((item)=>{
    item.addEventListener("click", ()=>{
        console.dir(check(item.parentElement.parentElement.children[1].textContent,28));
        ul.innerHTML+="<li>"+check(item.parentElement.parentElement.children[1].textContent,28)+"</li>";
        uved.textContent=Number(uved.textContent)+1;
    })
})