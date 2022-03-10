# @parcellab/js-plugin-utils 🛒 - 🚛 - 📦

Utils for using the parcelLab js plugin with different frameworks (react/vue)  
Check out the [documentation on the parcelLab track & trace JS plugin](https://how.parcellab.works/docs/integration-quick-start/track-and-trace-page) beforehand to see what **options** are available. 

# Usage

## React
For usage with react/next/...:
(React need to be installed...)  

```javascript
import TrackAndTrace from '@parcellab/js-plugin-utils/react'

export default function MyPageComponent() {
  const options = {...}
  // ...
  return(
    <div>
      {/* ... */}
      <TrackAndTrace options={options}  />
    </div>
  )
}

```

## Vue
For usage with vue/nuxt/...:
(Vue need to be installed...)  

```html
<template>
  <TrackAndTrace options="{...}" />
</template>
<script>
  import TrackAndTrace from '@parcellab/js-plugin-utils/vue/index.vue'

  export default {
    components: {
      TrackAndTrace
    }
  }
</script>


```
