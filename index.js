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
   itemlist[1].classList.remove("active");
   itemlist[2].classList.remove("active");
   call();
});
itemlist[1].addEventListener("click",()=>{
   itemlist[0].classList.remove("active");
   itemlist[1].classList.toggle("active");
   itemlist[2].classList.remove("active");
   call();
});
itemlist[2].addEventListener("click",()=>{
    itemlist[0].classList.remove("active");
    itemlist[1].classList.remove("active");
    itemlist[2].classList.toggle("active");
    call();
    
});






function isempty(){
  let count = 0
  
  for(let i=0 ; i<input.length ; i++){
     if(input[i].value===""){
      originalcolor = input[i].style.borderColor ;
      input[i].placeholder ="This field must filled....!"
      input[i].classList.add("invalid");
      input[i].style.borderColor = "red";
      count++;

        
     }
     else{
      input[i].style.borderColor = originalcolor ;
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


function empty(){
   let divactive = document.querySelector(".active");
   let divs=document.querySelectorAll("#items");
   let originalborder = "var(--Lightgray)";
   let activeborder = "var(--Marineblue)";
   
    if(divactive==null){
      alert("must select your plan");
    }
    else{
      page2.style.left="-600px";
      page3.style.left="0px";
      step3.classList.toggle("active-state");
      step2.classList.toggle("active-state");
       
    }
}







btn1.onclick=function(){
   /* isempty();   */
  page1.style.left = "-600px" ;
    page2.style.left="0px"
};
perv1.onclick= function(){
  page1.style.left="0px"
  page2.style.left = "700px"
  step2.classList.toggle("active-state");
  step1.classList.toggle("active-state");
   
};
nbtn2.onclick= function(){

  empty();   
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
  let yearplan1 = document.getElementById("year-pack-1");
  let yearplan2 = document.getElementById("year-pack-2");
  let yearplan3 = document.getElementById("year-pack-3");
  let planchange1=document.querySelector("#plan-change-1");
  let planchange2=document.querySelector("#plan-change-2");
  let planchange3=document.querySelector("#plan-change-3");
  
  /* const arcadeyearplan = "$90/yr";
  const advanceyearplan = "$120/yr";
  const proyearplan = "$150/yr"; */
  const yearplan = ["$90/yr","$120/yr","$150/yr"];
  const orignal= ["$9/mo" ,"$12/mo","$15/mo"];
  
  const originalplan =[ "$1/mo" , "$2/mo","$2/mo" ];
  console.log(planchange1,planchange2,planchange3);
  

if(checkbox.checked===true){
    
    month.style.color="var(--Coolgray)";
    year.style.color="var(--Marineblue)";
    extrainfo1.style.display="inline-block";
    extrainfo2.style.display="inline-block";
    extrainfo3.style.display="inline-block";
    yearplan1.innerText = yearplan[0];
    yearplan2.innerText = yearplan[1];
    yearplan3.innerText = yearplan[2];
    planchange1.innerText=yearplan[0];
    planchange2.innerText=yearplan[1];
    planchange3.innerText=yearplan[2];
    
    
}
else{
  year.style.color="var(--Coolgray)";
  month.style.color="var(--Marineblue)";
    extrainfo1.style.display="none";
    extrainfo2.style.display="none";
    extrainfo3.style.display="none";
    yearplan1.innerText = orignal[0];
    yearplan2.innerText = orignal[1];
    yearplan3.innerText = orignal[2];
    planchange1.innerText=originalplan[0];
    planchange2.innerText=originalplan[1];
    planchange3.innerText=originalplan[2];
    

}

}

let checkbox1 = document.querySelector("#checkbox-1");
let checkbox2 = document.querySelector("#checkbox-2");
let checkbox3 = document.querySelector("#checkbox-3");
let features1 = document.getElementById("features-1");
let features2 = document.getElementById("features-2");
let features3 = document.getElementById("features-3");


checkbox1.addEventListener("click",()=>{
     if(checkbox1.checked==true && checkbox3.checked==true){
    checkbox2.checked=false;
    features2.classList.remove("features-item");
    features1.classList.add("features-item"); 
   }

   else  if(checkbox1.checked==true && checkbox2.checked==true){  
        
       checkbox3.checked=false;
       features3.classList.remove("features-item");
       features1.classList.add("features-item"); 

      }
    
    
  else if(checkbox1.checked==true){
    features1.classList.add("features-item");
  }

   
    else{
      features1.classList.remove("features-item");
    }
    featureCall();
        
   /*  features1.classList.add("features-item");  */
      });


checkbox2.addEventListener("click",()=>{
  
  if(checkbox2.checked==true && checkbox1.checked==true){
     checkbox3.checked=false;
     features3.classList.remove("features-item");
     features2.classList.add("features-item"); 
  }
  else if(checkbox2.checked==true && checkbox3.checked==true){
     checkbox1.checked=false;
     features1.classList.remove("features-item");
     features2.classList.add("features-item"); 
  }
  else if(checkbox2.checked==true){
    features2.classList.add("features-item");
  }
  else{
    features2.classList.remove("features-item");
  } 
  /* features2.classList.add("features-item"); */
  featureCall();
}
);
checkbox3.addEventListener("click",()=>{
  
 

   if(checkbox3.checked==true && checkbox2.checked==true){
      checkbox1.checked=false;
      features1.classList.remove("features-item");
      features3.classList.add("features-item"); 
  } 
  else if(checkbox3.checked==true && checkbox1.checked==true){
      checkbox2.checked=false;
      features2.classList.remove("features-item");
      features3.classList.add("features-item"); 
  }
  else if(checkbox3.checked==true){
    features3.classList.add("features-item");
  }
  
  else{
    features3.classList.remove("features-item");
  } ;

  featureCall();
 /*  features3.classList.add("features-item"); */
}
);

function call(){
  let headinghtml = document.querySelector(".active").querySelector("#heading");
  let planinfo = document.querySelector(".active").querySelector(".plan-info");
  let endplaninfo = document.querySelector("#total-plan");
  let page4heading = document.querySelector("#page-4-heading");
  /* console.log(endplaninfo); */
  const originalplaninfo = planinfo.innerText;
  let originalheading = headinghtml.innerText;
  /* console.log(originalheading);
  console.log(originalplaninfo); */
  endplaninfo.innerText=originalplaninfo;
  page4heading.innerText=originalheading;
}

function featureCall(){
    const features = document.querySelectorAll(".features-item");

    if(features.length >1) {
        let subheading= features[0].querySelector("#sub-heading");
        let subheading1= features[1].querySelector("#sub-heading");
        let featureplan1 = features[0].querySelector(".plan-change");
        let featureplan2 = features[1].querySelector(".plan-change");
        let page4subHeading = document.querySelector("#sub-heading-1");
        let page4subHeading1 = document.querySelector("#sub-heading-2");
        let page4subinfo1 =document.querySelector("#sub-heading-1-info");
        let page4subinfo2 =document.querySelector("#sub-heading-2-info");
        
        
        page4subHeading.innerText = subheading.innerText;
        page4subHeading1.innerText = subheading1.innerText;
        page4subinfo1.innerText = featureplan1.innerText;
        page4subinfo2.innerText = featureplan2.innerText;

        
    }
    
    
}

