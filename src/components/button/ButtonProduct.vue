<template>
  <div>
    <router-link to="/contato"
      ><div
        class="flex justify-center items-center btn-wanted w-full p-4 font-semibold rounded-3xl text-base cursor-pointer"
      >
        <span>Solicitar orçamento</span>
      </div></router-link
    >
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn-wanted {
  background-color: #9a0000;
  color: #ffffff;
  transition: all ease 0.3s;

  &:hover {
    background-color: #620000;
  }
}
</style>
