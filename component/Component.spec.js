/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'

import clickOutSide from "../lib";

import Box from './Component.vue'

test('box element is not visible at first', () => {
  const wrapper = mount(Box)

  expect(wrapper.find('.box').exists()).toBe(true)
})

test('box counter increases if button is clicked', async () => {
  const wrapper = mount(Box)

  expect(wrapper.find('.box').exists()).toBe(true)

  const button = wrapper.find('.box')
  await button.trigger('click')

  expect(wrapper.find('.box').text()).toBe('BOX 1')
})

// TODO: fix it.
test('box element is invisible if data visible is false', async () => {
  const wrapper = mount(Box, {
    global: {
      directives: {
        clickOutSide,
      }
    }
  })

  const box = wrapper.find('.box')
  const main = wrapper.find('main')

  expect(box.exists()).toBe(true)

  await main.trigger('click')

  expect(box.isVisible()).toBe(false)
})
