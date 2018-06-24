import { createDecorator } from 'vue-class-component'

export function Filter(): MethodDecorator {
    return (target: any, key: any) => {
        createDecorator((componentOptions, handler) => {
            (componentOptions.filters || (componentOptions.filters = {}) as any)[handler] = target[key]
        })(target, key)
    }
}
