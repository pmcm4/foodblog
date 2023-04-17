import styles from './home.module.scss';
import classNames from 'classnames';
import 'react-slideshow-image/dist/styles.css'
import {Fade, Zoom, Slide} from 'react-slideshow-image'
import { Link } from 'react-router-dom';

const sliderItems = [
    {
        id: 1,
        img: "https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg",
    },
    {
        id: 2,
        img: "https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg",
    },
    {
        id: 3,
        img: "https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg",
    },
];

export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */

const divStyle = {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    height: "350px",
    backgroundSize: 'cover'
}
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Container}>
                <div className={styles.HomeSlider}>
                    <div className={styles.imgContainer}>
                       <Fade>
                            {sliderItems.map((image, index)=>(
                                <div key={index}>
                                    <div style={{...divStyle, backgroundImage:`url(${image.img})`}}>
                                        
                                    </div>
                                </div>
                            ))}
                       </Fade>
                    </div>
                    <div className={styles.hsText}>
                        <h1 className={styles.sText}>what is minimalism</h1>
                        <p className={styles.sPar}>
                            The concept of minimalist architecture is to strip everything down to
                            its essential quality and achieve simplicity. The idea is not completely
                            without ornamentation, but that all parts, details, and joinery are
                            considered as reduced to a stage where no one can remove anything
                            further to improve the design.
                        </p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <Link to="/?cat=cat1"><div className={styles.Cat1}>
                        <div className={styles.catText}>
                            <p className={styles.cName}>Category 1</p>
                            <p className={styles.cQuote}>Quotes</p>
                        </div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.catImg}
                        />
                    </div></Link>
                    <Link to="/?cat=cat2"><div className={styles.Cat1}>
                        <div className={styles.catText}>
                            <p className={styles.cName}>Category 1</p>
                            <p className={styles.cQuote}>Quotes</p>
                        </div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.catImg}
                        />
                    </div></Link>
                    <Link to="/?cat=cat3"><div className={styles.Cat1}>
                        <div className={styles.catText}>
                            <p className={styles.cName}>Category 1</p>
                            <p className={styles.cQuote}>Quotes</p>
                        </div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.catImg}
                        />
                    </div></Link>
                </div>
            </div>
        </div>
    );
};
