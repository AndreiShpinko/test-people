import { render } from "@testing-library/react";
import Title from "./Title";

test("Title", () => {
  const text = "Some text";
  let { container } = render(<Title>{text}</Title>);
  expect(container.textContent).toBe(text);
});
