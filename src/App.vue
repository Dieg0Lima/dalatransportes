<template>
  <main class="h-screen w-screen relative">
    <nav class="flex justify-center items-center">
      <Topbar />
    </nav>
    <router-view></router-view>
    <footer v-if="$route.path !== '/'">
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
    </footer>
    <div>
      <a href="https://wa.me/556133462364" target="_blank" rel="noopener noreferrer"
        class="fixed bottom-4 right-4 z-50 flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full">
        <i class="fa-brands fa-whatsapp fa-2x"></i>
      </a>
    </div>
  </main>
</template>

<script setup>
import Topbar from "@/components/navbar/TopbarComponent.vue";
</script>

<style></style>
