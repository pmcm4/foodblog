import styles from './list-blog-search.module.scss';
import classNames from 'classnames';

export interface ListBlogSearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-list-blog-searchs-and-templates
 */
export const ListBlogSearch = ({ className }: ListBlogSearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                className={styles.listImage}
            />
            <div className={styles.infoDiv}>
                <span className={styles.headList}>Blog Title</span>
                <span className={styles.paraInfoList}>By: Paolo Morato</span>
                <span className={styles.paraInfoList}>
                    This blog is about motherfuckers./ This blog is about motherfuckers./ This blog
                    is about motherfuckers./ This blog is about motherfuckers./ This blog is about
                    motherfuckers./ This blog is about motherfuckers./ This blog is about
                    motherfuckers./ This blog is about motherfuckers./ This blog is about
                    motherfuckers./ This blog is about motherfuckers./{' '}
                </span>
            </div>
        </div>
    );
};
