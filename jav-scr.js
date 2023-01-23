const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})



// sous page__________________
/*button calcule rsult____________________*/

const [from,to,inputNum,result]=["from","to","typeNumber","resulte"].map((x)=>document.getElementById(x))

function convert(type){
  switch(type){
    //pour la convention de tempiratur
    case "tempiratur":
      let temp={
        C: (from.value=="F")?(5/9)*(inputNum.value-32):(from.value=="K")?inputNum.value-273.15:inputNum.value,
        f : function(){return this.C*(9/5)+32},
        c : function(){return this.C},
        k : function(){return Number(this.C)+273.15}
      }
      if (to.value=="F")
        result.innerHTML=inputNum.value+" °"+from.value+"  =  " +  Math.floor(Math.round((temp.f())*1000))/1000+" °"+to.value
      else if(to.value=="K")
        result.innerHTML=inputNum.value+" °"+from.value+"  =  " + Math.floor(Math.round((temp.k())*1000))/1000+" "+to.value
      else
        result.innerHTML=inputNum.value+" °"+from.value+"  =  " + Math.floor(Math.round((temp.c())*1000))/1000+" °"+to.value
      break;

      case "destance":
        break;
  }
  
}
