import styles from './search.module.scss';
import classNames from 'classnames';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { ListBlogSearch } from '../list-blog-search/list-blog-search';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

export interface SearchProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-searchs-and-templates
 */
export const Search = ({ className }: SearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.searchBox}>
                <div className={styles.heading}>
                    <FilterAltOutlinedIcon style={{ height: '30px', width: '30px' }} />
                    <h1>SEACH FILTER</h1>
                </div>
                <div className={styles.filters}>
                    <h1 className={styles.subhead}>Category</h1>
                    <li className={styles.catList}>Item</li>
                    <li className={styles.catList}>Item</li>
                    <li className={styles.catList}>Item</li>
                    <li className={styles.catList}>Item</li>
                    <li className={styles.catList}>Item</li>
                </div>
            </div>
            <div className={styles.result}>
                <span className={styles.rFilters}>Reset filters</span>
                <ListBlogSearch />
                <ListBlogSearch />
                <ListBlogSearch />
                <ListBlogSearch />
                <ListBlogSearch />
            </div>
        </div>
    );
};
