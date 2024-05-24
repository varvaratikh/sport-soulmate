import translate from 'google-translate-api-browser';

export const translateText = async (text: string, targetLanguage: string = 'ru') => {
    try {
        const result = await translate(text, { to: 'ru' });
        return result.text;
    } catch (error) {
        console.error('Error translating text:', error);
        return text;
    }
};

