import { act, render, screen, waitFor } from "@testing-library/react";
import axiosMock from "axios";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import Home from "./Home";

jest.mock("axios");

const AlertTemplate = require("react-alert-template-basic").default;

describe("Home: ", () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

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
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(await screen.findByTestId("error")).toBeInTheDocument();
  });

  test("should display 'loader', and then 'panel', 'user-list', 'card-wrapper'", async () => {
    const axiosResponse = {
      data: {
        data: ["123", "234", "345"],
      },
    };

    jest.spyOn(axiosMock, "get").mockResolvedValueOnce(axiosResponse);

    render(
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

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    expect(await screen.findByTestId("panel")).toBeInTheDocument();
    expect(await screen.findByTestId("users-list")).toBeInTheDocument();
    waitFor(async () => {
      expect((await screen.findAllByTestId("card-wrapper")).length).toBe(3);
    });
  });
});
