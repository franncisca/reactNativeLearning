import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    //Modify our basket
    reducers: {
        addToBasket: (state, action) => {
            // keep the item in the basket then add item to the end
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            // Check isf the id I want to remove is in the items
            const index = state.items.findIndex((item) => item.id === action.payload.id);

            // Create a coy of basket
            let newBasket = [...state.items];

            // Modify this basket,if it's in the basket otherwise warnning
            if(index >= 0){
                newBasket.splice(index,1);
            }else{
                console.warn(
                    `Can't remove product (id: ${action.payload.id}) as it's not in basket`
                );
            }

            state.items = newBasket;
        },
    },
});


export const { addToBasket, removeFromBasket } = basketSlice.actions

// Acces to the global store
export const selectedBaseketItems = state => state.basket.items;

export const selectedBaseketItemsWithId = (state, id) => 
    state.basket.items.filter((item) => item.id === id);

export const selectedBaseketTotal = (state) => 
    state.basket.items.reduce((total, item) => total += item.price, 0)


export default basketSlice.reducer;

