import React, { useEffect, useState } from 'react';
import '../../../styles/main_page/NewsStyle.sass';
import { getSportsNews } from './api/newsApi';
import NewsItem from './NewsItem';
import NewsModal from './NewsModal';

interface NewsItemProps {
    title: string;
    description: string;
    imageUrl: string;
}

const NewsHomePage: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsItemProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedNews, setSelectedNews] = useState<NewsItemProps | null>(null);

    useEffect(() => {
        const fetchAndTranslateNews = async () => {
            setLoading(true);
            const articles = await getSportsNews();
            const translatedNewsPromises = articles.slice(0, 4).map(async (article: any) => {
                return {
                    title: article.title,
                    description: article.description,
                    imageUrl: article.urlToImage || 'https://assets.gq.ru/photos/5d9f4eb4cd5287000832917d/master/w_1600%2Cc_limit/07.jpg',
                };
            });

            const translatedNews = await Promise.all(translatedNewsPromises);
            setNewsData(translatedNews);
            setLoading(false);
        };

        fetchAndTranslateNews();
    }, []);

    const handleNewsClick = (news: NewsItemProps) => {
        setSelectedNews(news);
    };

    const closeModal = () => {
        setSelectedNews(null);
    };

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    return (
        <div className="news-homepage">
            <h1 className="news-homepage-title">Новости спортивных событий</h1>
            <div className="news-grid">
                {newsData.map((news, index) => (
                    <NewsItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        imageUrl={news.imageUrl}
                        onClick={() => handleNewsClick(news)}
                    />
                ))}
            </div>
            {selectedNews &&
                <NewsModal
                    title={selectedNews.title}
                    description={selectedNews.description}
                    imageUrl={selectedNews.imageUrl}
                    onClose={closeModal}
                />
            }
        </div>
    );
};

export default NewsHomePage;