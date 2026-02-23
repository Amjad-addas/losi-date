const date=new Date()
let day =date.getDate()
let month=date.getMonth()+1
let year = date.getFullYear()
const date1 = new Date('2025-01-24');
const date2 = new Date(`${year}-${month}-${day}`);
const lastday  = new Date(year, month, 0).getDate();
const differenceInMs =  date2-date1;
const differenceInDays = Math.round( differenceInMs / (1000 * 60 * 60 * 24));
const weeks = Math.floor(differenceInDays/7)
let thisHoure = date.getHours()
const hours = Math.floor( differenceInMs / (1000 * 60 * 60))+thisHoure
let houre=10
year=parseInt(differenceInDays/365.5)
const thisMinute =date.getMinutes()
let minute=1000000 ,sec=0

if(month==1){

        if(day==24){
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }

    else if(day>24){
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }
    else if(day<24){
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }
}

else if(month>1){

    if(day==24){
        month--
        day=0
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                differenceInDays++
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }

    else if(day>24){
        month--
        day=day-24
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }
    else if(day<24){
        month=month-2
        day = lastday-(24-day)
            if(thisHoure==16){
            houre = 0

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure>16){
            houre = thisHoure-16

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
        else if(thisHoure<16){
            houre = 24-(16-thisHoure)

            if(thisMinute>=44){
                
                minute = 60-(thisMinute-44)
            }
            else if(thisMinute<44){
                
                minute = 60-(44-thisMinute)
            }
        }
    }
}

export  {month,year,day,differenceInDays,weeks,hours,thisHoure,thisMinute,houre,minute,sec}
