import styles from './Sidebar.module.css';
import { FaPencilAlt } from 'react-icons/fa';
import Avatar from './Avatar';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar image="https://github.com/augustoaccorsi.png" />
                <strong>Augusto Accorsi</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <FaPencilAlt size={15} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
};

export default Sidebar;
