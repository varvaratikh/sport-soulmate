import React from 'react';
import '../../../styles/main_page/NewStyle.sass'
interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick: () => void;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="news-item" onClick={onClick}>
            <img src={imageUrl} alt="News" />
            <div className="news-title">{title}</div>
            <div className="news-description">{description}</div>
        </div>
    );
};

export default NewsItem;
