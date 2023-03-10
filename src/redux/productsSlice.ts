import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
	name: 'products',
	initialState: {
		value: [
			{ id: '1', name: 'Apples', description: 'This is the description of the apples', imageURL: '/fruits/apples.jpg', quantity: 0, price: 1 },
			{ id: '2', name: 'Oranges', description: 'This is the description of the oranges', imageURL: '/fruits/oranges.jpg', quantity: 0, price: 2 },
			{ id: '3', name: 'Lemons', description: 'This is the description of the lemons', imageURL: '/fruits/lemons.jpg', quantity: 0, price: 3 },
			{ id: '4', name: 'Bananas', description: 'This is the description of the bananas', imageURL: '/fruits/bananas.jpg', quantity: 0, price: 4 },
			{ id: '5', name: 'Blueberries', description: 'This is the description of the blueberries', imageURL: '/fruits/blueberries.jpg', quantity: 0, price: 5 },
			{ id: '6', name: 'Mango', description: 'This is the description of the mango', imageURL: '/fruits/mango.jpg', quantity: 0, price: 6 },
		],
	},
	reducers: {
		updateProduct(state, action) {
			const { id, quantity } = action.payload || {}
			state.value.forEach(product => {
				if (product.id === id) {
					if (typeof quantity === "number" && quantity >= 0) product.quantity = quantity
				}
			})
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
			return state
		},
	},
})

export const { updateProduct } = productsSlice.actions
