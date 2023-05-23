function givemeRandomdays(){
    let ran=Math.floor(Math.random()*7+1)
    let days=document.getElementById('root')
    
    switch(ran){
        case 1:
            days.innerHTML="monday";
            break;
            case 2:
                days.innerHTML="tusday"
            break;
            case 3:
                days.innerHTML="wednesday"
            break;
            case 4:
                days.innerHTML="thirsday"
            break;
            case 5:
                days.innerHTML="friday"
                break;
                case 6:
                    days.innerHTML="saturday"
                    break;
                    case 7:
                       
    days.innerHTML="sunday"
                        break;
    
    }
    
    
    
    
    }