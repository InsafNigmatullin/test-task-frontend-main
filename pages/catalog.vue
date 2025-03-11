<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Основной контент -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <div class="grid grid-cols-6 gap-4" style="position: relative;">
        <div
            v-for="product in products"
            :key="product.url"
            class="bg-white rounded-lg shadow-lg overflow-hidden"
            style="width: 201px; height: 286px;"
        >
          <img :src="`/images/${product.image}`" :alt="product.name" class="w-full h-32 object-cover" />
          <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-2 text-sm">{{ product.brand }}</p>
            <div class="flex items-center gap-2">
              <p class="text-base font-bold text-blue-600">{{ product.newPrice }} руб.</p>
              <p v-if="product.oldPrice" class="text-xs text-gray-500 line-through">
                {{ product.oldPrice }} руб.
              </p>
            </div>
            <button
                @click="addToCart(product)"
                class="mt-2 inline-block bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-800 transition duration-300 text-sm"
            >
              В корзину
            </button>
          </div>
        </div>
      </div>
    </main>
    <!-- Модальное окно корзины -->
    <div v-if="cart.isCartOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div class="bg-white w-1/3 p-6">
        <h2 class="text-2xl font-bold mb-4">Корзина</h2>
        <div v-for="item in cart.items" :key="item.url" class="mb-4">
          <p>{{ item.name }} - {{ item.quantity }} шт.</p>
          <p>{{ item.newPrice }} руб.</p>
          <button
              @click="cart.removeFromCart(item.url)"
              class="mt-2 inline-block bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300 text-sm"
          >
            Удалить
          </button>
        </div>
        <button @click="cart.toggleCart" class="mt-4 bg-black text-white px-4 py-2 rounded-lg">
          Закрыть
        </button>
      </div>
    </div>

    <!-- Всплывающий блок при добавлении товара в корзину -->
    <div v-if="cart.showPopup" class="fixed bottom-30 right-10 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
      Товар добавлен в корзину!
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';

const cart = useCartStore();

// Генерация фейковых товаров
const generateFakeProduct = () => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomImageUrl = () => {
    const imageNames = ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Amazon'];
    return `${imageNames[getRandomNumber(0, imageNames.length - 1)]}.png`;
  };

  const getRandomBrand = () => {
    const brands = ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Amazon'];
    return brands[getRandomNumber(0, brands.length - 1)];
  };

  const getRandomProductName = () => {
    const products = ['Laptop', 'Smartphone', 'Headphones', 'Watch', 'Shoes', 'Jacket', 'Camera', 'Tablet'];
    return products[getRandomNumber(0, products.length - 1)];
  };

  const hasOldPrice = Math.random() < 0.5;
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

// Генерация списка товаров
const products = Array.from({ length: 12 }, generateFakeProduct);

// Добавление товара в корзину
const addToCart = (product) => {
  cart.addToCart(product);
};
</script>