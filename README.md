# js-fuzeday-2018-starter-kit

###cheatsheet
- https://vuejs-tips.github.io/cheatsheet/

a. Pass data from parent to child:
 - child should declare props as follows:
 
 ```
 // simple syntax
Vue.component('props-demo-simple', {
  props: ['myMessage']
})
```
- parent should pass the prop with syntax - [:[propName]]

```
<template>
  <div id="app">
    <Search :myMessage="searchTextTitle"  v-on:search="onSearch"/>
  </div>
</template>
```


b. frpm child to parent: use this.$emit() to notify the parent that something happened and it should be handled.

```
this.$emit('emit-count',  this.count);
```

c.  working with events - use the v-bind directive shorthand:  
syntax: [@[eventName]]

```
<button @click="doThis('ok', $event)"></button>
```

d. use vue's directives - there're awesome 
- v-if

```
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```
- v-for

```
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```
