import Input from "@/src/app/components/Input"
import { cleanup, render, screen } from "@testing-library/react"
import { userEvent} from "@testing-library/user-event"


// pour eviter les effets de bords / anomalies lors de changements de data systématiques
afterEach(()=>{cleanup()})

describe('<Input>',()=>{
    it("should render same input with same style",()=>{
      const {container} =  render(<Input placeholder={""}></Input>)
      expect(container.firstChild).toMatchInlineSnapshot(`
<input
  class="undefined border border-[#8080805a] focus:outline-2 outline-primary  rounded-xl py-3 px-2"
  placeholder=""
  type="text"
/>
`)
    })

  
})