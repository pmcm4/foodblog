import styles from './slider.module.scss';
import classNames from 'classnames';

export interface SliderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sliders-and-templates
 */
export const Slider = ({ className }: SliderProps) => {
    return <div className={classNames(styles.root, className)}></div>;
};
