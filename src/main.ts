import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'
import type { UserModule } from './types'
import generatedRoutes from '~pages'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import { DatePicker, Frustum, MyElDatePicker } from 'zige-first-lib';

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    ctx.app.component('DatePicker', DatePicker)
    // ctx.app.component('MyElDatePicker',MyElDatePicker)
    ctx.app.component('Frustum', Frustum)
    // ctx.app.use(Previewer)
  },
)

export default createApp
