<template>
  <div>
    <v-navigation-drawer
      temporary
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      :fixed="true"
      mobile-break-point="900"
      app
    >
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/game" v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>event</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>New Game</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/history" v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>history</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>History</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/statistics" v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>poll</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Statistics</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider light></v-divider>
        <v-list-tile to="/signout" v-show="isAuthenticated">
          <v-list-tile-action>
            <v-icon>lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/signin" v-show="!isAuthenticated">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign in</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
</div>
  <!-- <nav class="nav">
    <md-tabs class="nav-list">
        <md-tab md-sync-route v-if="isAuthenticated" md-label="Register game" to="/game" class="nav-list-item-link"></md-tab>
        <md-tab md-sync-route md-label="Blog" to="/blog" class="nav-list-item-link"></md-tab>
        <md-tab md-sync-route :md-label="isAuthenticatedActionText" to="/signin" class="nav-list-item-link"></md-tab>
        <md-tab md-sync-route v-if="!isAuthenticated" md-label="Sign up" to="/signup" class="nav-list-item-link"></md-tab>
    </md-tabs>
  </nav> -->
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Official Foosball Score Tracker'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
