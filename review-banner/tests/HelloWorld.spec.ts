import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('HelloWorld', () => {
  it('renders correct css class', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.classes()).toContain('hello-world')
  })
})
