'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UIState {
  isWhatsAppModalOpen: boolean;
  isEmergencyModalOpen: boolean;
  selectedService: string | null;
  stickyCTAVisible: boolean;
  isLoading: boolean;
  formSuccess: string | null;
  formError: string | null;
}

interface UIContextType extends UIState {
  openWhatsAppModal: () => void;
  closeWhatsAppModal: () => void;
  openEmergencyModal: () => void;
  closeEmergencyModal: () => void;
  setSelectedService: (service: string | null) => void;
  setStickyCTAVisible: (visible: boolean) => void;
  setLoading: (loading: boolean) => void;
  setFormSuccess: (message: string | null) => void;
  setFormError: (error: string | null) => void;
  clearFormMessages: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<UIState>({
    isWhatsAppModalOpen: false,
    isEmergencyModalOpen: false,
    selectedService: null,
    stickyCTAVisible: true,
    isLoading: false,
    formSuccess: null,
    formError: null,
  });

  const openWhatsAppModal = () => setState(prev => ({ ...prev, isWhatsAppModalOpen: true }));
  const closeWhatsAppModal = () => setState(prev => ({ ...prev, isWhatsAppModalOpen: false }));
  const openEmergencyModal = () => setState(prev => ({ ...prev, isEmergencyModalOpen: true }));
  const closeEmergencyModal = () => setState(prev => ({ ...prev, isEmergencyModalOpen: false }));
  const setSelectedService = (service: string | null) => setState(prev => ({ ...prev, selectedService: service }));
  const setStickyCTAVisible = (visible: boolean) => setState(prev => ({ ...prev, stickyCTAVisible: visible }));
  const setLoading = (loading: boolean) => setState(prev => ({ ...prev, isLoading: loading }));
  const setFormSuccess = (message: string | null) => setState(prev => ({ ...prev, formSuccess: message }));
  const setFormError = (error: string | null) => setState(prev => ({ ...prev, formError: error }));
  const clearFormMessages = () => setState(prev => ({ ...prev, formSuccess: null, formError: null }));

  return (
    <UIContext.Provider
      value={{
        ...state,
        openWhatsAppModal,
        closeWhatsAppModal,
        openEmergencyModal,
        closeEmergencyModal,
        setSelectedService,
        setStickyCTAVisible,
        setLoading,
        setFormSuccess,
        setFormError,
        clearFormMessages,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}
