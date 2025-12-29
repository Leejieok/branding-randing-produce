import { createContext, useContext, useState, type ReactNode, type FC } from 'react';

interface ConsultationContextType {
    isOpen: boolean;
    openPanel: () => void;
    closePanel: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(undefined);

export const useConsultation = (): ConsultationContextType => {
    const context = useContext(ConsultationContext);
    if (!context) {
        throw new Error('useConsultation must be used within a ConsultationProvider');
    }
    return context;
};

interface ConsultationProviderProps {
    children: ReactNode;
}

export const ConsultationProvider: FC<ConsultationProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openPanel = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);

    return (
        <ConsultationContext.Provider value={{ isOpen, openPanel, closePanel }}>
            {children}
        </ConsultationContext.Provider>
    );
};
