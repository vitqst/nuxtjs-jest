import { shallowMount } from "@vue/test-utils"
import Logo from "../Logo"

describe("Logo", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Logo, {
      data() {
        return {
          test: "Test change data"
        }
      }
    })
  })

  test("mounts properly", () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test("renders properly", () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
