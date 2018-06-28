<template lang="pug">
    tree-folder(:folder="folder")
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import TreeFolder from './TreeFolder.vue'

@Component({
    components: { TreeFolder }
})
export default class App extends Vue {
    folder = {
        name: 'top',
        children: [
            {
                name: 'child1',
                children: []
            },
            {
                name: 'child2',
                children: [
                    {
                        name: 'grandson',
                        children: []
                    }
                ]
            }
        ]
    }
}
</script>

<style scoped>

</style>
