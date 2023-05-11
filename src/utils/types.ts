export interface ItemType {
    name: string,
    price: string,
    count: number,
    img: string
}

export interface props {
    cart: ItemType[],
    setCart: React.Dispatch<React.SetStateAction<ItemType[]>>
    name: string,
    price: string,
    img: string,
    background: string
}