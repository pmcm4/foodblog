import { createBoard } from '@wixc3/react-board';
import { ListBlogSearch } from '../../../components/list-blog-search/list-blog-search';

export default createBoard({
    name: 'ListBlogSearch',
    Board: () => <ListBlogSearch />
});
