import Vue from "vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import { faPhone, faChevronLeft, faEuroSign, faPlus, faMinus, faPencilAlt, faTimes, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";

Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faPhone, faChevronLeft, faEuroSign, faPlus, faMinus, faPencilAlt, faTimes, faExchangeAlt);
