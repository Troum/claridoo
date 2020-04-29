import Vue from "vue"
import Vuex from "vuex"
import * as menu from "../static/menu.json";
import * as persons from "../static/persons.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    progress: 0,
    menu: menu.menu,
    persons: persons.persons,
    postcode: null,
    info: {},
    prices: {
      month: 0,
      year: 0,
      basePrice: 0,
      workPrice: 0
    },
    reasons: [
      {
        icon: "logo-reason.svg",
        title: "Wechsel zu CLARIDOO",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        reason: "switch"
      },
      {
        icon: "car.svg",
        title: "Umzug / Einzug",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        reason: "moving"
      },
      {
        icon: "briks.svg",
        title: "Neubau",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        reason: "new"
      }
    ],
    types: [
      {
        icon: "thumb-up.svg",
        title: "Ja, habe ich hier",
        type: "counter"
      },
      {
        icon: "whatsapp.svg",
        title: "Nein, reiche ich später per Whats App nach",
        type: "whatsapp"
      },
      {
        icon: "email.svg",
        title: "Später per email",
        type: "email"
      }
    ],
    user: {},
    iban: {},
    ibanNumber: null,
    isValid: null,
    form: {}
  },
  mutations: {
    info(state, data) {
      state.info = data;
    },
    postcode(state, data) {
      state.postcode = data;
    },
    month(state, data) {
      state.prices.month = data;
    },
    year(state, data) {
      state.prices.year = data;
    },
    basePrice(state, data) {
      state.prices.basePrice = data;
    },
    workPrice(state, data) {
      state.prices.workPrice = data;
    },
    user(state, data) {
      state.user = data;
    },
    iban(state, data) {
      state.iban = data;
    },
    isValid(state, data) {
      state.isValid = data;
    },
    ibanNumber(state, data) {
      state.ibanNumber = data;
    },
    progress(state, data) {
      state.progress += data;
    }
  },
  actions: {
  },
  getters: {
    menu(state) {
      return state.menu;
    },
    persons(state) {
      return state.persons;
    },
    info(state) {
      return state.info;
    },
    postcode(state) {
      return state.postcode;
    },
    month(state) {
      return state.prices.month;
    },
    year(state) {
      return state.prices.year;
    },
    basePrice(state) {
      return state.prices.basePrice;
    },
    workPrice(state) {
      return state.prices.workPrice;
    },
    reasons(state) {
      return state.reasons;
    },
    types(state) {
      return state.types;
    },
    user(state) {
      return state.user;
    },
    iban(state) {
      return state.iban;
    },
    isValid(state) {
      return state.isValid;
    },
    ibanNumber(state) {
      return state.ibanNumber;
    },
    progress(state) {
      return state.progress;
    }
  }
})
