import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export function testFn(): void {
  const a = undefined;
  const b = 1;

  const c = a ?? b;
  console.log(c);
}
