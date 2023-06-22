let page1=document.getElementById("page-1");
let page2=document.getElementById("page-2");
let page3=document.getElementById("page-3");
let page4=document.getElementById("page-4");
let thankYoupage=document.getElementById("thanku");


/* buttons */
let btn1=document.getElementById("btn-1");
let perv1=document.getElementById("prev-1");
let perv2=document.getElementById("pbtn-2");
let perv3=document.getElementById("pbtn-3");
let nbtn2=document.getElementById("nbtn-2");
let nbtn3=document.getElementById("nbtn-3");
let nbtn4=document.getElementById("nbtn-4");
let confirmbtn=document.getElementById("nbtn-5");
let input = document.querySelectorAll("#input-box") ;



/* toggling current status */

let step1=document.getElementById("step-number-1")
let step2=document.getElementById("step-number-2")
let step3=document.getElementById("step-number-3")
let step4=document.getElementById("step-number-4")
step1.classList.add("active-state");

/* items list */

let itemlist = document.querySelectorAll("#items");

itemlist[0].addEventListener("click",()=>{
   itemlist[0].classList.toggle("active");
});
itemlist[1].addEventListener("click",()=>{
   itemlist[1].classList.toggle("active");
});
itemlist[2].addEventListener("click",()=>{
    itemlist[2].classList.toggle("active");
});




function isempty(){
  let count = 0
  for(let i=0 ; i<input.length ; i++){
     if(input[i].value===""){

      input[i].placeholder ="must fill this field"
      input[i].classList.add("invalid");
      count++;

        
     }
     else{
       input[i].classList.remove("invalid");
       
     }
  }

  if(count===0){
    page1.style.left = "-600px" ;
    page2.style.left="0px"
    step1.classList.remove("active-state");
    step2.classList.add("active-state");
  }
}








btn1.onclick=function(){
   isempty();  
 /*  page1.style.left = "-600px" ;
    page2.style.left="0px" */
};
perv1.onclick= function(){
  page1.style.left="0px"
  page2.style.left = "700px"
  step2.classList.toggle("active-state");
  step1.classList.toggle("active-state");
   
};
nbtn2.onclick= function(){
   page2.style.left="-600px";
   page3.style.left="0px";
   step3.classList.toggle("active-state");
   step2.classList.toggle("active-state");
};

nbtn3.onclick = function(){
   page3.style.left="-600px";
   page4.style.left = "0px";
   step4.classList.toggle("active-state");
   step3.classList.toggle("active-state");
};

perv2.onclick=function(){
  page3.style.left="600px";
  page2.style.left="0";
  step3.classList.toggle("active-state");
   step2.classList.toggle("active-state");
};

perv3.onclick = function(){
 page4.style.left="600px"
  page3.style.left="0";
  step3.classList.toggle("active-state");
   step4.classList.toggle("active-state");
};

confirmbtn.onclick = function(){
  page4.style.left="-600px"
  thankYoupage.style.left="0";
  step4.classList.remove("active-state");

};


/* checkbox in page-2 */


function clicked(){
  let checkbox = document.getElementById("check");
  let year = document.getElementById("year");
  let month = document.getElementById("month");
  let extrainfo1 = document.getElementById("extra-year-info-1");
  let extrainfo3= document.getElementById("extra-year-info-2");
  let extrainfo2= document.getElementById("extra-year-info-3");
  
  

if(checkbox.checked===true){
    
    month.style.color="var(--Coolgray)";
    year.style.color="var(--Marineblue)";
    extrainfo1.style.display="inline-block";
    extrainfo2.style.display="inline-block";
    extrainfo3.style.display="inline-block";
    
}
else{
  year.style.color="var(--Coolgray)";
  month.style.color="var(--Marineblue)";
    extrainfo1.style.display="none";
    extrainfo2.style.display="none";
    extrainfo3.style.display="none";
}
}


/* let checkbox = document.getElementById("check").checked;

console.log(checkbox); */



