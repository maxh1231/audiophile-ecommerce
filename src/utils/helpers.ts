import { ItemType } from './types';

export const calcCartTotal = (cart: ItemType[]) => {
    let total: number = 0;
    cart.forEach((item) => {
        let price = item.price.split(',').join('')
        total = total + (parseInt(price) * item.count)
    })

    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}

export const calcNumItems = (cart: ItemType[]) => {
    let total = 0;
    cart.forEach((item) => {
        total += item.count;
    })

    return total;
}

export const storeCart = async (cart: ItemType[] | ItemType) => {
    // if (localStorage.getItem("cart")) {
    //     let currCart = localStorage.getItem("cart");

    //     localStorage.setItem("cart", currCart + JSON.stringify(cart));
    // } else {
    //     localStorage.setItem("cart", JSON.stringify(cart));
    // }
    localStorage.setItem("cart", JSON.stringify(cart));
}