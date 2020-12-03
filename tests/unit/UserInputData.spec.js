import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('Check disabled propery when no username is entered', async () => {
    const wrapper = shallowMount(Home)

    await wrapper.setData({ username: '' });
    expect(wrapper.vm.submitDisabled).toBe(true);

    await wrapper.setData({ username: 'New user' });
    expect(wrapper.vm.submitDisabled).toBe(false);
  })
})
