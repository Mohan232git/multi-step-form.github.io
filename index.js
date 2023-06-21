let page1=document.getElementById("page-1");
let page2=document.getElementById("page-2");
let page3=document.getElementById("page-3");
let page4=document.getElementById("page-4");
let thankYoupage=document.getElementById("thanku");
let steps = document.querySelectorAll("#step-number");
let btn1=document.getElementById("btn-1");
let perv1=document.getElementById("prev-1");
let perv2=document.getElementById("pbtn-2");
let perv3=document.getElementById("pbtn-3");
let nbtn2=document.getElementById("nbtn-2");
let nbtn3=document.getElementById("nbtn-3");
let nbtn4=document.getElementById("nbtn-4");
let confirmbtn=document.getElementById("nbtn-5");
let input = document.querySelectorAll("#input-box") ;



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
       
       console.log(steps[0]);
       
     }
  }

  if(count===0){
    page1.style.left = "-600px" ;
    page2.style.left="0px"
  }
}




btn1.onclick=function(){
  isempty();
  /* page1.style.left = "-600px" ;
  page2.style.left="0px" */
  
  
}

perv1.onclick= function(){
  page1.style.left="0px"
  page2.style.left = "700px"
   
}
nbtn2.onclick= function(){
   page2.style.left="-600px";
   page3.style.left="0px";
}

nbtn3.onclick = function(){
   page3.style.left="-600px";
   page4.style.left = "0px";
}

perv2.onclick=function(){
  page3.style.left="600px";
  page2.style.left="0";
}

perv3.onclick = function(){
 page4.style.left="600px"
  page3.style.left="0";
}

confirmbtn.onclick = function(){
  page4.style.left="-600px"
  thankYoupage.style.left="0";

}


