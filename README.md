# js-fuzeday-2018-starter-kit

### requirements:
a. **Main products gallary page** includes:
  Header: 
   - search for products 
   - cart icon with amount of selected items badge 
b. **Selected product page** (route to it by selecting a product)
  - product model details to show:
    name, image, price, quantity, shipping method, Add to cart button, 
c. **Cart products page**
The cart showing a list of the items you added to it and the following:
For each product
Image
Price
Name
Quantity
Shipping method
Remove button (will remove the item from the cart list)
Title of Cart and a back button to wherever you came from (item details or gallery)
Buy All button
Total price of all items.

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


b. from child to parent: use this.$emit() to notify the parent that something happened and it should be handled.

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
