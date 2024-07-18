import styles from './Avatar.module.css';

const Avatar = ({ hasBorder = true, image }) => {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={image}
        />
    );
};

export default Avatar;
