import { useEffect, useState } from "react";
import Container from "../../components/containerComponent/Container";
import { day, differenceInDays, houre, hours, month,weeks,year,minute} from "../../controller/main";
import "./date.css"
export default function OurDate(){
  const [count, setCount] = useState(1);
  const [mcount, setMCount] = useState(minute);
    const d = new Date()
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(d.getSeconds()+1);
    }, 1000);
    if(count==60){
      console.log("ddd")
      setMCount(mcount+1)
    }
    return () => clearTimeout(timer);
  }, [count]); 
    return(
        <div>
            <div className="date-container">
                <Container
                number={year}
                title={"year"}
                />
                <Container
                number={month}
                title={"month"}
                />
                <Container
                number={day}
                title={"day"}
                />
                
            </div>
            <div className="time-container">
                <Container
                number={differenceInDays}
                title={"Days"}
                />
                <Container
                number={weeks}
                title={"Weeks"}
                />
                <Container
                number={hours}
                title={"Houers"}
                />
                
            </div>
             <div className="oclock-container">
                <Container
                number={houre}
                title={"Houers"}
                />
                <Container
                number={mcount}
                title={"Minutes"}
                />
                <Container
                number={count}
                title={"Secounds"}
                />
                
            </div>
        </div>

    );
}