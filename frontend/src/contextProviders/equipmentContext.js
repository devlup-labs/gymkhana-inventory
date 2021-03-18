import React, {createContext, useContext} from 'react'

import {createEquipmentStore} from '../stores/equipmentStore';

import { useLocalObservable } from 'mobx-react';

const EquipmentContext = createContext(null)

export const EquipmentProvider = ( {children} ) =>{
    const equipmentStore = useLocalObservable(createEquipmentStore)

    return(
        <EquipmentContext.Provider value={equipmentStore}>{children}</EquipmentContext.Provider>
    )
}
export const useEquipmentStore = () => useContext(EquipmentContext)
