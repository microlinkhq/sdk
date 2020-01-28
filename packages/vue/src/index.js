import Vue from 'vue'
import microlink from '@microlink/vanilla'

const camelCase = string => string.replace(/-([a-z])/g, g => g[1].toUpperCase())

export const Microlink = Vue.component('Microlink', {
  props: {
    url: {
      type: String,
      required: true
    }
  },

  mounted() {
    this.renderCard()
  },

  methods: {
    renderCard() {
      const { cardSpace } = this.$refs
      const anchor = document.createElement('a')
      anchor.href = url
      anchor.innerHTML = url

      microlink(anchor, this.parameters, cardSpace)
    }
  },

  watch: {
    $attrs: {
      handler() {
        this.renderCard()
      },
      deep: true
    }
  },

  computed: {
    parameters() {
      return Object.keys(this.$attrs).reduce((acc, value) => {
        if (value.startsWith('data-')) {
          return acc
        }

        return {
          ...acc,
          [camelCase(value)]: this.$attrs[value]
        }
      }, Vue.microlinkGlobalOptions || {})
    }
  },

  template: `<div class="microlink_vue_dom" ref="cardSpace" />`
})

export default {
  install(v, options = {}) {
    v.microlinkGlobalOptions = options
    v.component(Microlink.name, Microlink)
  }
}
