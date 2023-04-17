import { createBoard } from '@wixc3/react-board';
import { ProfilePage } from '../../../components/profile-page/profile-page';

export default createBoard({
    name: 'ProfilePage',
    Board: () => <ProfilePage />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
