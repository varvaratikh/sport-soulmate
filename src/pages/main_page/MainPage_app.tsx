import React from 'react';
import Beginning_main_page from "../../components/main_page/first_fragment/Beginning_main_page";
import HomePage from "../../components/main_page/middle/HomePage";
import NewsHomePage from "../../components/main_page/news_fragment/NewsHomePage";

const MainPage_app: React.FC = () => {
    return (
        <div>
            <Beginning_main_page />
            <div id="about-section">
                <HomePage />
            </div>
            <div id="news-section">
                <NewsHomePage />
            </div>
        </div>
    );
};

export default MainPage_app;