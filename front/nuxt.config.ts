import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        }
    },
    runtimeConfig: {
        secretKey: '', // variable that can only be accessed on the server side
        public: {
            API_URL: process.env.API_URL,
        }
    }
})
