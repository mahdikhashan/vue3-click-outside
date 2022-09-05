# vue3-click-outside
Directive for Vue 3 to run a method on clicking outside of the binded element

![npm (tag)](https://img.shields.io/npm/v/@mahdikhashan/vue3-click-outside/latest?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mahdikhashan/vue3-click-outside)
![npm](https://img.shields.io/npm/dy/@mahdikhashan/vue3-click-outside)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@mahdikhashan/vue3-click-outside/peer/vue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/mahdikhashan/vue3-click-outside)
![NPM](https://img.shields.io/npm/l/@mahdikhashan/vue3-click-outside)


## Demo

[Demo](https://codesandbox.io/s/vue3-click-out-side-i6zhbb)

<iframe src="https://codesandbox.io/embed/vue3-click-out-side-i6zhbb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="vue3-click-out-side"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   >
</iframe>

## Installation

```
npm install --save @mahdikhashan/vue3-click-outside
```

## How to use
add the custom directive to you component

```
<template>
  <main>
    <div v-click-out-side="customMethod" @click="clickInside" class="box">
      BOX
    </div>
    <br />
    <p>Outside of the box</p>
  </main>
</template>

<script>
import clickOutSide from "@mahdikhashan/vue3-click-outside";

export default {
  name: "Box",
  directives: {
    clickOutSide,
  },
  props: {
    msg: String,
  },
  methods: {
    customMethod() {
      alert("You clicked outside the box!");
    },
    clickInside() {
      alert("You clicked inside the box!");
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background-color: red;
  width: 100px;
  height: 100px;
}
p {
  font-size: 2rem;
  font-weight: 800;
}
</style>

```

### Use Composition Api
If you want to use the library with the <script setup> or composition api, you need to rename the object like bellow.

```
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'
```

## Contributing

If you want to contribute to this project simply fork it and clone it then run
`npm i`
in the root of the project, then run
`npm run start`
to run development server.

### Licence and cast

MIT Licence

by [Mahdi Khashan](https://www.linkedin.com/in/mahdi-khashan-ir/)
