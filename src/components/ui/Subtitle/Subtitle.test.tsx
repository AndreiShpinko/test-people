import { render } from "@testing-library/react";
import Subtitle from "./Subtitle";

test("Subtitle", () => {
  const text = "Some text";
  let { container } = render(<Subtitle>{text}</Subtitle>);
  expect(container.textContent).toBe(text);
});
