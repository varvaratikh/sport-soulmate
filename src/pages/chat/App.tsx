import React, {useState} from 'react';
import '../../styles/chat/App.sass';
import Requests from "../../components/chat/Requests";
import SendRequest from "../../components/chat/SendRequest";

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'requests' | 'send'>('requests');


    return (
        <div className="App">
            <button onClick={() => setActiveTab('requests')}>Заявки</button>
            <button onClick={() => setActiveTab('send')}>Отправить</button>
            {activeTab === 'requests' ? <Requests /> : <SendRequest />}
        </div>
    );
};

export default App;
