<template>
  <v-app>
    <v-app-bar id="appBar">
      <v-container class="d-flex align-center">
        <v-app-bar-title>
          <v-img src="@/assets/logo.png" max-width="150"></v-img>
        </v-app-bar-title>
        <v-spacer></v-spacer>
        <template v-if="!isMobile">
          <template v-for="navItem in navItems"  :key="navItem.name">
            <v-btn :prepend-icon="navItem.icon" :to="navItem.path">{{ navItem.name }}</v-btn>
          </template>
        </template>
        <v-app-bar-nav-icon v-if="isMobile" @click="openDrawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer v-if="isMobile" v-model="drawer" location="right">
      <v-list>
        <v-list-item
        v-for="navItem in navItems"
        :key="navItem.name"
        :value="navItem"
        :to="navItem.path"
        :active="false"
        :title="navItem.name"
        :prepend-icon="navItem.icon"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <!-- Component 是目前頁面該顯示的元件 -->
      <router-view v-slot="{ Component }">
        <!-- keep-alive 讓路由切換時不會銷毀元件，用 include 指定只有 Home 不會被銷毀 -->
        <!-- component 動態元件，顯示 is 綁定的元件 -->
        <keep-alive include="Home">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
  </template>
  
<script setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const drawer = ref(false)

const isMobile = computed(() => mobile.value)

const navItems = [
  {name: '首頁', path: '/', icon: 'mdi-home'},
  {name: '事項', path: '/list', icon: 'mdi-format-list-bulleted'},
  {name: '設定', path: '/settings', icon: 'mdi-cog'},
]

const openDrawer = () => {
  drawer.value = !drawer.value
}

</script>
  