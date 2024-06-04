import React, { useEffect, useState } from 'react';

interface Request {
    from: string;
    contact: string;
    message: string;
}

const Requests: React.FC = () => {
    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
        // Fetch requests from the backend
        fetch('/api/requests')
            .then(response => response.json())
            .then(data => setRequests(data))
            .catch(error => console.error('Error fetching requests:', error));
    }, []);

    return (
        <div>
            {requests.length === 0 ? (
                <p>Заявок нет</p>
            ) : (
                requests.map((request, index) => (
                    <div key={index}>
                        <p>От кого: {request.from}</p>
                        <p>Контакт: {request.contact}</p>
                        <p>Сообщение: {request.message}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Requests;
