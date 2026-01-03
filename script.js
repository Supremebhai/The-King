function startTimer(t){
  const el=document.getElementById("timer");
  const i=setInterval(()=>{
    el.textContent="0:0"+t;
    if(--t<0){
      clearInterval(i);
      el.textContent="welcome";
    }
  },1000);
}
startTimer(5);
