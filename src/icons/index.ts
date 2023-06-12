import SvgIcon from '@/components/Svgicon/index.vue'

const svgRequired = require.context('./svg', false, /\.svg$/)

svgRequired.keys().forEach((item) => svgRequired(item))

export default (app: any) => {
  app.component('svg-icon', SvgIcon)
}
