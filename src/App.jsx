import './global.css';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Post from './Post';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post
                        title="Post 1"
                        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Veniam ex officiis sit accusamus amet sunt quas similique odit dolores magni incidunt voluptas illum cum deserunt, expedita quibusdam sequi cupiditate doloremque.
"
                    />
                    <Post
                        title="Post 2"
                        content="Here is my Post 2.
"
                    />
                </main>
            </div>
        </div>
    );
}

export default App;
