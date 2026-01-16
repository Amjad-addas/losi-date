const date=new Date()
let day =date.getDate()
let month=date.getMonth()
const dm=month
let year = date.getFullYear()
const date1 = new Date('2025-01-24');
const date2 = new Date(`${year}-${month+1}-${day}`);
const differenceInMs =  date2-date1;
const differenceInDays = Math.round( differenceInMs / (1000 * 60 * 60 * 24));
const weeks = Math.floor(differenceInDays/7)
let thisHoure = date.getHours()
const hours = Math.floor( differenceInMs / (1000 * 60 * 60))+thisHoure
let houre = 0
let minute=0
let thisMinute = date.getMinutes()
let sec = date.getSeconds()
if(year>2025){
    if(day>=24){
        year=year-2025
    }else{
        year=year-2025-1
    }
}else{
year=0
}
console.log(day)
if(day>=24){
    day=day-24
}else{
    if(month==0)
    month=12
    month=month
    if(dm%2==0)
    day=30-(24-day)
    else
    day = 31-(24-day)
}
if(thisHoure>16){
        day=day
        houre=thisHoure-17
        if(thisMinute>44){
            minute=thisMinute-44
            houre++
        }else{
            minute=16+thisMinute
        }
}
else if(thisHoure==16){
        if(thisMinute>=44){
            houre=thisHoure-15
            minute=thisMinute-44
        }else{
            day=day-1
            minute=16+thisMinute
            houre=thisHoure-16

        }
}
else{
    day=day-1
            if(thisMinute>44){
            minute=thisMinute-44
            houre++
        }else{
            minute=16+thisMinute
            houre=24-(16-thisHoure)
        }
}


export  {month,year,day,differenceInDays,weeks,hours,thisHoure,thisMinute,houre,minute,sec}