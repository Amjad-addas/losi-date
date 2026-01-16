import { useEffect } from "react"
import supabase from "../../supabse"
import { useState } from "react";
import Button from "../../components/butoonComponent/button";
import Input from "../../components/inputComponent/Input";
import { LoginContext } from "../../contexts/LoginContext";
export function Dates(){

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
                <Button page='all'
                />
            </div>
            </LoginContext>
    );
}