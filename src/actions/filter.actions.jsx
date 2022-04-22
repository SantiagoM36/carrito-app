import { FILTER_PRODUCTS } from './types';

export const filterProducts = item => ({type: FILTER_PRODUCTS, payload: item})