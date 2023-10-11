import PrimeVue from "primevue/config";
import InputSwitch from 'primevue/inputswitch';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Password from 'primevue/password';
import BadgeDirective from 'primevue/badgedirective';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Menu from 'primevue/menu';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

export default (app) => {
    app.use(PrimeVue, {ripple: true,});
    app.use(ToastService);
    app.component("InputSwitch", InputSwitch);
    app.component("InputText", InputText);
    app.component("Checkbox", Checkbox);
    app.component("Password", Password);
    app.component("Accordion", Accordion);
    app.component("AccordionTab", AccordionTab);
    app.component("Menu", Menu);
    app.component("TabView", TabView);
    app.component("TabPanel", TabPanel);
    app.component("Toast", Toast);
    app.directive("badge", BadgeDirective);
};