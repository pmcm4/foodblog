import styles from './login.module.scss';
import classNames from 'classnames';
import { useState, useContext } from 'react';
import axios from "axios" 
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {

    const [inputs, setInputs] = useState({
        username:"",
        password:""
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
        
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try{
            await login(inputs)
            navigate("/")
        } catch(err: any){
            setError(err.response.data)
        }
        
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.loginContainer}>
                <div className={styles.loginCard}>
                    <h1 className={styles.loginHead}>Login</h1>
                    <div className={styles.creds}>
                        <p className={styles.userText}>Username</p>
                        <input className={styles.user} name='username' onChange={handleChange}/>
                        <p className={styles.passText}>Password</p>
                        <input className={styles.password} name='password' onChange={handleChange}/>
                    </div>
                    <div className={styles.regButtons}>
                        <button className={styles.loginBtn} onClick={handleSubmit} >Sign in</button>
                        <button className={styles.loginBtn}>Register</button>
                    </div>
                    {err && <p>{err}</p>}
                    <a className={styles.forgot}>{'Forgot passowrd?'}</a>
                </div>
            </div>
        </div>
    );
};
