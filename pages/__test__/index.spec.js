import { shallowMount } from "@vue/test-utils"
import Index from "../index"

describe("Index", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Index, {})
  })

  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test("renders properly", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
