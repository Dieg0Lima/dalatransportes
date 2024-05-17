<template>
  <div class="w-full flex flex-row justify-center items-center space-x-16">
    <div
      class="w-3/12 h-96 flex flex-col justify-center items-center p-2 bg-white rounded-lg space-y-8"
    >
      <div
        class="w-full h-full flex flex-col justify-center items-center space-y-8 p-4 border-2 border-solid border-white rounded-md"
      >
        <div>
          <TransportChargeIcon class="w-28" />
        </div>
        <div class="text-center text-black text-lg font-semibold">
          <span>Encomendas logísticas</span>
        </div>
        <div class="text-center text-black">
          <span>Com uma equipe capacitada, entregamos seu produto com segurança e dentro do prazo. </span>
        </div>
        <div>
          <ButtonWanted />
        </div>
      </div>
    </div>
    <div
      class="w-3/12 h-96 flex flex-col justify-center items-center p-2 bg-product rounded-lg space-y-8 border-4 border-solid"
    >
      <div
        class="w-full h-full flex flex-col justify-center items-center space-y-8 p-4 border-2 border-solid border-white rounded-md"
      >
        <div>
          <DryChargeIcon class="w-28" />
        </div>
        <div class="text-center text-white text-lg font-semibold">
          <span>Transporte de cargas secas </span>
        </div>
        <div class="text-center text-white">
          <span>Tomamos todas as providências necessárias para manter sua mercadoria em segurança. </span>
        </div>
        <div>
          <ButtonProduct />
        </div>
      </div>
    </div>

    <div
      class="w-3/12 h-96 flex flex-col justify-center items-center p-2 bg-white rounded-lg space-y-8"
    >
      <div
        class="w-full h-full flex flex-col justify-center items-center space-y-8 p-4 border-2 border-solid border-white rounded-md"
      >
        <div>
          <PeopleChargeIcon class="w-28" />
        </div>
        <div class="text-center text-black text-lg font-semibold">
          <span>Transporte de funcionários</span>
        </div>
        <div class="text-center text-black">
          <span>: Oferecemos aos seus colaboradores um transporte seguro com conforto e agilidade.</span>
        </div>
        <div>
          <ButtonWanted />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButtonProduct from "@/components/button/ButtonProduct.vue";
import ButtonWanted from "@/components/button/ButtonWanted.vue";

import DryChargeIcon from "@/assets/icons/dry-charge-icon.vue";
import TransportChargeIcon from "@/assets/icons/transport-charge-icon.vue";
import PeopleChargeIcon from "@/assets/icons/people-charge-icon.vue";
</script>

<style lang="scss" scoped>
.bg-product {
  background-color: #010066;
  border-color: #010038;
}
</style>
