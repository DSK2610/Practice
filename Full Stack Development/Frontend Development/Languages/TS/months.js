function givemeRandomMonths(){
    let ran=Math.floor(Math.random()*12+1)
    let days=document.getElementById('root')
    
    switch(ran){
        case 1:
            days.innerHTML="January";
            break;
            case 2:
                days.innerHTML="February"
            break;
            case 3:
                days.innerHTML="March"
            break;
            case 4:
                days.innerHTML="April"
            break;
            case 5:
                days.innerHTML="May"
                break;
                case 6:
                    days.innerHTML="June"
                    break;
                    case 7:
                           days.innerHTML="July"
                        break;
                        case 8:
                            days.innerHTML="August"
                         break;case 7:
                         days.innerHTML="September"
                      break;case 7:
                      days.innerHTML="October"
                   break;case 7:
                   days.innerHTML="Noember"
                break;case 7:
                days.innerHTML="December"
             break;
    }
}