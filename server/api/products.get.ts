// server/api/products.get.ts
import { type Product, generateFakeProduct } from "~/utils/generate";
// import cache from "memory-cache"; // Для кеширования

// export default defineEventHandler(async (event) => {
//
//     console.log(333)
//     // Проверяем, есть ли данные в кеше
//     const cachedProducts = cache.get("products");
//     if (cachedProducts) {
//         return cachedProducts;
//     }
//
//     // Генерируем 12 фейковых товаров
//     const products: Product[] = [];
//     for (let i = 0; i < 12; i++) {
//         console.log(222)
//         products.push(generateFakeProduct());
//     }
//
//     // Кешируем данные на 1 час (3600000 мс)
//     cache.put("products", products, 3600000);
//
//     return products;
// });

export default defineEventHandler(async (event) => {
    // // Здесь вы можете получить данные из базы данных или другого источника
    // const products = [
    //     { id: 1, name: 'Product 1', price: 100 },
    //     { id: 2, name: 'Product 2', price: 200 },
    //     { id: 3, name: 'Product 3', price: 300 },
    // ];
    //
    // // Возвращаем данные в формате JSON
    // return { products };

        // Генерируем 12 фейковых товаров
    const products: Product[] = [];
    for (let i = 0; i < 12; i++) {
        products.push(generateFakeProduct());
    }

    console.log(555, products)

    return products;
});