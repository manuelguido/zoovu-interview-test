import { shallowMount } from '@vue/test-utils'
import Game from '@/views/Game.vue'

describe('Game.vue', () => {
  it('Check data after the game finishes.', async () => {
    const wrapper = shallowMount(Game);

    // Run finishGame() function
    await wrapper.vm.finishGame();

    // Expected data
    expect(wrapper.vm.userWon).toBe(true);
    expect(wrapper.vm.reloadTime).toBe(10);
  })
})
