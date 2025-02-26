<template>
    <header class="bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5">
                <div class="p-4">
                  <div v-for="item in products" :key="item.name" class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                    <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <component :is="item.icon" class="size-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                    </div>
                    <div class="flex-auto">
                      <a :href="item.href" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a v-for="item in callsToAction" :key="item.name" :href="item.href" class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                    <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
  
          <router-link to="/"><a href="#" class="text-sm/6 font-semibold text-gray-900">Головна</a></router-link>
          <router-link to="/medical-staff"><a href="#" v-if="user" class="text-sm/6 font-semibold text-gray-900">Учасники</a></router-link>
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" v-if="!user" @click="login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
          <Profile v-if="user" />
        </div>
      </nav>
      <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-10" />
        <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
            <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="size-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                </Disclosure>
                <router-link to="/"><a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Головна</a></router-link>
                <router-link to="/medical-staff"><a href="#" v-if="user" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Учасники</a></router-link>
              </div>
              <div class="py-6">
                <a href="#" v-if="!user" @click="login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
                <Profile v-else />
              </div>   
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
  } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
  
  const mobileMenuOpen = ref(false)

//   import Login from './Login.vue';
  import Profile from './Profile.vue';
  import { computed } from 'vue';
  import { useAuthStore } from '../store/auth';
  
  const authStore = useAuthStore();
  const user = computed(() => authStore.user);

  const CLIENT_ID = '1287795834758500385';
  const REDIRECT_URI = 'http://localhost:5173/auth';
  const loginUrl = `https://discord.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&scope=identify`;

  const login = () => {
    window.location.href = loginUrl;
  };
  </script>
  
  <!-- <script setup lang="ts">
  import Login from './Login.vue';
  import Profile from './Profile.vue';
  import { computed } from 'vue';
  import { useAuthStore } from '../store/auth';
  
  const authStore = useAuthStore();
  const user = computed(() => authStore.user);
  </script> -->
  