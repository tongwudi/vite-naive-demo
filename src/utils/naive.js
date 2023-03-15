import {
  create,
  NConfigProvider,
  NLayoutHeader,
  NIcon,
  NSpace,
  NDropdown,
  NButton,
  NSwitch,
} from 'naive-ui'

const naive = create({
  components: [
    NConfigProvider,
    NLayoutHeader,
    NIcon,
    NSpace,
    NDropdown,
    NButton,
    NSwitch,
  ]
})

export { naive }