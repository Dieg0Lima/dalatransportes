<template>
  <div class="w-full h-32 flex flex-col justify-center items-center">
    <header
      class="w-full flex flex-row justify-center items-center p-2 border-solid border-b-2 bg-header-border bg-header"
    >
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
          <div
            class="w-14 h-8 flex items-center justify-center facebook rounded-lg cursor-pointer"
          >
            <i class="fa-brands fa-facebook text-white"></i>
          </div>
          <div
            class="w-14 h-8 flex items-center justify-center x-twitter rounded-lg cursor-pointer"
          >
            <i class="fa-brands fa-x-twitter text-white"></i>
          </div>
          <div
            class="w-14 h-8 flex items-center justify-center youtube rounded-lg cursor-pointer"
          >
            <i class="fa-brands fa-youtube text-white"></i>
          </div>
        </div>
      </div>
    </header>
    <nav
      class="w-full flex flex-row items-center bg-slate-100 rounded-lg rounded-tr-none rounded-tl-none"
    >
      <div class="w-4/12 flex justify-center items-center">
        <img
          class="w-40 br p-2"
          src="../../assets/images/nav-image-logo.png"
          alt=""
        />
      </div>
      <div class="w-4/12 flex justify-center items-center">
        <div class="flex flex-row space-x-16 font-bold text-items-color">
          <div>
            <router-link to="/" class="h-full text-base">Inicio</router-link>
          </div>

          <div>
            <router-link to="/servicos" class="h-full text-base"
              >Serviços</router-link
            >
          </div>
          <div>
            <router-link to="/sobre" class="h-full text-base"
              >Sobre nós</router-link
            >
          </div>
          <div>
            <router-link to="/contato" class="h-full text-base"
              >Contato</router-link
            >
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
  background-color: #1877f2;
  transition: background-color 0.3s;
}

.facebook:hover {
  background-color: #3a8bf7;
}

.x-twitter {
  background-color: #000000;
  transition: background-color 0.3s;
}

.x-twitter:hover {
  background-color: #333333;
}

.youtube {
  background-color: #ff0000;
  transition: background-color 0.3s;
}

.youtube:hover {
  background-color: #ff4d4d;
}

.text-items-color {
  color: #9a0000;
}
</style>
