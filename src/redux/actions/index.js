import { FOOD_ITEMS } from '../types';

export function getFoodItems(items) {
    const action = {
        type: FOOD_ITEMS,
        items
    }
    return action;
}