import router from "../../router";

const RouterService = {
    install(Vue) {
        Vue.prototype.$routerService = {
            routeTo(name) {
                router.push({name: name}).then(() => {});
            }
        }
    }
};

export default (RouterService);
