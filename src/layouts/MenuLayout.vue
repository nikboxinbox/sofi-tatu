<template> 
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title align="center" class="font-bold">
          Takeshy Master
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab 
        v-for="menuItem in menuItems"
        :key="menuItem" 
        icon="assignment"
        to="/some/other/route" replace label="Other Tab" />
      </q-tabs>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>

      <!-- <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar> -->
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// yarn quasar dev
import { ref } from "vue";
import menuItems from "src/data/menuItems.js";
export default {
  name: "LayoutName",

  data() {
    return {
    };
  },
};
</script>
