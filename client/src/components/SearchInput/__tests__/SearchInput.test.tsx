import { render, screen, fireEvent, waitFor } from "../../../test-utils";
import { MemoryRouter } from "react-router-dom";
import SearchInput from "../SearchInput";

const setParamsMock = jest.fn();
const mockQuery = { search: "initial", page: 2 };

jest.mock("../../../hooks/useTrackQueryParams", () => ({
  __esModule: true,
  useTrackQueryParams: () => ({
    query: mockQuery,
    setParams: setParamsMock,
  }),
}));
jest.mock("../../../hooks/useDebounce", () => ({
  __esModule: true,
  useDebounce: (value: string) => value,
}));

describe("SearchInput", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockQuery.search = "initial";
    mockQuery.page = 2;
  });

  const renderComponent = () =>
    render(
      <MemoryRouter>
        <SearchInput />
      </MemoryRouter>
    );

  it("updates local state and shows clear button", () => {
    renderComponent();
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input.value).toBe("abc");
    expect(
      screen.getByRole("button", { name: /clear search/i })
    ).toBeInTheDocument();
  });

  it("clears and blurs the input when Escape is pressed", () => {
    renderComponent();
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "xyz" } });
    input.focus();
    fireEvent.keyDown(input, { key: "Escape" });
    expect(input.value).toBe("");
    expect(document.activeElement).not.toBe(input);
  });

  it("clears the input when the clear button (×) is clicked", () => {
    renderComponent();
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "hello" } });
    fireEvent.click(
      screen.getByRole("button", { name: /clear search/i })
    );
    expect(input.value).toBe("");
  });
});
