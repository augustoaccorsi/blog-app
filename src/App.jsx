import './global.css';
import styles from './App.module.css';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: 'https://github.com/augustoaccorsi.png',
            name: 'Augusto Accorsi',
            role: 'Web Developer',
        },
        content: [
            { type: 'paragraph', content: 'Hello World!' },
            {
                type: 'paragraph',
                content:
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, voluptas doloribus consectetur optio inventore voluptatibus quaerat necessitatibus similique dolore quam eligendi? Praesentium numquam quidem nemo aut inventore similique a consectetur.',
            },
            {
                type: 'link',
                content: 'augusto-accorsi.com',
            },
        ],
        publishedAt: new Date('2024-07-18 12:00:00'),
    },
    {
        id: 2,
        author: {
            avatarUrl: 'https://github.com/diego3d.png',
            name: 'Diego Fernandes',
            role: 'CTO Rocketseat',
        },
        content: [
            { type: 'paragraph', content: 'Fala galera 👋' },
            {
                type: 'paragraph',
                content:
                    'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
            },
            { type: 'link', content: 'jane.design/doctorcare' },
        ],
        publishedAt: new Date('2024-07-10 20:00:00'),
    },
];
const App = () => {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
};

export default App;
