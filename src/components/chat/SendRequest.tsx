import React, { useState } from 'react';

const SendRequest: React.FC = () => {
    const [to, setTo] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!validateEmail(to)) {
            setError('Неверный формат email');
            return;
        }

        // Validate email existence
        fetch(`/api/users?email=${to}`)
            .then(response => {
                if (response.ok) {
                    // Submit the request
                    return fetch('/api/requests', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ to, contact, message }),
                    });
                } else {
                    throw new Error('User not found');
                }
            })
            .then(() => {
                setTo('');
                setContact('');
                setMessage('');
                setError('');
                alert('Заявка отправлена');
            })
            .catch(error => setError(error.message));
    };

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Кому:</label>
                <input
                    type="email"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Свой контакт:</label>
                <input
                    type="text"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Сообщение:</label>
                <textarea
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    required
                />
            </div>
            {error && <p>{error}</p>}
            <button type="submit">Отправить</button>
        </form>
    );
};

export default SendRequest;
