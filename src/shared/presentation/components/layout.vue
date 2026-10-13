<script setup>
/**
 * Main Application Layout Component.
 * @summary Renders the Toolbar with Logo.dev branding, collapsible Sidebar navigation, and Language Switcher.
 * @author Piero Francisco Montes Chang
 */
import LanguageSwitcher from "./language-switcher.vue";
import FooterContent from "./footer-content.vue";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const drawer = ref(false);
const logoUrl = import.meta.env.VITE_LOGO_API_URL;

const items = [
  { label: 'toolbar.home', to: '/home' },
  { label: 'toolbar.new-item', to: '/historicalobjects/items/new' }
];
</script>

<template>
  <pv-toast />
  <pv-confirm-dialog />
  <header class="w-full" role="banner">
    <pv-toolbar class="bg-primary text-white">
      <template #start>
        <pv-button
            class="p-button-text text-white mr-2"
            icon="pi pi-bars"
            aria-label="Toggle Sidebar"
            @click="drawer = !drawer"
        />
        <img :src="logoUrl" alt="Organization Logo" class="h-2rem mr-3" />
        <span class="font-bold text-sm md:text-base">{{ t('toolbar.title') }}</span>
      </template>
    </pv-toolbar>

    <pv-drawer v-model:visible="drawer" header="Navigation" role="navigation" aria-label="Sidebar Menu">
      <div class="flex flex-column justify-content-between h-full">
        <div class="flex flex-column gap-2">
          <pv-button v-for="item in items" :key="item.label" as-child v-slot="slotProps">
            <router-link :to="item.to" :class="slotProps['class']" @click="drawer = false">
              {{ t(item.label) }}
            </router-link>
          </pv-button>
        </div>
        <div class="mt-auto pt-4 border-top-1 surface-border">
          <language-switcher />
        </div>
      </div>
    </pv-drawer>
  </header>

  <main class="p-4" role="main">
    <router-view />
  </main>
  <footer-content />
</template>