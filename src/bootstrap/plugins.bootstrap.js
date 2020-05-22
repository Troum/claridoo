import Vue from 'vue';
import {
    AlertPlugin,
    ButtonPlugin, CardPlugin,
    CollapsePlugin,
    TabsPlugin,
    FormCheckboxPlugin,
    FormPlugin, FormGroupPlugin,
    FormInputPlugin, NavbarPlugin, NavPlugin,
    LayoutPlugin, ModalPlugin, FormRadioPlugin,
    InputGroupPlugin, ProgressPlugin, TooltipPlugin,
    OverlayPlugin, PopoverPlugin, FormDatepickerPlugin, ListGroupPlugin } from "bootstrap-vue";
import VueScrollTo from "vue-scrollto";
import "../vee-validate";
import HttpService from "../services/http.service";
import FormDataService from "../services/form-data.service";
import HandlerService from "../services/handler.service";
import FiltersService from "../services/filters.service";
import RouterService from "../services/router.service";

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});
Vue.use(HttpService);
Vue.use(FormDataService);
Vue.use(HandlerService);
Vue.use(ButtonPlugin);
Vue.use(CardPlugin);
Vue.use(FormPlugin);
Vue.use(FormInputPlugin);
Vue.use(FormGroupPlugin);
Vue.use(NavbarPlugin);
Vue.use(LayoutPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(InputGroupPlugin);
Vue.use(CollapsePlugin);
Vue.use(TabsPlugin);
Vue.use(FormCheckboxPlugin);
Vue.use(ProgressPlugin);
Vue.use(FiltersService);
Vue.use(AlertPlugin);
Vue.use(FormRadioPlugin);
Vue.use(TooltipPlugin);
Vue.use(OverlayPlugin);
Vue.use(PopoverPlugin);
Vue.use(FormDatepickerPlugin);
Vue.use(RouterService);
Vue.use(ListGroupPlugin);
