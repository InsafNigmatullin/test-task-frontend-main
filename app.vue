<template>

<NuxtLayout>
  <NuxtPage/>
</NuxtLayout>

</template>

<script setup lang="ts">
import { useApplicationStore } from '~/store/application'

const { welcome } = useApplicationStore()

</script>
