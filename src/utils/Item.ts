
export class Item {
    name: string
    price: string
    count: number
    img: string
    constructor(name: string, price: string, count: number, img: string) {
        this.name = name;
        this.price = price;
        this.count = count;
        this.img = img;
    }
}