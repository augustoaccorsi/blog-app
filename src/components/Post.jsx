import { useState } from 'react';
import styles from './Post.module.css';
import Avatar from './Avatar';
import Comment from './Comment';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

const Post = (props) => {
    const [commentary, setCommentary] = useState('');
    const [commentaries, setCommentaries] = useState([]);

    const author = props.author;
    const publishedAt = props.publishedAt;
    const publishedDateFormatted = format(
        publishedAt,
        "dd 'de' LLLL 'as' HH:mm'h'",
        { locale: ptBR }
    );

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const onCreateComentary = (event) => {
        event.preventDefault();
        setCommentaries([...commentaries, commentary]);
        setCommentary('');
    };

    const getContent = (content, index) => {
        const type = content.type;
        const value = content.content;
        if (type === 'paragraph') {
            return <p key={index}>{value}</p>;
        }
        return (
            <p key={index}>
                <a key={index} href="#">
                    {value}
                </a>
            </p>
        );
    };

    const handleDeleteComment = (index) => {
        setCommentaries(commentaries.filter((_, id) => id !== index));
    };

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar image={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}r</span>
                    </div>
                </div>
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {props.content.map((content, index) =>
                    getContent(content, index)
                )}
            </div>

            <form onSubmit={onCreateComentary} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea
                    required="true"
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
                              <Comment
                                  comment={comm}
                                  handleDeleteComment={handleDeleteComment}
                                  id={index}
                              />
                          </div>
                      );
                  })
                : null}
        </article>
    );
};

export default Post;
