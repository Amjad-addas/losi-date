
import { useState } from "react";

import { LoginContext } from "../contexts/LoginContext";
import Input from "../components/inputComponent/Input";
import Button from "../components/butoonComponent/button";
export default function AddDates(){
    const [input,setInput]  = useState({"month":null,"day":null})
    function handelMonth(month){
        setInput({...input,"month":month})
    }
        function handelDay(day){
        setInput({...input,"day":day})
    }
 
    return(
        <LoginContext value={input}>
            <div className="home-container">
                <Input
                monthFanction={handelMonth}
                title="our month"/>
                <Input
                monthFanction={handelDay}
                title="our day"/>
                <Button
                page='dates'
                />
            </div>
            </LoginContext>
    );
}