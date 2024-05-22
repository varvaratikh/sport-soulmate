import { translate } from '@vitalets/google-translate-api';

export const translateText = async (text: string, targetLanguage: string = 'ru') => {
    try {
        const result = await translate(text, { to: targetLanguage });
        return result.text;
    } catch (error) {
        console.error('Error translating text:', error);
        return text;
    }
};

