import { fireEvent, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("test nested text", () => {
    const text = "Some text";
    let { container } = render(<Button>{text}</Button>);
    expect(container.textContent).toBe(text);
  });

  test("test click function", () => {
    let counter = 0;
    let { getByRole } = render(
      <Button click={() => ++counter}>Some text</Button>
    );
    expect(counter).toBe(0);
    fireEvent.click(getByRole("button"));
    expect(counter).toBe(1);
  });
});
