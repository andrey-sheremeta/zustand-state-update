import { createContext, useContext, useEffect, useRef } from 'react';
import { useStore, createStore } from 'zustand';

let store;

export const useInitUiStore = (
    initialData
) => {
    if (!store) {
        store = createStore(() => ({ pageName: initialData.pageName}));
    }

    const storeRef = useRef(store).current;

    useEffect(() => {
        store.setState({ ...store.getState(), ...initialData }, true);
    }, [initialData]);

    return storeRef;
};

export const UiStoreContext = createContext({});

export const useUiStore = (selector) => useStore(useContext(UiStoreContext), selector);
