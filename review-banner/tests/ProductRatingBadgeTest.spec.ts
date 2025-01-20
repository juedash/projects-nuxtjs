import ProductRatingBadge from '@/components/ProductRatingBadge.vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

describe('ProductRatingBadge', () => {
    it('renders correct css class', () => {
        const wrapper = mount(ProductRatingBadge)
        expect(wrapper.classes()).toContain('product-rating-badge')
    })
})