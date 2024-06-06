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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Fetch current user
        fetch('/api/current-user')
            .then(response => response.json())
            .then((user: User) => {
                setEmail(user.email);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching user');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (email) {
            fetch(`/api/requests?email=${email}`)
                .then(response => response.json())
                .then(data => setRequests(data))
                .catch(error => setError('Error fetching requests'));
        }
    }, [email]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
