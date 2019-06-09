import { FOOD_ITEMS } from '../types';

export default (state=[], action) => {
    switch (action.type) {
        case FOOD_ITEMS:
            const { items } = action;
            return items;    
        default:
            return state;
    }
}