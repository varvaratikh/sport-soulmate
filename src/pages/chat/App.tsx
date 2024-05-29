import React from 'react';
import ChatWindow from '../../components/chat/ChatWindow';
import '../../styles/chat/App.sass';
import Header from '../../components/chat/Header'

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <div className="content">
                <aside>
                    <input type="text" placeholder="Поиск" className="search-bar" />
                    <div className="favorites">
                        <h2>Избранное</h2>
                        {/* Favorites go here */}
                    </div>
                    <div className="messages">
                        <h2>Сообщения</h2>
                        {/* Messages go here */}
                    </div>
                </aside>
                <main>
                    <ChatWindow />
                </main>
            </div>
        </div>
    );
};

export default App;
