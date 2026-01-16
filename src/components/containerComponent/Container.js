import './container.css'

export default function Container({title,number}){

    return(
        <div style={{textAlign:"center"}}>
        <p className='title'>{title}</p>
        <span className='span-container'>
            {number}
        </span>
        </div>
    );
}