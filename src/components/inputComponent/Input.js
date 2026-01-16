import './input.css'

export default function Input({title,monthFanction}){
    return(
        <div className='input-container'>
        <label>{title}</label>
        <input className='input' type="text"
        onChange={(e)=>{
            monthFanction(e.target.value)
        }}
        />
        </div>
    );
}