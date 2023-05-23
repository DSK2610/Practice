function timer(){
    let minutes=0
    let sec=0
    let hours=0
    let mytimer=document.getElementById('digitalclock')
    
    setInterval(()=>{
        console.log()
        mytimer.innerHTML=`HOURS:${hours} MINUTES:${minutes} SECONDS:${sec}`
        sec++
        
        if(sec==60){
            minutes++ 
            sec=0
        }
        if (minutes==60) {
            hours++
            munites=0
            
        }
    },1000)
    
    
    
    }
    
    timer()