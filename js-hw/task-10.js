/*
    3. Простий Promise:
    Є число x.
    Якщо воно більше 10 — Promise має повернути resolve("Більше 10").
    Якщо менше або дорівнює 10 — reject("Менше або дорівнює 10").
*/

const x = 12;

const checkNumber = new Promise((resolve, reject) => {
    // Вставте сюди:
    if (x > 10) {
        // Якщо умова виконується, викликаємо resolve()
        resolve("Більше 10");
    } else {
        // Якщо умова НЕ виконується, викликаємо reject()
        reject("Менше або дорівнює 10");
    }
});

checkNumber
    .then((message) => {
        console.log("Успіх:", message);
    })
    .catch((error) => {
        console.log("Помилка:", error);
    });
