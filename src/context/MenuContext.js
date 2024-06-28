'use client';

import { createContext, useContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <MenuContext.Provider value={{ showMenu, setShowMenu }}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenuContext = () => {
    return useContext(MenuContext);
}