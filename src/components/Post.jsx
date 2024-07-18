import { useState } from 'react';
import styles from './Post.module.css';
import Avatar from './Avatar';
import Comment from './Comment';

const Post = () => {
    const [commentary, setCommentary] = useState('');
    const [commentaries, setCommentaries] = useState([]);

    const onCreateComentary = (event) => {
        event.preventDefault();
        setCommentaries([...commentaries, commentary]);
        setCommentary('');
    };

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar image="https://github.com/augustoaccorsi.png" />
                    <div className={styles.authorInfo}>
                        <strong>Augusto Accorsi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time dateTime="2024-07-17 08:13:13">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto
                    que fiz no NLW Return, evento da Rocketseat. O nome do
                    projeto é DoctorCare 🚀
                </p>
                <p>
                    <a href="">jane.design/doctorcare</a>
                </p>
                <p>
                    <a href="">{'#novoprojeto '}</a>
                    <a href="">{'#nlw '}</a>
                    <a href="">{'#rocketseat'}</a>
                </p>
            </div>

            <form onSubmit={onCreateComentary} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    name="commentary"
                    value={commentary}
                    onChange={(event) => setCommentary(event.target.value)}
                    placeholder="Deixe um comentário"
                />
                {commentary.length > 0 ? (
                    <button type="submit">Publicar</button>
                ) : null}
            </form>

            {commentaries.length > 0
                ? commentaries.map((comm, index) => {
                      return (
                          <div key={index} className={styles.commentList}>
                              <Comment comment={comm} />
                          </div>
                      );
                  })
                : null}
        </article>
    );
};

export default Post;
