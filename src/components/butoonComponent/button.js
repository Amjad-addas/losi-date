import { useContext } from 'react';
import './button.css'
import {Link} from 'react-router-dom'
import { LoginContext } from '../../contexts/LoginContext';
export default function Button(props){
    const login = useContext(LoginContext)
             return(
        <div>
            <button 

            className="btn">
            <Link to={login.day==24&&login.month==1?`/${props.page}`:'/home'}>
             Enter
            </Link> 
            </button>
        </div>
    );
        }
