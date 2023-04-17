import styles from './footer.module.scss';
import classNames from 'classnames';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-footers-and-templates
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.Container}>
                <div className={styles.logo}>
                    <img
                        src="https://res.cloudinary.com/dgb2lnz2i/image/upload/v1680786727/ezgif-4-0af153a069_q4mbbx.jpg"
                        className={styles.logoFooter}
                    />
                </div>
                <div className={styles.info}>
                    <h1 className={styles.socmed}>Our Team</h1>
                    <p className={styles.footerDesc}>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
                        for those interested. Sections 1.10.32 and 1.10.33 from &quot;de Finibus
                        Bonorum et Malorum&quot; by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by
                        H. Rackham.
                    </p>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.socmed}>Social Media Links</h1>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                </div>
                <div className={styles.info}>
                    <h1 className={styles.socmed}>Contact Us</h1>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                    <p className={styles.link}>https://www.lipsum.com/</p>
                </div>
            </div>
        </div>
    );
};
