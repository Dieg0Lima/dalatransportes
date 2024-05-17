<template>
  <main class="h-full">
    <section style="height: 700px" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }"
      class="h-4/5 grid grid-cols-12 bg-image-1">
      <HeroCard class="col-span-12 md:col-start-3 md:col-span-5" />
    </section>
    <section class="bg-gray-300 flex justify-center items-center flex-col">
      <div class="p-8">
        <ProductCard />
      </div>
      <div class="w-full bg-gray-200">
        <div class="flex justify-center items-center text-6xl p-12">
          <span class="w-8/12 text-center font-mediu">Mais de <b>150 clientes
            </b>satisfeitos com nossos <b>transportes!</b></span>
        </div>
      </div>
    </section>
    <section class="w-full bg-white flex justify-center items-center flex-col">
      <div class="w-8/12">
        <ServiceCard />
      </div>
    </section>
    <section class="grid grid-cols-12 bg-image-6">
      <ActionCard class="col-span-12 md:col-start-3 md:col-span-5" />
    </section>
    <section class="bg-red-800 text-white p-6">
      <div class="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center text-sm">
        <div class="p-2">
          <p>&copy; 2024 DALA Transportes. All rights reserved.</p>
          <p class="mt-2">Website developed by Diego Costa</p>
        </div>

        <div class="p-2">
          <nav class="flex space-x-4">
            <a href="https://facebook.com" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" class="hover:text-gray-200" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </nav>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import HeroCard from "@/components/card/HeroCard.vue";
import ProductCard from "@/components/card/ProductCard.vue";
import ServiceCard from "@/components/card/ServiceCard.vue";
import ActionCard from "@/components/card/ActionCard.vue";

const backgroundImage = ref("../assets/images/bg-image-1.jpeg");
const images = [
  "../assets/images/bg-image-1.jpeg",
  "../assets/images/bg-image-2.jpeg",
  "../assets/images/bg-image-3.jpeg",
  "../assets/images/bg-image-4.jpeg",
  "../assets/images/bg-image-5.jpeg",
];
let currentImageIndex = 0;

const changeBackgroundImage = () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  backgroundImage.value = images[currentImageIndex];
};

setInterval(changeBackgroundImage, 5000);
</script>

<style lang="scss" scoped>
.bg-image-1 {
  position: relative;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.bg-image-6 {
  background-image: url("../assets/images/bg-image-6.jpeg");
  position: relative;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.bg-image-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 0, 104, 0.4);
  z-index: -1;
}

.bg-image-6::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(1, 0, 104, 0.4);
  z-index: -1;
}
</style>
