<template lang="pug">
  ul
    li(v-for="child in children")
      tree-folder(v-if="child.children" :folder="child")
      span(v-else) {{ child.name }}
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component({
        components: { 'tree-folder': () => import('./TreeFolder.vue') }
    })
    export default class TreeFolderContents extends Vue {
        @Prop()
        children: Object[]
    }
</script>

<style lang="sass" scoped>

</style>
