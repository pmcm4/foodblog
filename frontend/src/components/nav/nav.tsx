import styles from './nav.module.scss';
import classNames from 'classnames';
import LoginIcon from '@mui/icons-material/Login';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import { Link } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

export interface NavProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navs-and-templates
 */
export const Nav = ({ className }: NavProps) => {

    const {currentUser, logout} = useContext(AuthContext) 
    
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navContainer}>
            <div className={styles.logoContainer}>
                    <a href="/" style={{textDecoration: 'none'}} >FOOD BLOG</a>
                </div>
                <div className={styles.search}>
                    <input
                        className={styles.searchInput}
                        placeholder="Burger masarap malaki"
                    ></input>
                    <button className={styles.searchBtn}>Search</button>
                </div>
                <div className={styles.NavHead}>
                    <p className={classNames(styles.menu, styles.navMenu)}><Link style={{textDecoration: 'none'}} to="/">Home</Link></p>
                    <p className={classNames(styles.menu, styles.menuWithChildren)}>Category
                        <ul className={styles.dropdownMenu}>
                            <li><Link to="/?cat=cat1"><a href="#">Cat 1</a></Link></li>
                            <li><Link to="/?cat=cat2"><a href="#">Cat 2</a></Link></li>
                            <li><Link to="/?cat=cat3"><a href="#">Cat 3</a></Link></li>
                        </ul>
                    </p>
                    <p className={styles.menu}><Link style={{textDecoration: 'none'}} to="/">Contact Us</Link></p>
                    <p className={styles.menu}><Link style={{textDecoration: 'none'}} to="/">About Us</Link></p>
                    
                </div>
                
                <div className={styles.loginIcon}>
                    <span className={styles.currentUser}>{currentUser?.username}</span>
                    {currentUser ? <span onClick={logout}><LogoutOutlinedIcon style={{ height: '20px', width: '20px', cursor: 'pointer' }} /></span> : <Link className="link" to="/login"><LoginIcon style={{ height: '20px', width: '20px', cursor: 'pointer' }} /></Link>}
                    
                    
                </div>
            </div>
        </div>
    );
};
