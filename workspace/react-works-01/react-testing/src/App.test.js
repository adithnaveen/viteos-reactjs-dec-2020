import { render, screen } from '@testing-library/react';
import App from './App';

// import Counter from './Counter'; 

import {  mount } from 'enzyme';


describe("Counter Testing App ", () => {

test.skip('renders learn react link', () => {

  const wrapper = shallow(<App />); 
  console.log(wrapper.debug());

  console.log("-------------------------------------------------");

  const wrapper1 = render(<App />); 
  console.log(wrapper1.debug())


  // Version 1.0 
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

  let wrapper ; 
  beforeEach(()=> {
    // shallow will look only for the specified 
    // wrapper = shallow(<App />); 
    wrapper = mount(<App />); 
  })

  test("renders the presence of heading", () => {
    expect(wrapper.find("h3").text()).toContain("This is Counter App"); 
  })

  test("to validate the counter initial value is 0", ()=>{
    expect(wrapper.find("#counter-value").text()).toBe("0"); 
  })

  test("to render a button called Increment in App Component", () => {
    expect(wrapper.find("#incr-btn").text()).toBe("Increment")
  })

  test("to render a button called Decrement in App Component", () => {
    expect(wrapper.find("#decr-btn").text()).toBe("Decrement")
  })

  test("to increment the value of count from 0 to 1 and validate ", () => {
    wrapper.find("#incr-btn").simulate('click'); 
    expect(wrapper.find("#counter-value").text()).toBe("1"); 
    
  })

  test("to validate  increment  & decrement the count value", () => {
    wrapper.find("#incr-btn").simulate('click'); 
    expect(wrapper.find("#counter-value").text()).toBe("1"); 

    wrapper.find("#decr-btn").simulate('click'); 
    expect(wrapper.find("#counter-value").text()).toBe("0"); 
    
  })
})