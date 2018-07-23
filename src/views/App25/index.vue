<template>
  <div>
    <button @click="same">same</button>
    <button @click="modA">a</button>
    <button @click="modB">b</button>
    <child-component :paramsA="paramsA" :paramsB="paramsB" ></child-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildComponent from './child.vue'
import OtherComponent from './other.vue'

@Component({ components: { ChildComponent, OtherComponent } })
export default class App extends Vue {
    current = 0

    paramsA = {
        test: 1
    }

    paramsB = {
        test: 2
    }

    same() {
        this.paramsA = {
            test: this.paramsA.test + 1
        }
        this.paramsB = {
            test: this.paramsB.test + 1
        }
    }

    modA () {
        this.paramsA = {
            test: this.paramsA.test + 1
        }
    }

    modB () {
        this.paramsB = {
            test: this.paramsB.test + 1
        }
    }
}
</script>
