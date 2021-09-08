import { mount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Index Component', () => {

  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  });

  test('page Contain Elements', () => {
    const wrapper = mount(Index)
    expect(wrapper.html().indexOf("h1")).not.toBe(-1)
    expect(wrapper.html().indexOf("container-card")).not.toBe(-1)
    expect(wrapper.html().indexOf("container-card-list")).not.toBe(-1)
    expect(wrapper.html().indexOf("slidecard")).not.toBe(-1)
  });

  test('Favorites List Exist', () => {
    const wrapper = mount(Index)
    expect(wrapper.text()).toContain('Listas de favoritos');
  });

  test('create New List Exist', () => {
    const wrapper = mount(Index)
    expect(wrapper.text()).toContain('Crear una nueva lista');
  });

  test('implemented defineStateImages Method', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm.$emit('defineStateImages')).toBeTruthy();
  });

  test('implemented fetch Method', () => {
    const wrapper = mount(Index)
    expect(wrapper.vm.$emit('fetch')).toBeTruthy();
  });

  test('defineStateImages Method Response', () => {
    const wrapper = mount(Index)
    const valueReturned = wrapper.vm.defineStateImages([195748, 196996]);
    expect(valueReturned).toEqual([]);
  });

  test('fetch Method Response', async() => {
    const wrapper = mount(Index)
    await wrapper.vm.fetch
  });

})
