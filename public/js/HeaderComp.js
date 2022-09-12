const headerComp = {
  template: `
      <header class="header">
      <div class="container header__wrapper">
        <div class="header__search">
            <a href="index.html">
                <img class="header__logo" src="img/header/logo.png" alt="logo">
            </a>
            <img class="header__search-icon" src="img/header/loupe.svg" alt="loupe">
        </div>

        <div class="header__menu">
            <ul class="header__menu-list">
                <li class="header__menu-list__item">
                    <button class="header__burger" id="burger" @click="toggleShowMenu()">
                        <svg class="header__burger__icon header__link"  width="32" height="23" viewBox="0 0 32 23" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"/>
                        </svg>
                    </button>
                </li>
                <li class="header__menu-list__item">
                    <a class="header__link" href="pages/registration.html">
                        <svg width="29" height="29" viewBox="0 0 29 29"  xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z" />
                        </svg>
                    </a>
                </li>

              <cart></cart>
            </ul>                     
            <menu-wrapper-comp v-if="isMenuShow"></menu-wrapper-comp>
        </div>
    </div>
</header>
  `,
  data() {
    return {
      isMenuShow: false,
    }
  },
  components: {
    menuWrapperComp, cart
  },
  methods: {
    toggleShowMenu() {
      console.log('CLICK toggleShowMenu');
      this.isMenuShow = !this.isMenuShow;
    },
    closeMenu() {
      this.isMenuShow = false;
    }
  }
}
