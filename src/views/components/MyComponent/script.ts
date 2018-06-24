import {Component, Prop, Vue} from 'vue-property-decorator'


@Component
export default class App extends Vue {
    msg = 'My Component !!'

    @Prop()
    val: string
}
