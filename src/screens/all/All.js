import { useEffect, useState } from "react"
import supabase from "../../supabse"
import './all.css'
export default function All(){
    const [data,setData]=useState([])
        useEffect(()=>{
            const fetchData = async()=>{

            const { data, error } = await supabase.from('date').select() 
            if(error){
                alert("تاكد من الاتصال بالانترنت")
                console.log(error)
                window.location.reload()
                return []
            }
            setData(data)
           
        }
    
        fetchData()
    
    
    
    },[])
        

    if(data.length!=0){
        return(
            <div style={{
            height:"500px",
            overflowY:"scroll"
        }}>
              <div className="container-our-date">
                        <span className="const-date">  المناسبة </span>
                        <span className="const-date">  شهر المناسبة</span>
                        <span className="const-date"> يوم المناسبة  </span>
                        <span className="const-date"> عام المناسبة  </span>

                    </div>
           {
            data.map((ele)=>{
                console.log(ele)
                return(
                    <div className="container-our-date">
                        <span className="date"> {ele?.date_name} </span>
                         <span className="date">{ele?.date_month}</span>
                          <span className="date">{ele?.date_day}</span>
                           <span className="date">{ele?.date_year}</span>
                    </div>
                )
            })
           }

        </div>
        )
    }else{
        return(
            <div
            style={{
                display:'flex',
                justifyContent:"center",
                width:"90%",
                height:'60%',
                alignItems:"center"
                ,fontSize:'25px'
            }}
            >
                يتم تحميل تواريخ العمر  الخاصة بامجد ولموسة
            </div>
        )
    }
        
    
}