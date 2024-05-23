<template>
  <div
    class="flex flex-col w-screen justify-center items-center p-4 space-y-12"
  >
    <div class="w-full max-w-4xl p-4 pt-12">
      <h2 class="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
      <div class="space-y-2">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-b-2 pb-2 mb-2"
        >
          <button
            @click="toggleFaq(index)"
            class="flex justify-between items-center w-full text-left font-semibold"
          >
            <span>{{ faq.question }}</span>
            <i :class="faq.open ? 'fas fa-minus' : 'fas fa-plus'"></i>
          </button>
          <transition name="faq">
            <p v-if="faq.open" class="mt-2 overflow-hidden">{{ faq.answer }}</p>
          </transition>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row w-full justify-center items-center bg-slate-100 p-12"
    >
      <div class="flex flex-row w-4/12 justify-center items-center mb-12">
        <form @submit.prevent="sendContactForm" class="w-full max-w-md">
          <div class="flex flex-col mb-4">
            <label for="name">Nome:</label>
            <input
              type="text"
              id="name"
              v-model="contactForm.name"
              required
              class="p-2 border rounded"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="email">Email:</label>
            <input
              type="email"
              id="email"
              v-model="contactForm.email"
              required
              class="p-2 border rounded"
            />
          </div>
          <div class="flex flex-col mb-4">
            <label for="message">Mensagem:</label>
            <textarea
              id="message"
              v-model="contactForm.message"
              rows="4"
              required
              class="p-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            class="bg-blue-900 w-full text-white p-2 rounded hover:bg-blue-800"
          >
            Enviar
          </button>
        </form>
      </div>
      <div class="flex flex-col w-4/12 space-y-4 p-4 text-lg">
        <h3 class="text-2xl font-bold">Vamos Conversar!</h3>
        <div>
          <i class="fas fa-phone-alt mr-2"></i>
          <span><strong>Telefone:</strong> (61) 9 9964-3755</span>
          <p class="text-sm mt-1">
            Estamos disponíveis para tirar suas dúvidas e ouvir suas
            necessidades.
          </p>
        </div>
        <div>
          <i class="fas fa-envelope mr-2"></i>
          <span
            ><strong>Email:</strong> atendimento@dalatransportes.com.br</span
          >
          <p class="text-sm mt-1">
            Envie-nos um email com suas questões ou propostas.
          </p>
        </div>
        <div>
          <i class="fas fa-map-marker-alt mr-2"></i>
          <span
            ><strong>Endereço:</strong> SCIA Q8 Conjunto 13 Lote 10 <br> Brasília, DF, 71250-735</span
          >
          <p class="text-sm mt-1">Visite nosso escritório.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contactForm = ref({
  name: "",
  email: "",
  message: "",
});

const sendContactForm = () => {
  console.log(contactForm.value);
  contactForm.value = { name: "", email: "", message: "" };
};

const faqs = ref([
  {
    question: "Como posso rastrear minha entrega?",
    answer:
      "Você pode rastrear sua entrega através do link fornecido em seu email de confirmação ou entrando em contato diretamente com nosso suporte ao cliente através do telefone ou email.",
    open: true,
  },
  {
    question: "Quais são os métodos de pagamento aceitos?",
    answer:
      "Aceitamos todos os principais cartões de crédito, além de pagamento por PIX, boleto bancário e transferência eletrônica.",
    open: false,
  },
  {
    question: "O que fazer se minha entrega estiver atrasada?",
    answer:
      "Se sua entrega estiver atrasada, por favor, entre em contato com nosso suporte ao cliente fornecendo o número do seu pedido para que possamos ajudar a resolver o problema o mais rápido possível.",
    open: false,
  },
  {
    question: "Posso alterar o endereço de entrega depois de fazer o pedido?",
    answer:
      "Alterações no endereço de entrega podem ser possíveis dependendo do status do pedido. Recomendamos que você entre em contato com nosso suporte ao cliente imediatamente se precisar fazer tal alteração.",
    open: false,
  },
  {
    question: "Como posso cancelar meu pedido?",
    answer:
      "Para cancelar um pedido, entre em contato com nosso suporte ao cliente o mais rápido possível. Note que pedidos já em processo de entrega podem não ser elegíveis para cancelamento.",
    open: false,
  },
  {
    question: "Vocês oferecem serviços de embalagem para itens frágeis?",
    answer:
      "Sim, oferecemos opções especiais de embalagem para itens frágeis. Por favor, informe-nos sobre a necessidade de embalagem especial no momento do pedido.",
    open: false,
  },
  {
    question: "É possível agendar a entrega para um horário específico?",
    answer:
      "Nós nos esforçamos para acomodar as preferências de nossos clientes. Entre em contato conosco após realizar o pedido para discutir possíveis opções de agendamento de entrega.",
    open: false,
  },
]);

const toggleFaq = (index) => {
  faqs.value[index].open = !faqs.value[index].open;
};
</script>

<style scoped></style>
