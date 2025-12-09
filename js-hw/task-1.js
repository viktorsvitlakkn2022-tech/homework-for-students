/*
    Створення об'єкта:
    Створити об'єкт з ключами name, age, 
    а також вкладений об'єкт address з ключами city і street.
*/
const person = {
    name: "Олена",
    age: 30,
    address: {
        city: "Київ",
        street: "Хрещатик"
    }
};

// 1. Доступ до простих властивостей (name, age)
const personName = person.name;
const personAge = person.age;

// 2. Доступ до вкладених властивостей (city, street через address)
const personCity = person.address.city;
const personStreet = person.address.street;


console.log('Імя:', personName);
console.log('Вік:', personAge);
console.log('Місто:', personCity);
console.log('Вулиця:', personStreet);

