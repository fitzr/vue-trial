<template lang="pug">
  div
    nav
      router-link(to="/" exact) Home
      | &nbsp;
      router-link(to="/product" exact) Product
    router-view
</template>

<style lang="sass" scoped>
  .router-link-active
    background: #e35193
</style>
