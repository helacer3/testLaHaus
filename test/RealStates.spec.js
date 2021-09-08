import { mount } from '@vue/test-utils'
import  * as RealStates from '@/components/RealStates.vue'

describe('RealStates Component', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(RealStates)
    expect(wrapper.vm).toBeTruthy()
  });

  test('RealStates Contain Elements', () => {
    const wrapper = mount(RealStates)
    expect(wrapper.html().indexOf("container-card")).not.toBe(1)
  });
})
