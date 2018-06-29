<template lang="pug">
  .edit-form
    input(v-model="message")
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator'
    import { namespace } from 'vuex-class'

    const moduleA = namespace('moduleA')

    @Component
    export default class EditForm extends Vue {
        get message() {
            return this.$store.getters['moduleA/message']
        }
        set message(value: string) {
            this.doUpdate(value)
        }
        @moduleA.Action
        doUpdate: (x: string) => Promise<any>
    }
</script>
