import { shallowMount } from '@vue/test-utils'
import Game from '@/views/Game.vue'

describe('Game.vue', () => {
  it('Check initial game data before the user starts playing.', async () => {
    const wrapper = shallowMount(Game);

    // Run initializeGameData() function
    await wrapper.vm.initializeGameData();

    // Expected main data
    expect(wrapper.vm.loadingData).toBe(false);
    expect(wrapper.vm.timePassed).toBe(0);
    expect(wrapper.vm.userWon).toBe(false);
    expect(wrapper.vm.reloadTime).toBe(10);

    // Check all cards are on slot 0
    const filteredCards = wrapper.vm.cards.filter(e => e.slot === 0);
    const allCards = wrapper.vm.cards;
    expect(filteredCards.lenght).toBe(allCards.lenght);

    // Check all slots have null value on card
    const filteredSlots = wrapper.vm.cards.filter(e => e.card === null);
    const allSlots = wrapper.vm.slots;
    expect(filteredSlots.lenght).toBe(allSlots.lenght);
  })
})
