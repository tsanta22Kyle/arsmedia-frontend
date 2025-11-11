import Button from "@/src/app/components/Button"
import {render} from "@testing-library/react"



describe(Button,()=>{
   it("button should be rendered",()=>{
    render(<Button label="click" ></Button>)
      // expect(getByText('click').textContent).toEqual("click")
   })
})