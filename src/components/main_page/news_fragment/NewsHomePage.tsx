import React, { useEffect, useState } from 'react';
import './NewsStyle.css';
import { getSportsNews } from './api/newsApi';
import { translateText } from './api/translateApi';

interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="news-item">
            <img src={imageUrl} alt="News" />
            <div className="news-title">{title}</div>
            <div className="news-description">{description}</div>
        </div>
    );
};

const NewsHomePage: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchAndTranslateNews = async () => {
            setLoading(true);
            const articles = await getSportsNews();
            const translatedNewsPromises = articles.slice(0, 4).map(async (article: any) => {
                const translatedTitle = await translateText(article.title);
                const translatedDescription = await translateText(article.description);
                return {
                    title: translatedTitle,
                    description: translatedDescription,
                    imageUrl: article.urlToImage || 'https://assets.gq.ru/photos/5d9f4eb4cd5287000832917d/master/w_1600%2Cc_limit/07.jpg',
                };
            });

            const translatedNews = await Promise.all(translatedNewsPromises);
            setNewsData(translatedNews);
            setLoading(false);
        };

        fetchAndTranslateNews();
    }, []);

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="news-homepage">
            <h1 className="news-homepage-title">Новости спортивных событий</h1>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} imageUrl={news.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default NewsHomePage;
