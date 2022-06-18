# v-on-page-video
![npm (tag)](https://img.shields.io/npm/v/@mahdikhashan/v-on-page-video/latest?style=plastic)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mahdikhashan/v-on-page-video)
![npm](https://img.shields.io/npm/dy/@mahdikhashan/v-on-page-video)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/@mahdikhashan/v-on-page-video/peer/vue)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/mahdikhashan/v-on-page-video)
![NPM](https://img.shields.io/npm/l/@mahdikhashan/v-on-page-video)

## Directive for Vue 2 to pause and play the video element when page visibility changes like moving the tab to background


--- 



## Installation

```
npm install --save @mahdikhashan/v-on-page-video
```

## How to use
add the custom directive to you component

```
<template>
  <div class="hello">
    <video v-on-page-video width="320" height="240" controls>
      <source
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>

<script>
import onPageVideo from "@mahdikhashan/v-on-page-video";

export default {
  name: "HelloWorld",
  directives: {
    onPageVideo,
  },
};
</script>
```
