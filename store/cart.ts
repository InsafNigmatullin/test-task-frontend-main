import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
        isCartOpen: false,
        showPopup: false,
    }),
    actions: {
        addToCart(product: CartItem) {
            const existingProduct = this.items.find((item) => item.url === product.url);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
            this.showPopup = true;
            setTimeout(() => {
                this.showPopup = false;
            }, 3000);
        },
        removeFromCart(productUrl: string) {
            this.items = this.items.filter((item) => item.url !== productUrl);
        },
        toggleCart() {
            this.isCartOpen = !this.isCartOpen;
        },
    },
});

interface CartItem {
    url: string;
    name: string;
    newPrice: number;
    oldPrice?: number;
    brand: string;
    image: string;
    quantity: number;
}