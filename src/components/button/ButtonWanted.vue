<template>
  <div>
    <router-link to="/contato"
      ><div
        class="flex justify-center items-center btn-wanted w-full p-4 text-white font-semibold rounded-3xl text-base cursor-pointer"
      >
        <span>Solicitar orçamento</span>
      </div></router-link
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn-wanted {
  background-color: #010066;
  transition: all ease 0.3s;

  &:hover {
    background-color: #0600aa;
  }
}
</style>
