import React from 'react';
import Beginning_main_page from "../../components/main_page/first_fragment/Beginning_main_page";
import Header from "../../components/main_page/header/Header";
import HomePage from "../../components/main_page/middle/HomePage";
import NewsHomePage from "../../components/main_page/news_fragment/NewsHomePage";

const MainPage_app: React.FC = () => {
    return (
        <div>
            <Header />
            <Beginning_main_page />
            <HomePage />
            <NewsHomePage />
        </div>
    );
};

export default MainPage_app;
