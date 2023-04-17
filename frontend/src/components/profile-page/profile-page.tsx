import styles from './profile-page.module.scss';
import classNames from 'classnames';
import { ListBlogSearch } from '../list-blog-search/list-blog-search';

export interface ProfilePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-profile-pages-and-templates
 */
export const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.dp}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles.dpPicture}
                />
                <span className={styles.name}>ARNOLD SWACHNAHEGER</span>
                <span className={styles.joingDate}>kahapon</span>
                <span className={styles.rating}>Total blogs:</span>
            </div>
            <div className={styles.content}>
                <h1 className={styles.headerC}>Pulbished Blogs</h1>
                <div className={styles.pubBlog}>
                    <ListBlogSearch />
                    <ListBlogSearch />
                    <ListBlogSearch />
                </div>
            </div>
        </div>
    );
};
