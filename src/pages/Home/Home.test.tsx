import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import userEvent from "@testing-library/user-event";

import axiosMock from "axios";
import Home from "./Home";

jest.mock("axios");
const mockedAxios = axiosMock as jest.MockedFunction<typeof axiosMock>;

const AlertTemplate = require("react-alert-template-basic").default;

describe("Home: ", () => {
  test("should display button and at least one card after getting request", async () => {
    const { getByRole, getByTestId } = render(
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    mockedAxios.mockResolvedValueOnce({
      data: [
        {userID: '123'},
        {userID: '234'},
        {userID: '345'}
      ],
      status: 200,
      statusText: "Ok",
      headers: {},
      config: {},
    });

    await waitFor(() => {
      const buttonReload = getByRole("button");
      expect(buttonReload).toBeInTheDocument();

      const card = getByTestId('link-person');
      expect(card).toBeInTheDocument();
    });
  });
});
