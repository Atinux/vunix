import type { ComponentResolver } from 'unplugin-vue-components'

export function VunixComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^Dw[A-Z]/)) {
        return { name, from: '@vunix/vue' }
      }
    },
  }
}