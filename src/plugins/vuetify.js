import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5791B3",
        secondary: "#233142",
        accent: "#459EFF",
        error: "#F03E41",
        success: "#57AD68",
        warning: "#FFC72E",
        info: "#5576D6",
        background: "#131419"
      }
    },
    light: true
  }
});
