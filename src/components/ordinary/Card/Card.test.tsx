import { act, render, screen } from "@testing-library/react";
import axiosMock from "axios";
import "@testing-library/jest-dom";

import { MemoryRouter } from "react-router-dom";
import { positions, Provider } from "react-alert";
import Card from "./Card";

import {
  mockAllIsIntersecting,
  mockIsIntersecting,
  intersectionMockInstance,
} from "react-intersection-observer/test-utils";

jest.mock("axios");

const AlertTemplate = require("react-alert-template-basic").default;

describe("Card: ", () => {
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
          <Card userID="123" initialInView={true} />
        </MemoryRouter>
      </Provider>
    );

    mockAllIsIntersecting(true);

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    expect(await screen.findByTestId("error")).toBeInTheDocument();
  });

  test("should display 'loader', and then 'firstname'", async () => {
    const axiosResponse = {
      data: {
        data: {
          firstName: "Peter",
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
        <MemoryRouter>
          <Card userID="123" initialInView={true} />
        </MemoryRouter>
      </Provider>
    );

    mockAllIsIntersecting(true);

    expect(screen.getByTestId("loader")).toBeInTheDocument();

    expect(await screen.findByTestId("firstname")).toBeInTheDocument();
  });
});
