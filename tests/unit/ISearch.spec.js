import { shallowMount } from '@vue/test-utils'
import ISearch from '@/components/ISearch.vue'

describe('ISearch.vue', () => {
  it('should renders default search value by props searchValue', () => {
    const searchValue = 'value'
    const wrapper = shallowMount(ISearch, {
      propsData: {
        searchValue
      }
    })
    expect(wrapper.find('.search-input').element.value).toEqual(searchValue)
  })
})
