<template>
  <!-- Questions section -->
  <section>
    <!-- Questions container -->
    <div class="container md:max-w-2xl pb-20 pt-16 md:pt-28">
      <!-- Questions heading -->
      <p class="section-heading--left">Гарантия, оплата и другие вопросы</p>
      <!-- Questions content -->
      <ul class="flex flex-col gap-5">
        <li>
          <router-link
            :to="{ name: 'questions-main' }"
            class="text-2xl text-at-blue font-medium hover:opacity-70"
            href="#"
            >Главные вопросы</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'questions-price' }"
            class="text-2xl text-at-blue font-medium hover:opacity-70"
            href="#"
            >Стоимаость и оплата</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'questions-duration' }"
            class="text-2xl text-at-blue font-medium hover:opacity-70"
            href="#"
            >Сроки</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'questions-process' }"
            class="text-2xl text-at-blue font-medium hover:opacity-70"
            href="#"
            >Процесс</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'questions-layout' }"
            class="text-2xl text-at-blue font-medium hover:opacity-70"
            href="#"
            >Планировка</router-link
          >
        </li>
      </ul>
    </div>
  </section>
</template>
