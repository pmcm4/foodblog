import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 1922,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasHeight: 1080,
    },
});
