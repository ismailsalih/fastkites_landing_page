const seconds  =     document.querySelector(".seconds .number");
 minutes  =     document.querySelector(".minutes .number");
 hours  =     document.querySelector(".hours .number");
 days  =     document.querySelector(".days .number");

 let secValue = 60,
  minValue = 5,
  hoursValue = 1,
  daysValue = 72;

  const timeFunc = setInterval( ( ) => {
    secValue--;

    if(secValue ==0){
        minValue--;
        secValue = 60;
    }
    if(minValue ==0){
        hoursValue--;
        minValue = 60;
    }
    if(hoursValue ==0){
        daysValue--;
        hoursValue = 60;
    }
    if(daysValue ==0){
        clearInterval(timeFunc)
        
    }
// timer function
    console.log(secValue);
    seconds.textContent = secValue  < 10 ? `0${secValue}` : secValue;
    minutes.textContent = minValue  < 10 ? `0${minValue}` : minValue;
    hours.textContent = hoursValue  < 10 ? `0${hoursValue}` : hoursValue;
    days.textContent = daysValue  < 10 ? `0${daysValue}` : daysValue;


  } ,1000) // 1000ms  = 1s