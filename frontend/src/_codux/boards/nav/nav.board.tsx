import { createBoard } from '@wixc3/react-board';
import { Nav } from '../../../components/nav/nav';

export default createBoard({
    name: 'Nav',
    Board: () => <Nav />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
