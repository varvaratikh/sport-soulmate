import React from 'react';
import '../../../styles/NewStyle.sass';

interface NewsModalProps {
    title: string;
    description: string;
    imageUrl: string;
    onClose: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({ title, description, imageUrl, onClose }) => {
    return (
        <div className="news-modal">
            <div className="news-modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={imageUrl} alt="News" className="news-modal-image" />
                <h2 className="news-modal-title">{title}</h2>
                <p className="news-modal-description">{description}</p>
            </div>
        </div>
    );
};

export default NewsModal;
