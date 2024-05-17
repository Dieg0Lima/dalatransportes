<template>
  <div class="w-full h-32 flex flex-col justify-center items-center">
    <header
      class="w-full flex flex-row justify-center items-center p-2 border-solid border-b-2 bg-header-border bg-header">
      <div class="w-10/12 flex flex-row justify-between items-center">
        <div class="flex flex-row space-x-6">
          <div class="space-x-2 text-white">
            <i class="fa-solid fa-location-dot"></i>
            <span class="text-sm">SCIA Q15 - Brasília, DF, 71225-512</span>
          </div>
          <div class="space-x-2 text-white">
            <i class="fa-solid fa-phone"></i>
            <span class="text-sm">(61) 3346-2364</span>
          </div>
        </div>
        <div class="flex flex-row space-x-2">
          <div class="w-14 h-8 flex items-center justify-center facebook rounded-lg cursor-pointer">
            <i class="fa-brands fa-facebook text-white"></i>
          </div>
          <div class="w-14 h-8 flex items-center justify-center linkedin rounded-lg cursor-pointer">
            <i class="fa-brands fa-linkedin-in text-white"></i>
          </div>
          <div class="w-14 h-8 flex items-center justify-center instagram rounded-lg cursor-pointer">
            <i class="fa-brands fa-instagram text-white"></i>
          </div>
        </div>
      </div>
    </header>
    <nav class="w-full flex flex-row items-center bg-slate-100 rounded-lg rounded-tr-none rounded-tl-none">
      <div class="w-4/12 flex justify-center items-center">
        <img class="w-40 br p-2" src="../../assets/images/nav-image-logo.png" alt="" />
      </div>
      <div class="w-4/12 flex justify-center items-center">
        <div class="flex flex-row space-x-16 font-bold text-items-color">
          <div>
            <router-link to="/" class="h-full text-base">Inicio</router-link>
          </div>
          <div>
            <router-link to="/servicos" class="h-full text-base">Serviços</router-link>
          </div>
          <div>
            <router-link to="/sobre" class="h-full text-base">Sobre nós</router-link>
          </div>
          <div>
            <router-link to="/contato" class="h-full text-base">Contato</router-link>
          </div>
        </div>
      </div>
      <div class="w-4/12 flex justify-center items-center">
        <div class="w-6/12">
          <buttonWanted />
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import buttonWanted from "@/components/button/ButtonWanted.vue";
</script>

<style lang="scss" scoped>
.bg-header {
  background-color: #9a0000;
}

.bg-header-border {
  color: #620000;
}

.border-b-1 {
  border-bottom-width: 1px;
}

.border-r-1 {
  border-right-width: 1px;
}

.border-l-1 {
  border-left-width: 1px;
}

.facebook {
  background-color: #3b5998;
  transition: background-color 0.3s;
}

.facebook:hover {
  background-color: #4b70ba;
}

.linkedin {
  background-color: #0077b5;
  transition: background-color 0.3s;
}

.linkedin:hover {
  background-color: #005582;
}

.instagram {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  transition: background 0.3s;
}

.instagram:hover {
  background: linear-gradient(45deg, #e6683c 0%, #dc2743 25%, #cc2366 50%, #bc1888 75%, #9b2674 100%);
}

.text-items-color {
  color: #9a0000;
}
</style>