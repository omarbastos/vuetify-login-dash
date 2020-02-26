<template>
  <v-app id="inspire" style="background-color:#E5E5E5">
    <v-navigation-drawer v-model="drawer" dark color="primary darken-2" app clipped width="300">
      <p class="white--text subtitle-1 my-4 font-weight-bold text-center">
        Protección Jurídica
        <br />
        <span
          class="white--textsubtitle-2 font-weight-bold text-center"
        >Corporativa Empresarial, A.C</span>
      </p>
      <v-img
        class="mx-auto my-2 border-radius-50"
        position
        src="../assets/doctor.jpg"
        max-width="100"
        style="border-radius:50%"
      ></v-img>
      <p class="white--text subtitle-1 font-weight-bold text-center">Lic. Manuel Martínez Aviña</p>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-group no-action prepend-icon="mdi-map-marker-multiple">
          <template v-slot:activator>
            <v-list-item-title>Zonificación</v-list-item-title>
          </template>

          <v-list-item v-for="(zonificacion, i) in zonificacions" :key="i" link>
            <v-list-item-title v-text="zonificacion[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="zonificacion[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-file-upload</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Enviar Folios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action prepend-icon="mdi-file-check">
          <template v-slot:activator>
            <v-list-item-title>Reporte de Folios</v-list-item-title>
          </template>

          <v-list-item v-for="(reporte, i) in reportes" :key="i" link>
            <v-list-item-title v-text="reporte[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="reporte[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action prepend-icon="mdi-alpha-d-box">
          <template v-slot:activator>
            <v-list-item-title>Folios diferidos</v-list-item-title>
          </template>

          <v-list-item v-for="(diferido, i) in diferidos" :key="i" link>
            <v-list-item-title v-text="diferido[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="diferido[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action prepend-icon="mdi-alpha-a-box">
          <template v-slot:activator>
            <v-list-item-title>Folios Amigo Fácil</v-list-item-title>
          </template>

          <v-list-item v-for="(amigo, i) in amigos" :key="i" link>
            <v-list-item-title v-text="amigo[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="amigo[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action prepend-icon="mdi-store">
          <template v-slot:activator>
            <v-list-item-title>Folios PyME</v-list-item-title>
          </template>

          <v-list-item v-for="(pyme, i) in pymes" :key="i" link>
            <v-list-item-title v-text="pyme[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="pyme[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-keyboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Captura de Folios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action prepend-icon="mdi-account-cog">
          <template v-slot:activator>
            <v-list-item-title>Control de Usuarios</v-list-item-title>
          </template>

          <v-list-item v-for="(user, i) in users" :key="i" link>
            <v-list-item-title v-text="user[0]"></v-list-item-title>
            <v-list-item-icon>
              <v-icon v-text="user[1]"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item @click="signOut()">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Cerrar Sesión</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      src="../assets/legal_court_justice_lawyer_18x12.jpg"
      app
      clipped-left
      shrink-on-scroll
      color="primary"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(43,129,214,.5), rgba(43,129,214,.8)"></v-img>
      </template>
      <v-app-bar-nav-icon class="my-auto" @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <v-toolbar-title
        class="hidden-sm-and-down my-auto display-1 font-weight-bold"
      >Sistema Administrador de Folios</v-toolbar-title>
      <v-toolbar-title class="hidden-md-and-up my-auto display-1 font-weight-bold">S.A.F.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        alt="Vuetify Logo"
        class="my-auto shrink mr-2"
        contain
        src="../assets/logo.svg"
        transition="scale-transition"
        height="40"
      />
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col class="shrink">
            <v-img src="../assets/logo.alpha.png"></v-img>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: false,
    zonificacions: [
      ["Zonificar", "mdi-map-marker"],
      ["Formatos por Zonas", "mdi-pdf-box"],
      ["Formatos Individuales", "mdi-map-marker-radius"],
      ["Descargar Zonificados", "mdi-download"]
    ],

    reportes: [
      ["Folios Capturados", "mdi-file-document-box-check"],
      ["¿Quién Capturó?", "mdi-account-tie"]
    ],

    pymes: [
      ["Control de Folios PyME", "mdi-check-decagram"],
      ["Reportes de Folios PyME", "mdi-table-large"]
    ],
    diferidos: [
      ["Registrar Folios Diferidos", "mdi-file-document-box-plus"],
      ["Errores de Folios Diferidos", "mdi-file-document-box-remove"]
    ],

    amigos: [
      ["Registrar Folios Amigo", "mdi-file-document-box-plus"],
      ["Formatos de Folios", "mdi-pdf-box"],
      ["Errores de Folios Amigo", "mdi-file-document-box-remove"]
    ],

    users: [
      ["Gestores", "mdi-account-group"],
      ["Claves SISACT", "mdi-lock"]
    ]
  }),
  methods: {
    signOut() {
      this.$vs.loading({
        background: "#2b81d6",
        color: "rgb(255, 255, 255)"
      });
      this.$store.commit("changeLoggedIn");
      this.$router.push("login");
      setTimeout(() => {
        this.$vs.loading.close();
      }, 1000);
    }
  },
  created() {}
};
</script>
