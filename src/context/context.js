
import React, { useCallback, useEffect, useMemo, useState } from "react";

export const MyContext = React.createContext({
    productsInCart: [],
    user: null,
});

export function MyProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        setCartProducts((prevState) => {
            if (prevState.find((p) => p.id === product.id)) {
                return prevState;
            }

            return prevState.concat(product);
        });
    };

    return (
        <MyContext.Provider
            value={{
                cartProducts,
                addProductToCart,
                user: null,
            }}
        >
            {children}
        </MyContext.Provider>
    );
}