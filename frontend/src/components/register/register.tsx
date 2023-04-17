import styles from './register.module.scss';
import classNames from 'classnames';
import Login_module from '../login/login.module.scss';
import { useState } from 'react';
import axios from "axios" 
import { useNavigate } from 'react-router-dom';

export interface RegisterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-registers-and-templates
 */
export const Register = ({ className }: RegisterProps) => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        first_name:"",
        last_name:"",
    })

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputs(prev=>({...prev,[e.target.name]: e.target.value}))
        
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        try{
            await axios.post("/auth/register", inputs)
            navigate("/login")
        } catch(err: any){
            setError(err.response.data)
        }
        
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={classNames(styles.regCard, Login_module.regCard)}>
                <h1 className={styles.headReg}>Register</h1>
                <div className={styles.credsReg}>
                    <div className={styles.name}>
                        <p className={styles.fName}>First Name</p>
                        <p className={styles.lName}>Last Name</p>
                    </div>
                    <div className={styles.nameInput}>
                        <input className={styles.fNameInput} name='first_name'  onChange={handleChange}/>
                        <input className={styles.lNameInput} name='last_name' onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.credsReg}>
                    <div className={styles.name}>
                        <p className={styles.tEmail}>Email</p>
                        <p className={styles.tUsername}>Username</p>
                    </div>
                    <div className={styles.nameInput}>
                        <input className={styles.emailInput} name='email' onChange={handleChange}/>
                        <input className={styles.usernameInput} name='username' onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.credsReg}>
                    <div className={styles.name}>
                        <p className={styles.tPassword}>Password</p>
                        <p className={styles.tRepass}>Re-enter Password</p>
                    </div>
                    <div className={styles.nameInput}>
                        <input className={styles.passwordInput} name='password' onChange={handleChange}/>
                        <input className={styles.repassInput} name='password' onChange={handleChange}/>
                    </div>
                </div>
                <div className={styles.regButtons}>
                    <button className={styles.registerBtn} onClick={handleSubmit}>Register</button>
                    <button className={styles.clearBtn}>Clear Fields</button>
                    {err && <p>{err}</p>}
                </div>
                
            </div>
        </div>
       
    );
};
