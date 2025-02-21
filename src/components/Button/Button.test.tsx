import { render, waitFor, cleanup, fireEvent } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Button } from './Button'

afterEach(() => {
  cleanup();
})

describe(Button, () => {

  it('Button should render', async () => {
    const click = vi.fn();
    var result = render(<Button variant='primary' text='text1' onClick={click} />);
    await waitFor(() => {
      expect(result).not.toBeNull();
    })
  });

  it('Should have a class of "button-default" and text "text1"', async () => {
    const click = vi.fn();
    const result = render(<Button variant='primary' text='text1' onClick={click} />).baseElement;
    await waitFor(() => {
      expect(result.querySelector('.button-default')).toBeTruthy();
      expect(result.textContent).toBe('text1');
    })
  });

  it('Should have text "Click Me"', async () => {
    const click = vi.fn();
    const result = render(<Button variant='primary' text='Click Me' onClick={click} />).baseElement;
    await waitFor(() => {
      expect(result.textContent).toBe('Click Me');
    })
  });

  it('Should trigger an event when clicked', async () => {
    const click = vi.fn();
    const result = render(<Button variant='primary' text='Click Me' onClick={click} />);
    await waitFor(() => {
      const buttonElement = result.getByText("Click Me");
      fireEvent.click(buttonElement);
      expect(click).toHaveBeenCalledTimes(1);
    })
  });

  it('Should create a popup window when "Hello World" function is called', async () => {
    global.alert = vi.fn();
    const result = render(<Button variant='primary' text='Click Me' onClick={() => alert("Hello World")} />);
    await waitFor(() => {
      const buttonElement = result.getByText("Click Me");
      fireEvent.click(buttonElement)
      expect(global.alert).toBeCalledWith("Hello World");
    })
  })

})
