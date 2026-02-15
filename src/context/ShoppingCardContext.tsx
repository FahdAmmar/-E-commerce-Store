import { createContext,useContext,ReactNode, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";

interface ShoppingCartContextType {
  getItemQuantity: (id: number) => number;
  increaseItem: (item: number) => void;
  decreaseItem: (id: number) => void;
  removeItem: (id: number) => void;
  openCart?: () => void;
  closeCart?: () => void;
 cartItemsQuantity?: number;
  cartItems?: ShoppingCartItem[];
}

interface ShoppingCartProviderProps {
    children: ReactNode;
}

type ShoppingCartItem = {
  id: number;
  quantity: number;
}





export const ShoppingCartContext = createContext<ShoppingCartContextType >({}as ShoppingCartContextType);

export const useShoppingCart = () => {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error("useShoppingCart must be used within a ShoppingCartProvider");
  }
  return context;
};

export const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
    const [cartItems, setCartItems] = useState<ShoppingCartItem[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const openCart=()=>{
        setIsOpen(true);
    }

    const closeCart=()=>{
        setIsOpen(false);
    }

    const cartItemsQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

    const getItemQuantity = (id: number) => {
        const item = cartItems.find(item => item.id === id)?.quantity||0;
        return item 
    };

    const increaseItem = (id: number) => {
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){
                return [...currItems, {id, quantity: 1}]
            }
                else{
                    return currItems.map(item => {
                        if(item.id === id){
                            return {...item, quantity: item.quantity + 1}
                        } else {
                            return item
                        }
                })
            }
        })
};
const decreaseItem = (id: number) => {
    setCartItems(currItems => {
        if(currItems.find(item => item.id === id)?.quantity === 1){
            return currItems.filter(item => item.id !== id)
        } else {
            return currItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
        }
    })
};

const removeItem = (id: number) => {
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
};
//opiiopiopiopi



  return (  
      <ShoppingCartContext.Provider value={{ 
        getItemQuantity,
        increaseItem,
        decreaseItem,
        removeItem,
        cartItems,
        cartItemsQuantity,
        openCart,
        closeCart
      }}>
      {children}
      <ShoppingCart isOpen={isOpen}  />
    </ShoppingCartContext.Provider>
  );

}
