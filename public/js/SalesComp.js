Vue.component('sales', {
  template: `
       <section class="sales container">
    <h2 class="visually-hidden">sales</h2>
    <ul class="sales__list">
      <li class="sales__item sales__item--women">
        <p class="sales__item__text">30% off</p>
        <h3 class="sales__item__title">for women</h3>
      </li>
      <li class="sales__item sales__item--men">
        <p class="sales__item__text">hot deal</p>
        <h3 class="sales__item__title">for men</h3>
      </li>
      <li class="sales__item sales__item--kids">
        <p class="sales__item__text">new arrivals</p>
        <h3 class="sales__item__title">for kids</h3>
      </li>
      <li class="sales__item sales__item--accessories">
        <p class="sales__item__text">luxurious & trendy</p>
        <h3 class="sales__item__title">accessories</h3>
      </li>
    </ul>
  </section>
    `
});
