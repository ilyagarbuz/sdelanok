<template>
  <!-- About section -->
  <section>
    <!-- About container -->
    <div class="container py-16">
      <!-- About heading -->
      <p class="section-heading--left">О КОМПАНИИ</p>
      <!-- About content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8">
        <div>
          <p class="mb-4">
            <strong>SDELAN.OK</strong> — КОМАНДА ПРОФЕССИОНАЛОВ В ОБЛАСТИ
            РЕМОНТНО-СТРОИТЕЛЬНЫХ РАБОТ.
          </p>
          <p class="mb-4">
            Наша команда уже 15 лет воплощает в жизнь идеи клиентов. Мы
            специализируемся на комплексном ремонте всех видов помещений. Мы
            имеем большой опыт в ремонте «под ключ» квартир, студий, новостроек,
            вторичного жилья, офисов и домов. Нашей команде под силу справиться
            с ремонтом любой сложности, будь то косметический или капитальный
            ремонт. А так же мы предоставляем договор и гарантию на работы.
          </p>
          <p>
            Кроме того, при необходимости, мы поможем согласовать перепланировку
            вашей квартиры.
          </p>
        </div>
        <figure>
          <img
            :src="require(`@/assets/img/about/about_1.webp`)"
            alt="Квартира"
          />
        </figure>
      </div>
    </div>
  </section>
</template>
