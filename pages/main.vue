<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <button
        class="logo"
        @click="goToCatalog"
    >
      Перейти в раздел каталога
    </button>
  </div>
</template>

<script setup lang="ts">
const goToCatalog = () => {
  navigateTo('/catalog');
};
</script>

<style scoped>
.logo {
  width: 432px;
  height: 39px;
  font-size: 32px;
  color: rgba(224, 17, 157, 1);
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>