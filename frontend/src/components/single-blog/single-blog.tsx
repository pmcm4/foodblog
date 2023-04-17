import styles from './single-blog.module.scss';
import classNames from 'classnames';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export interface SingleBlogProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-single-blogs-and-templates
 */
export const SingleBlog = ({ className }: SingleBlogProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.imageSlider}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className={styles.imgs}
                    />
                </div>
                <div className={styles.prof}>
                    <div className={styles.profPic}>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.profPicImg}
                        />
                    </div>
                    <div className={styles.textInfo}>
                        <div className={styles.nameDiv}>
                            <span className={styles.name}>Paolo Miguel C. Morato</span>
                            <span className={styles.name}>♛</span>
                        </div>
                        <div className={styles.time}>
                            <span className={styles.name}>8 Months Ago</span>
                            <span className={styles.name}>•</span>
                            <span className={styles.name}>10 Min</span>
                        </div>
                    </div>
                    <div className={styles.edit}>
                        <EditNoteOutlinedIcon style={{ height: '30px', width: '30px' }} />
                        <DeleteOutlineOutlinedIcon style={{ height: '30px', width: '30px' }} />
                    </div>
                </div>
                <div className={styles.blogHeader}>
                    <h1 className={styles.headTitle}>Title ng blog</h1>
                </div>
                <div className={styles.blogBody}>
                    <p className={styles.body}>
                        Sports Fest is a popular event in every school in the Philippines. Teachers
                        in every institution set a time for planning and preparing for this event.
                        Most schools are excited to find new talents or ways to enhance students'
                        skills in sports.
                    </p>
                    <p className={styles.body}>
                        As a Physical Education teacher at Cebu Children of Hope School, it is
                        fulfilling to see the students' excitement and joyful expression as they
                        participate in each game. Through this activity, it is also fun to see their
                        reaction when they win or lose the game. It is a great opportunity for the
                        teammates and coaches to cheer and encourage the players.
                    </p>
                    <p className={styles.body}>
                        During the competition, there are always mixed feelings. It brings out
                        thebest in every team member and sometimes teaches each participant a lesson
                        tolearn when the game does not go according to the team&apos;s plan.
                    </p>
                    <div className={styles.imageSlider}>
                        <div className={styles.imgDiv}>
                            <img
                                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                className={styles.imgs}
                            />
                        </div>
                        <div className={styles.imgDesc}>
                            <p className={styles.imgParagraph}>AROUND THE WORLD</p>
                            <h1 className={styles.imgH1}>
                                I&apos;m a paragraph. Click here to add your own text and edit me.
                                Let your users get to know you.
                            </h1>
                        </div>
                    </div>
                    <p className={styles.body}>
                        During the competition, there are always mixed feelings. It brings out the
                        best in every team member and sometimes teaches each participant a lesson to
                        learn when the game does not go according to the team's plan.
                    </p>
                    <p className={styles.body}>
                        During the competition, there are always mixed feelings. It brings out the
                        best in every team member and sometimes teaches each participant a lesson to
                        learn when the game does not go according to the team's plan.
                    </p>
                    <p className={styles.body}>
                        During the competition, there are always mixed feelings. It brings out the
                        best in every team member and sometimes teaches each participant a lesson to
                        learn when the game does not go according to the team's plan.
                    </p>
                </div>
                <div className={styles.comment}>
                    <h1 className={styles.commentLogo}>C</h1>
                    <h1 className={styles.commentLogo}>♡</h1>
                </div>
            </div>
        </div>
    );
};
