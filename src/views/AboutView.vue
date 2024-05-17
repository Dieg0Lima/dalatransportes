<template>
  <div class="flex flex-col items-center bg-slate-100 w-full space-y-8">
    <div class="flex flex-col md:flex-row w-full max-w-4xl items-center p-12">
      <!-- Reduz a largura da coluna das palavras-chave -->
      <div class="md:w-2/12 p-4 flex flex-col">
        <span class="italic">Rapidez.</span>
        <span class="italic">Segurança.</span>
        <span class="italic">Qualidade.</span>
      </div>
      <!-- Aumenta a largura da coluna do texto -->
      <div class="md:w-10/12 p-4 space-y-4">
        <h1 class="text-6xl font-bold text-left">Sobre nós</h1>
        <p>
          Somos uma empresa dedicada e comprometida em prestar serviços de transporte rodoviário de cargas secas,
          medicamentos, cosméticos e saneantes com segurança e competência. Nossa missão é garantir a satisfação dos
          clientes externos e internos, evoluindo e aprimorando continuamente nossos processos. Buscamos ser a melhor
          opção nesse segmento na região do Distrito Federal - Goiás, destacando-nos pela qualidade dos serviços
          prestados. Nossos valores fundamentais são a confiança, a qualidade e a eficiência em transportes.
        </p>
        <p>
          Contamos com uma equipe capacitada e comprometida em atender às necessidades de nossos clientes, sempre
          priorizando a segurança e a excelência em cada etapa do transporte. Junte-se a nós e experimente um serviço de
          transporte confiável e de alta qualidade.

        </p>
      </div>
    </div>
    <div class="w-full bg-blue-900 flex justify-center">
      <div class="w-10/12 flex items-start gap-4">
        <!-- Main flex container -->

        <div class="grid grid-cols-2 grid-rows-2 gap-16 flex-1 p-12">
          <!-- Grid layout for cards -->
          <!-- Card 1 -->
          <div class="p-4 border-solid border-2 border-white rounded-lg flex flex-col space-y-4">
            <truckIcon style="width: 100px" class="-inset-y-14 relative bg-blue-900 p-4 fill-white" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Segurança em primeiro lugar
            </h5>
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white">
              Por que escolher nossos serviços de transporte?
            </h5>
            <p class="flex-1 text-white">
              Priorizamos a segurança em todas as etapas do transporte. Utilizamos tecnologia de ponta para monitorar em
              tempo real todas as cargas, enquanto nossa equipe é regularmente treinada em segurança e prevenção de
              acidentes. Além disso, mantemos uma frota moderna e revisada, garantindo a segurança das mercadorias
              transportadas.
            </p>
          </div>
          <!-- Card 2 -->
          <div class="p-4 border-solid border-2 border-white rounded-lg flex flex-col space-y-4">
            <warehouseIcon style="width: 100px" class="-inset-y-14 relative bg-blue-900 p-4 fill-white" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Eficiência operacional
            </h5>
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white">
              Por que escolher nossos serviços de transporte?
            </h5>
            <p class="flex-1 text-white">
              Cumprimos rigorosamente os prazos estabelecidos, garantindo a pontualidade das entregas. Contamos com uma
              equipe logística altamente qualificada, que otimiza rotas e processos para reduzir custos e tempo de
              entrega. Além disso, nosso sistema de gestão de transportes garante uma operação eficiente e transparente.

            </p>
          </div>
          <!-- Card 3 -->
          <div class="p-4 border-solid border-2 border-white rounded-lg flex flex-col space-y-4">
            <flatbedIcon style="width: 100px" class="-inset-y-14 relative bg-blue-900 p-4 fill-white" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Compromisso com a satisfação do cliente

            </h5>
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white">
              Por que escolher nossos serviços de transporte?
            </h5>
            <p class="flex-1 text-white">
              Estamos sempre disponíveis para atender às necessidades dos nossos clientes, buscando soluções
              personalizadas para cada demanda. Valorizamos o feedback dos nossos clientes e estamos em constante busca
              por melhorias em nossos serviços para superar as expectativas, proporcionando uma experiência de
              transporte excepcional.

            </p>
          </div>
          <!-- Card 4 -->
          <div class="p-4 border-solid border-2 border-white rounded-lg flex flex-col space-y-4">
            <clipboardIcon style="width: 80px" class="-inset-y-14 relative bg-blue-900 p-4 fill-white" />
            <h5 class="mb-2 text-xl font-bold tracking-tight text-white">
              Qualidade comprovada
            </h5>
            <h5 class="mb-2 text-4xl font-bold tracking-tight text-white">
              Por que escolher nossos serviços de transporte?
            </h5>
            <p class="flex-1 text-white">
              Nossa empresa é reconhecida pela qualidade comprovada. Somos destacados pelos serviços de excelência e
              atendimento ao cliente. Mantemos parcerias com os principais fornecedores do mercado, garantindo a
              qualidade das mercadorias transportadas. Nossos clientes confiam em nós para transportar seus produtos com
              segurança e qualidade.

            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center p-4">
      <div class="flex flex-row space-x-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.2478235451617!2d-47.980437224610945!3d-15.790881322869039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a31124b229561%3A0xe398c1d49a523718!2sDALA%20Transportes!5e0!3m2!1spt-BR!2sbr!4v1711901969886!5m2!1spt-BR!2sbr"
          class="w-full min-h-[650px] md:min-w-[400px] md:w-[800px] h-[650px] rounded-xl" style="border: 0"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="flex flex-col max-w-md p-4 space-y-8 justify-center">
          <span class="font-bold text-xl"><b class="font-black">DALA</b> Transportes</span>
          <h2 class="text-4xl font-bold mb-4">Visite-nos!</h2>
          <p class="text-lg">
            Venha conhecer nossa sede da DALA Transportes. Estamos localizados
            no coração da cidade, com fácil acesso e estacionamento disponível
            para clientes. Nossa equipe está sempre pronta para recebê-lo e
            discutir como podemos atender às suas necessidades de transporte e
            logística.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import truckIcon from "@/assets/icons/truck-fast-icon.vue";
import warehouseIcon from "@/assets/icons/warehouse-icon.vue";
import flatbedIcon from "@/assets/icons/cart-flatbed-icon.vue";
import clipboardIcon from "@/assets/icons/clipboard-check-icon.vue";
</script>

<style lang="scss" scoped></style>
