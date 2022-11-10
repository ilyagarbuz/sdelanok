<template>
  <!-- Navigation  -->
  <nav class="mb-12">
    <ul class="flex flex-col gap-3">
      <li>
        <router-link
          :to="{ name: 'home' }"
          href="#"
          class="text-lg text-at-blue font-medium hover:opacity-70"
          >Главная</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'questions' }"
          href="#"
          class="text-lg text-at-blue font-medium hover:opacity-70"
          >Гарантия, оплата и другие вопросы</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'reviews' }"
          href="#"
          class="text-lg text-at-blue font-medium hover:opacity-70"
          >Отзывы</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'about' }"
          href="#"
          class="text-lg text-at-blue font-medium hover:opacity-70"
          >О компании</router-link
        >
      </li>
    </ul>
  </nav>
</template>
