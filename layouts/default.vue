<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <!-- Шапка -->
    <header class="bg-white text-black py-6 shadow-sm">
      <div class="container mx-10 flex justify-between items-center">
        <h1 class="text-3xl font-bold">Brand Name</h1>
        <!-- Корзина -->
        <div class="relative">
          <button @click="cart.toggleCart" class="p-2 hover:bg-gray-100 rounded-full">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <!-- Счетчик товаров -->
            <span
                v-if="cart.items.length > 0"
                class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
            >
              {{ cart.items.length }}
            </span>
          </button>
        </div>
      </div>
    </header>

    <!-- Основной контент -->
    <main class="flex-grow container mx-auto px-4 py-8">
      <slot/>
    </main>

    <!-- Футер -->
    <footer class="bg-black text-white py-6 mt-auto">
      <div class="container mx-10">
        <h1 class="text-3xl font-bold">Brand Name</h1>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useCartStore } from '~/store/cart';

const cart = useCartStore();
</script>