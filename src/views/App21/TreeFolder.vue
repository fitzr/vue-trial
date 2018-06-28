<template lang="pug">
  div
    span {{ folder.name }}
    tree-folder-contents(:children="folder.children")
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import TreeFolderContents from './TreeFolderContents.vue'

@Component({
    components: { TreeFolderContents }
})
export default class TreeFolder extends Vue {
    @Prop()
    folder: Object
}
</script>

<style lang="sass" scoped>

</style>
