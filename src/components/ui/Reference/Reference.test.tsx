import { render } from "@testing-library/react";
import Reference from "./Reference";

test("Reference", () => {
  const text = "Some text";
  let { container } = render(<Reference>{text}</Reference>);
  expect(container.textContent).toBe(text);
});
