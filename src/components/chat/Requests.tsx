import React, { useEffect, useState } from 'react';

interface Request {
    from: string;
    contact: string;
    message: string;
}

interface User {
    email: string;
}

const Requests: React.FC = () => {
    const [requests, setRequests] = useState<Request[]>([]);
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        // Fetch current user
        fetch('/api/current-user')
            .then(response => response.json())
            .then((user: User) => setEmail(user.email))
            .catch(error => console.error('Error fetching user:', error));
    }, []);

    useEffect(() => {
        if (email) {
            // Fetch requests for the current user
            fetch(`/api/requests?email=${email}`)
                .then(response => response.json())
                .then(data => setRequests(data))
                .catch(error => console.error('Error fetching requests:', error));
        }
    }, [email]);

    return (
        <div className="requests-container">
            {requests.length === 0 ? (
                <p>Заявок нет</p>
            ) : (
                requests.map((request, index) => (
                    <div key={index} className="request-item">
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
