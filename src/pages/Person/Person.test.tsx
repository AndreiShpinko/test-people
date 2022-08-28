import { render, screen } from "@testing-library/react";
import axiosMock from "axios";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import Person from "./Person";

jest.mock("axios");

const AlertTemplate = require("react-alert-template-basic").default;

describe("Person: ", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should display 'loader', and then 'error'", async () => {
    const axiosResponse = new Error();

    jest.spyOn(axiosMock, "get").mockResolvedValueOnce(axiosResponse);

    render(
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <MemoryRouter
          initialEntries={["/people/c56d9013-743e-42f1-9eab-0ad0464bb660"]}
        >
          <Person />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    expect(await screen.findByTestId("error")).toBeInTheDocument();
  });

  test("should display 'loader', and then 'link-home', 'user-info'", async () => {
    const axiosResponse = {
      data: {
        data: {
          id: "c56d9013-743e-42f1-9eab-0ad0464bb660",
          firstName: "Peter",
          lastName: "Smith",
          age: 61,
          gender: "Male",
          country: "Canada",
        },
      },
    };

    jest.spyOn(axiosMock, "get").mockResolvedValueOnce(axiosResponse);

    render(
      <Provider
        template={AlertTemplate}
        timeout={3000}
        position={positions.BOTTOM_CENTER}
      >
        <MemoryRouter
          initialEntries={["/people/c56d9013-743e-42f1-9eab-0ad0464bb660"]}
        >
          <Person />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    expect(await screen.findByTestId("link-home")).toBeInTheDocument();
    expect(await screen.findByTestId("user-info")).toBeInTheDocument();
  });
});
