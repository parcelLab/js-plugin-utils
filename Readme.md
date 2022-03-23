# @parcellab/js-plugin-utils 🛒 - 🚛 - 📦

Utils for using the parcelLab js plugin with different frameworks (react/vue)  
Check out the [documentation on the parcelLab track & trace JS plugin](https://how.parcellab.works/docs/integration-quick-start/track-and-trace-page) beforehand to see what **options** are available. 

# Usage

## React
For usage with react/next/...:
(React needs to be installed...)  

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
(Vue needs to be installed...)  

```html
<template>
  <TrackAndTrace options="{...}" />
</template>
<script>
  import TrackAndTrace from '@parcellab/js-plugin-utils/vue'

  export default {
    components: {
      TrackAndTrace
    }
  }
</script>


```

# Diabling the default styles
These components are built to automatically pull the newest version of our prebuilt Style Sheets from our CDN.  
If you would like to omit these and build your own styles - you can disable the fetching by setting the param "disableDefaultStyles" to true.  
⚠️  You will need to import your own styles at some point in your application flow.  
⚠️  Styles that are passed through the options object will still work though!  
⚠️  You will need to set theses through the options.styles object or override them in your style sheet.  

## Disabling default styles in React:
```javascript
import TrackAndTrace from '@parcellab/js-plugin-utils/react'

export default function MyPageComponent() {
  const options = {...}
  // ...
  return(
    <div>
      {/* ... */}
      <TrackAndTrace options={options} disableDefaultStyles={true} />
    </div>
  )
}

