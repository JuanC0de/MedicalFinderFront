/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          azulElCielo: '#1565C0',
          DarkCyan:'#1C565C',
          MediumCyan:'#2F919C',
          PrincipalCyan:'#42CCDB',
          SecondaryCyan:'#3AB4C2',
          LightCyan:'#46D8E8',
          White:'#ffffff'
        },
      },
    },
  },
})
