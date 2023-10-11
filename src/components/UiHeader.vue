<template>
    <header class="header">
      <UiContainer class="header__container">
        <div class="header__left">
          <a href="/" class="header__logo">
            <HeaderLogoIconComponent class="header__logo-icon" />
             <p class="header__logo-title">beauty meow</p>    
          </a>
          <div class="header__switch">
           <form action="#" method="post" class="header__switch-form">
              <legend class="header__switch-form-title">
                {{ isHeaderInputSwitchChecked }}
              </legend>
              <InputSwitch 
              v-model="headerInputSwitchChecked" 
              class="header__switch-input-wrapper"
              :pt="headerInputSwitchOptions"
              />
           </form>
        </div>
        <ul class="header__menu-list">
          <li class="header__menu-list-item">
            <a href="/catalog" class="header__menu-list-item-link">Каталог</a>
          </li>
          <li class="header__menu-list-item">
            <a href="/HotOffers" class="header__menu-list-item-link">Горячие предложения</a>
          </li>
         </ul>
        </div>
      </UiContainer>
    </header>
</template>

<script setup>
import UiContainer from '../components/UiContainer.vue';
import { ref, computed } from 'vue';
import HeaderLogoIconComponent from '../assets/icons/header-logo.svg?component';

const headerInputSwitchChecked = ref(true);
const isAuthenticated = ref(false);
const headerDropdownMenu = ref(false);

const isHeaderInputSwitchChecked = computed(() => {
  return headerInputSwitchChecked.value === false ? 'Клиентам' : 'Мастерам';
});

const headerInputSwitchOptions = {
        slider: ({ props }) => ({
            class: [
              'header__switch-input-slider',
              {'checked': props.modelValue === true},
            ]
        })
};

const headerDropdownMenuItems = ref([
   {
      label: 'Клиентам',
      icon: 'target-icon-black',
   },
   {
      label: 'Мастерам',
      icon: 'target-icon-black',
   },
   {
      label: 'Меню клиента',
      items: [
          {
            label: 'Каталог мастеров',
            icon: 'catalog-icon-black',
          },
          {
            label: 'Каталог горящих предложений',
            icon: 'hot-offers-icon-black',
          },
          {
            label: 'Мастера рядом с домом',
            icon: 'favorites-icon-black',
          },
          {
            label: 'Мои записи',
            icon: 'clock-icon-black',
          },
          {
            label: 'Чаты с мастером',
            icon: 'chat-icon-black',
          }
      ]
   },
   {
      label: 'Личный кабинет',
      items: [
          {
            label: 'Настройки',
            icon: 'settings-icon-black',
          },
          {
            label: 'Выйти',
            icon: 'logout-icon-black',
          },
      ]
   }
]);

const toggleHeaderDropdownMenu = () => {
  headerDropdownMenu.value = !headerDropdownMenu.value;
};

const closeHeaderDropdownMenu = () => {
  headerDropdownMenu.value = false;
};

</script>

<style scoped>

.header {
  background-color: white;
  padding-top: 16px;
  padding-bottom: 15px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.25);
}

.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.header__left {
  display: flex;
  align-items: center;
}
.header__logo {
  display: flex;
  align-items: center;
  gap: 10px;
  grid-gap: 10px;
}

.header__logo-icon,
:deep(.header__logo-icon svg) {
  width:28px;
  height: 30px;
  margin-bottom: 0;
}

:deep(.header__notify-btn.p-overlay-badge .p-badge) {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--blue-color);
    min-width: auto;
    transform: scale(1) translate(-30%,40%);
    top: 2px;
    right: 1px;
	  animation: pulse 2s infinite;
    border: 1px solid white;
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}

:deep(.header__notify-icon svg) {
   width: 19px;
   height: 25px;
   margin-bottom: 0;
}

.header__cabinet-icon,
:deep(.header__cabinet-icon svg) {
  width: 28px;
   height: 25px;
   margin-bottom: 0;
}

.header__cabinet-close-icon,
:deep(.header__cabinet-close-icon svg) {
  width: 25px;
  height: 25px;
  margin-bottom: 0;
}

.header__favorites-icon,
:deep(.header__favorites-icon svg) {
  width: 25px;
   height: 25px;
   margin-bottom: 0;
}

.header__logo-title {
  font-family: Baloo, sans-serif;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: var(--pink-color-1);
}

.header__icon-group {
  display: flex;
  align-items: center;
}

.header__icon-group-item {
  display: flex;
}

.header__icon-group-item.mobile-hide {
  display: none;
}

.header__icon-group-item:first-child::after {
   content: '';
   width: 2px;
   height: 25px;
   border-radius: 10px;
   background-color: var(--white-color-1);
   margin: 0 20px;
}

.header__reg-btn {
   max-width: 115px;
   height: 32px;
   font-size: 10px;
}

.header__switch {
  display: none;
  margin-right: 33px;
}

.header__switch-form {
  display: flex;
  align-items: center;
  gap: 10px;
  grid-gap: 10px;
}

.header__switch-form-title {
  text-transform: uppercase;
  font-weight: 500;
  min-width: 95px;
}

.header__switch-checkbox  {
	position: absolute;
	opacity: 0;
}

.header__switch-input-wrapper {
  width: 80px;
	height: 30px;
}

:deep(.header__switch-input-slider) {
	border-radius: 999px;
	background: linear-gradient(90deg, rgba(255, 154, 158, 0.30) 0%,
   rgba(250, 208, 196, 0.30) 99.00%, 
   rgba(250, 208, 196, 0.30) 100%);
	transition-duration: .4s;
	transition-property: background, box-shadow, border-color;
	cursor: pointer;
  border: 1px solid #FFCAB8;
}

:deep(.header__switch-input-slider.checked) {
  background: linear-gradient(90deg, rgba(255, 117, 140, 0.15) 0%, rgba(255, 126, 179, 0.15) 100%);
  border-color: #FF758C;
}

:deep(.header__switch-input-slider::before) {
	float: left;
	width: 24px; 
  height: 24px;
  top: 0;
	border-radius: inherit;
	background: #ffffff;
	transition-timing-function: cubic-bezier(1,0,0,1);
	transition-duration: 0.4s;
	transition-property: transform, background;
	pointer-events: none;
	margin-top: 2px;
	margin-left: 2px;
  background: linear-gradient(90deg, #FF9A9E 0%, #FAD0C4 99.00%, #FAD0C4 100%);
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
}
:deep(.header__switch-input-slider.checked::before) {
	transform: translate3d(50px, 0, 0);
  background: linear-gradient(90deg, #FF758C 0%, #FF7EB3 100%);
}

.header__menu-list {
  display: none;
  align-items: center;
  gap: 30px;
  grid-gap: 30px;
}

.header__menu-list-item-link {
  color: inherit;
}

.header__dropdown-menu-btn .header__cabinet-close-icon {
   display: none;
}

.header__dropdown-menu-btn.active .header__cabinet-icon {
   display: none;
}

.header__dropdown-menu-btn.active .header__cabinet-close-icon {
   display: block;
}

.header__dropdown-menu-nav {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  background-color: white;
  transform: translateY(45px);
  height: 100vh;
}

.header__dropdown-menu-nav.active {
  display: block;
}

.header__dropdown-menu-list {
  color: var(--grey-color-1);
  font-weight: 350;
  height: 100%;
}
.header__dropdown-menu-list-item-link {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 16px;
  padding-bottom: 15px;
  padding-left: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.30);
  color: inherit;
  transition: background-color .3s ease-in-out;
}

.header__dropdown-menu-list-item-link:hover,
.header__dropdown-menu-list-item-link:focus {
   background-color: var(--white-color-1);
}

:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-header-text) {
  font-weight: 500;
  color: var(--grey-color-2);
}


:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-header) {
  padding: 10px 20px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.30);
}

:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-header-link) {
  justify-content: space-between;
  width: 100%;
}

:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-header-link::after) {
   content: '';
   background: url('@/assets/icons/dropdown-icon.svg') no-repeat center/cover;
 width: 16px;
 height: 8px;
 transition: transform .2s ease-in-out;
 transform: rotate(180deg);
}

:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-tab-active .p-accordion-header-link::after) {
 transform: rotate(0);
}

:deep(.header__dropdown-menu-list-item-accordeon .p-accordion-toggle-icon) {
  display: none;
}

@media (min-width:992px) {

  .header__container {
    position: relative;
  }
  .header__logo {
     margin-right: 62px;
  }

  .header__logo-icon,
:deep(.header__logo-icon svg) {
  width: 47px;
    height: 50px;
}
  .header__icon-group {
     display: flex;
     align-items: center;
     gap: 20px;
     grid-gap: 20px;
  }
  .header__icon-group-item.mobile-hide {
  display: flex;
}
.header__switch {
  display: block;
}

.header__icon-group-item:first-child::after {
  content: none;
}

.header__menu-list {
  display: flex;
}

.header__reg-btn {
   font-size: 14px;
   max-width: 172px;
   height: 37px;
   --padding:10px 20px;
}

.header__dropdown-menu-nav {
  max-width: 360px;
  border-radius: 10px;
  border: 1px solid rgba(100, 100, 100, 0.30);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  height: auto;
  transform: translate(-20px, 55px);
}

.header__dropdown-menu-list-item[data-dropdown-menu-list-item="Клиентам"],
.header__dropdown-menu-list-item[data-dropdown-menu-list-item="Мастерам"] {
  display: none;
}

}


</style>