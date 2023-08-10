import { atom, selector } from 'recoil';

export const kindOfProvider = atom({
    key: 'kindOfProvider',
    default: 'login provider'
});

export const providerSelector = selector(
    {
        key: 'providerSelector',
        get: ({get}) => {return get(kindOfProvider)},
        set: ({set}, newValue) => {set(kindOfProvider, newValue)}
    }
)