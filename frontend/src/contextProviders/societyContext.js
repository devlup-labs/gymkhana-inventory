import React, {createContext, useContext} from 'react'

import { createSocietyStore } from "../stores/society"

import { useLocalObservable } from 'mobx-react';

const SocietyContext = createContext(null)

export const SocietyProvider = ( {children} ) =>{
    const societyStore = useLocalObservable(createSocietyStore)

    return(
        <SocietyContext.Provider value={societyStore}>{children}</SocietyContext.Provider>
    )
}
export const useSocietyStore = () => useContext(SocietyContext)
