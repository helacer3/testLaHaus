import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header Component', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(Header)
    expect(wrapper.vm).toBeTruthy()
  });

  test('Header Contain Menu', () => {
    const wrapper = mount(Header)
    expect(wrapper.text()).toContain('Cundinamarca');
    expect(wrapper.text()).toContain('Antioquia');
    expect(wrapper.text()).toContain('Recursos');
    expect(wrapper.text()).toContain('Mi Perfil');
  });
})
