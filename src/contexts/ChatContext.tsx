import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';
import axios from 'axios';

interface Contact {
    id: string;
    name: string;
}

interface Message {
    id: number;
    text: string;
    sender: string;
    contactId: string;
}

interface ChatContextProps {
    contacts: Contact[];
    selectedContact: Contact | null;
    setSelectedContact: (contact: Contact) => void;
    messages: Message[];
    setMessages: (messages: Message[] | ((prevMessages: Message[]) => Message[])) => void;
    fetchMessages: (contactId: string) => void;
}


export const ChatContext = createContext<ChatContextProps | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [contacts] = useState<Contact[]>([
        { id: '1', name: 'Лена' },
        // Здесь могут быть другие контакты
    ]);
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);

    const fetchMessages = (contactId: string) => {
        axios.get(`/api/messages?contactId=${contactId}`)
            .then(response => {
                setMessages(response.data);
            })
            .catch(error => {
                console.error("Error fetching messages:", error);
            });
    };

    useEffect(() => {
        if (selectedContact) {
            fetchMessages(selectedContact.id);
        }
    }, [selectedContact]);

    return (
        <ChatContext.Provider value={{ contacts, selectedContact, setSelectedContact, messages, setMessages, fetchMessages }}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error("useChatContext must be used within a ChatProvider");
    }
    return context;
};
