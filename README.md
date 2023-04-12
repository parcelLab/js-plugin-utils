# @parcellab/js-plugin-utils 🛒 - 🚛 - 📦

Utils for using the parcelLab js plugin with different frameworks (react/vue) and as web-component.  
Check out the [documentation on the parcelLab track & trace JS plugin](https://how.parcellab.works/docs/order-status-page/overview) beforehand to see what **options** are available. 

# Usage

## React
For usage with react/next/... :
(React needs to be installed...)  

```javascript
import TrackAndTrace from '@parcellab/js-plugin-utils/v5/react'

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
If needed, you can still reference the older plugin's version:
> import TrackAndTrace from '@parcellab/js-plugin-utils/v3/react'


## Vue
For usage with vue/nuxt/... :
(Vue needs to be installed...)  

```html
<template>
  <TrackAndTrace :options="{...}" />
</template>
<script>
  import TrackAndTrace from '@parcellab/js-plugin-utils/v5/vue'

  export default {
    components: {
      TrackAndTrace
    }
  }
</script>

```
If needed, you can still reference the older plugin's version:
> import TrackAndTrace from '@parcellab/js-plugin-utils/v3/vue'

## Web Component
For usage directly within your web application or web page:

On your application's main js file, you can directly import the web component dependency.

```javascript
import "@parcellab/js-plugin-utils/v5/web";
```

And later run it from the HTML file where your app's bundled js will be included
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="your-app-bundle.min.js"></script>
  </head>
  <body>
    <track-and-trace></track-and-trace>
  </body>
</html>
```

Otherwise, you can simply import directly from our CDN
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script async src="https://cdn.parcellab.com/js/v5/web-components/oder-status.js"></script>
  </head>
  <body>
    <track-and-trace></track-and-trace>
  </body>
</html>
```

For customisation, `options` can be defined and attached to the window object. This should happen before the component is initialised. Ex:

```html
<body>
  <script>
    window.parcelLabTrackAndTraceOptions = {} // options object goes here
  </script>
  <track-and-trace />
</body>
```
The older plugin's version is not available as a web component.

# Disabling the default styles
These components are built to automatically pull the newest version of our prebuilt Style Sheets from our CDN.  
If you would like to omit these and build your own styles - you can disable the fetching by setting the param `disableDefaultStyles` to true.  
⚠️  You will need to import your own styles at some point in your application flow.  
⚠️  Styles that are passed through the options object will still work though!  
⚠️  You will need to set theses through the options.styles object or override them in your style sheet.  

## Disabling default styles in React:
```javascript
import TrackAndTrace from '@parcellab/js-plugin-utils/v5/react'

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
```

## Disabling default styles in Web Component:
```javascript
window.disableDefaultStyles = true;
```

# Breaking Changes

With the release of the major version 1.0.0, the import paths have changed. It is now required that the plugin's version is specified within the path. Ex:
| Before                                                       | Now                                                             |
|--------------------------------------------------------------|-----------------------------------------------------------------|
| import TrackAndTrace from '@parcellab/js-plugin-utils/react' | import TrackAndTrace from '@parcellab/js-plugin-utils/v5/react' | 

Vue 2.0 is also no longer supported, instead you should now use Vue 3.0.
