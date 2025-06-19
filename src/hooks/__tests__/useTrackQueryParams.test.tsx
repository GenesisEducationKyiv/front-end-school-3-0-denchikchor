import React from "react";
import { render, screen, fireEvent, cleanup } from "../../test-utils";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useTrackQueryParams } from "../useTrackQueryParams";

// 1) Create navigate mock
const navigateMock = vi.fn();

// 2) Mock react-router-dom before import anything that calls useNavigate
vi.mock("react-router-dom", async () => {
  // import the real module so we don’t lose useLocation
  const actual: typeof import("react-router-dom") = await vi.importActual(
    "react-router-dom"
  );
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

// 3) A tiny component to run our hook
function HookTester() {
  const { query, setParams } = useTrackQueryParams();
  return (
    <>
      <span data-testid="query">{JSON.stringify(query)}</span>
      <button
        data-testid="update"
        onClick={() =>
          setParams({ page: 2, search: "foo", genre: "" })
        }
      />
    </>
  );
}

// 4) Wrapper for MemoryRouter
const wrapper =
  (initialEntries: string[]) =>
  ({ children }: { children: React.ReactNode }) =>
    (
      <MemoryRouter initialEntries={initialEntries}>
        {children}
      </MemoryRouter>
    );

describe("useTrackQueryParams (logic-only integration)", () => {
  beforeEach(() => {
    navigateMock.mockClear();
  });

  afterEach(() => {
    cleanup();
  });

  it("parses default params when URL has none", () => {
    render(<HookTester />, { wrapper: wrapper(["/tracks"]) });
    expect(screen.getByTestId("query")).toHaveTextContent(
      JSON.stringify({
        page: 1,
        limit: 10,
        sort: "",
        order: "asc",
        search: undefined,
        genre: undefined,
      })
    );
  });

  it("parses provided URL params correctly", () => {
    render(
      <HookTester />,
      {
        wrapper: wrapper([
          "/tracks?page=3&limit=7&sort=title&order=desc&search=bar&genre=jazz",
        ]),
      }
    );
    expect(screen.getByTestId("query")).toHaveTextContent(
      JSON.stringify({
        page: 3,
        limit: 7,
        sort: "title",
        order: "desc",
        search: "bar",
        genre: "jazz",
      })
    );
  });

  it("calls navigate with updated query when setParams is invoked", () => {
    render(<HookTester />, { wrapper: wrapper(["/tracks?page=1"]) });
    fireEvent.click(screen.getByTestId("update"));
    expect(navigateMock).toHaveBeenCalledWith(
      { search: "page=2&search=foo" },
      { replace: true }
    );
  });
});
