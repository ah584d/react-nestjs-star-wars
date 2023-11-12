import { create } from 'zustand';
import { PeoplePayload } from '../types/common .types';

export interface EggStoreType {
    isLoading: boolean;
    people: PeoplePayload;
    setPeople: (people: PeoplePayload) => void;
    setIsLoading: (state: boolean) => void;
}

export const useEggStore = create<EggStoreType>((set) => ({
    people: {} as PeoplePayload,
    isLoading: false,
    setPeople: (people: PeoplePayload) =>
        set(() => {
            return {
                people,
            };
        }),
    setIsLoading: (state: boolean) =>
        set(() => {
            return {
                isLoading: state,
            };
        }),
}));
