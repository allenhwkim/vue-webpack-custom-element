import Vue from 'vue'
import VueCustomElement from 'vue-custom-element'

import ShareButtonsComponent from './ShareButtonsComponent.vue'
import HelloWorldComponent from './HelloWorldComponent.vue'
import ClockComponent from './ClockComponent.vue'

Vue.use(VueCustomElement)

// import and register your component(s)
Vue.customElement('share-buttons', ShareButtonsComponent)
Vue.customElement('hello-world', HelloWorldComponent)
Vue.customElement('my-clock', ClockComponent)
