<template>
  <v-container
    fluid
    style="background-color:#E5E5E5"
    class="d-flex justify-center align-center fill-height"
  >
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        sm="12"
        md="10"
        class="d-flex justify-center align-center"
      >
        <v-card class="elevation-24" min-width="340">
          <v-toolbar color="primary" dark flat>
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2 hidden-sm-and-down"
              contain
              src="../assets/llave.svg"
              transition="scale-transition"
              width="40"
            />
            <v-toolbar-title
              class="text-uppercase font-weight-bold hidden-md-and-up text-center mx-auto text-uppercase"
              >Iniciar de Sesión</v-toolbar-title
            >

            <v-toolbar-title
              class="text-uppercase font-weight-bold hidden-sm-and-down mx-auto"
              >Iniciar de Sesión</v-toolbar-title
            >
          </v-toolbar>

          <v-card-text>
            <v-form>
              <v-text-field
                label="Usuario"
                name="email"
                prepend-icon="mdi-account"
                type="email"
              />

              <v-text-field
                id="password"
                label="Contraseña"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="onSubmit" color="primary">
              ENVIAR
              <v-icon class="mr-2">mdi-login</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    backgroundLoading: "9c27b0",
    password: null
  }),
  created() {},
  methods: {
    onSubmit(ev) {
      ev.preventDefault();
      this.$vs.loading({
        background: "#2b81d6",
        color: "rgb(255, 255, 255)"
      });
      this.$store.commit("changeLoggedIn");
      this.$router.push({ path: "/" });
      setTimeout(() => {
        this.$vs.loading.close();
      }, 1000);
    }
  }
};
</script>

<style></style>
