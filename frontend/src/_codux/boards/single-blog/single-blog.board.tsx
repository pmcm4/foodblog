import { createBoard } from '@wixc3/react-board';
import { SingleBlog } from '../../../components/single-blog/single-blog';

export default createBoard({
    name: 'SingleBlog',
    Board: () => <SingleBlog />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 2579,
        canvasHeight: 2433,
    },
});
