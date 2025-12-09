/*
    Обов'язкові й необов'язкові поля:
    Створи інтерфейс Product з ключами:
    title (string), price (number), description (string, необов'язковий)
    та призначити його тип об'єкту product.
*/

// Створення інтерфейсу Product
interface Product {
    title: string;
    price: number;
    description?: string;
}

// Призначення інтерфейсу об'єкту product
const product: Product = {
    title: "Телефон",
    price: 1000
   
};
