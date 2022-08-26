import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";

import axiosMock from "axios";
import Person from "./Person";

// import "@testing-library/jest-dom/extend-expect";

jest.mock("axios");
const mockedAxios = axiosMock as jest.MockedFunction<typeof axiosMock>;

const AlertTemplate = require("react-alert-template-basic").default;

describe("Person: ", () => {
  test("should display link after getting request", async () => {
    const { getByTestId } = render(
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <MemoryRouter>
          <Person />
        </MemoryRouter>
      </Provider>
    );

    mockedAxios.mockResolvedValueOnce({
      data: {
        firstName: "firstName",
        lastName: "lastName",
        age: "age",
        gender: "gender",
        country: "country",
      },
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    });

    await waitFor(() => {
      const linkToHome = getByTestId("link-home");
      expect(linkToHome).toBeInTheDocument();
    });
  });
});
