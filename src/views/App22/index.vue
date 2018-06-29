<template lang="pug">
  div
    p {{ message }}
    edit-form
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import EditForm from './EditForm.vue'
    import { namespace } from 'vuex-class'

    const moduleA = namespace('moduleA')

    @Component({
        components: { EditForm }
    })
    export default class App extends Vue {
        @moduleA.Getter
        message: string
    }
</script>
