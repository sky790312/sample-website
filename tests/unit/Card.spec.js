import { shallowMount } from '@vue/test-utils'
import Card from '@/views/News/Card.vue'

describe('Card.vue', () => {
  it('should renders correct text by props data', () => {
    const title = 'title'
    const desc = 'desc'
    const wrapper = shallowMount(Card, {
      propsData: {
        title,
        desc
      }
    })
    expect(wrapper.find('.card-title').text()).toEqual(title)
    expect(wrapper.find('.card-desc').text()).toEqual(desc)
  })

  it('should updatedAtTime computed correct local time by props updatedAt', () => {
    const updatedAt = '1546856552862'
    const localTime = '2019-1-7'
    const wrapper = shallowMount(Card, {
      propsData: {
        updatedAt
      }
    })
    expect(wrapper.vm.updatedAtTime).toEqual(localTime)
  })
})
