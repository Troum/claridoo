const FiltersService = {
    install(Vue) {
        Vue.prototype.$filtersService = {
            currencyFormat: (value) => {
                const string = value.toString();
                return string.replace('.', ',');
            },
            roundNumber: (number) => {
                return Math.round((number + Number.EPSILON) * 100) / 100
            }
        }
    }
};

export default (FiltersService);
