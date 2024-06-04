import React, { useState } from 'react';
import '../../styles/chat/App.sass';
import Requests from "../../components/chat/Requests";
import SendRequest from "../../components/chat/SendRequest";

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'requests' | 'send'>('requests');

    return (
        <div className="App">
            <div className="tab-buttons">
                <span
                    className={`tab ${activeTab === 'requests' ? 'active' : ''}`}
                    onClick={() => setActiveTab('requests')}
                >
                    Заявки
                </span>
                <span
                    className={`tab ${activeTab === 'send' ? 'active' : ''}`}
                    onClick={() => setActiveTab('send')}
                >
                    Отправить
                </span>
            </div>
            <div className="tab-content">
                {activeTab === 'requests' ? <Requests /> : <SendRequest />}
            </div>
        </div>
    );
};

export default App;
