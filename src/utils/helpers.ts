import { ItemType } from './types';

export const calcCartTotal = (cart: ItemType[]) => {
    let total: number = 0;
    cart.forEach((item) => {
        let price = item.price.split(',').join('')
        total = total + (parseInt(price) * item.count)
    })

    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}