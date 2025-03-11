export const generateFakeProduct = (): Product => {
    // Генерация случайного числа в диапазоне [min, max]
    const getRandomNumber = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Генерация случайного URL для изображения
    const getRandomImageUrl = (): string => {
        const imageNames = ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Amazon'];
        console.log(555)
        // return `../assets/images/${imageNames[getRandomNumber(0, imageNames.length - 1)]}.png`;
        return `${imageNames[getRandomNumber(0, imageNames.length - 1)]}.png`;
    };

    // Генерация случайного имени компании
    const getRandomBrand = (): string => {
        const brands = ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Amazon'];
        return brands[getRandomNumber(0, brands.length - 1)];
    };

    // Генерация случайного имени продукта
    const getRandomProductName = (): string => {
        const products = ['Laptop', 'Smartphone', 'Headphones', 'Watch', 'Shoes', 'Jacket', 'Camera', 'Tablet'];
        return products[getRandomNumber(0, products.length - 1)];
    };

    const hasOldPrice = Math.random() < 0.5; // 50% chance of having an old price
    const newPrice = getRandomNumber(100, 100000);
    const oldPrice = hasOldPrice ? newPrice + getRandomNumber(10, 10000) : undefined;

    return {
        image: getRandomImageUrl(),
        newPrice: newPrice,
        oldPrice: oldPrice,
        brand: getRandomBrand(),
        name: getRandomProductName(),
        url: `/products/${getRandomNumber(10, 10000)}`,
    };
};