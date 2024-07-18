import { useState } from 'react';
import styles from './Comment.module.css';
import Avatar from './Avatar';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';

const Comment = (props) => {
    const [like, setLike] = useState(0);

    return (
        <div className={styles.comment}>
            <Avatar
                hasBorder={false}
                image="https://github.com/augustoaccorsi.png"
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Augusto Accorsi</strong>
                            <time dateTime="2024-07-17 08:13:13">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar Comentário">
                            <FaTrashAlt sixe={15} />
                        </button>
                    </header>
                    <p>{props.comment}</p>
                </div>

                <footer>
                    <button
                        onClick={() => setLike(like + 1)}
                        className={styles.likeButton}
                        title="Curtir comentário"
                    >
                        <strong>
                            <FaRegThumbsUp />
                            Curtir<span>{like}</span>
                        </strong>
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default Comment;
