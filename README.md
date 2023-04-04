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

## Installation

```
npm install --save @mahdikhashan/vue3-click-outside
```

## How to use
add the custom directive to you component

```js
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

```js
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE.md) for more information.

## Contributors

Many thanks for your help!

<a href="https://github.com/mahdikhashan/99-minutes-emails/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=mahdikhashan/99-minutes-emails" />
</a>

The image of contributors is made with [contrib.rocks](https://contrib.rocks).
