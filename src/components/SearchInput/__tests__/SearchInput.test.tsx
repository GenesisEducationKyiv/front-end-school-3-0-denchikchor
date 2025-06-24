import { render, screen, fireEvent, cleanup } from "../../../test-utils";
import SearchInput from "../SearchInput";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";

describe("SearchInput (white-box)", () => {
  let onChange: ReturnType<typeof vi.fn>;
  let addSpy: ReturnType<typeof vi.spyOn>;
  let removeSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    onChange = vi.fn();
    // Spy on addEventListener/removeEventListener
    addSpy = vi.spyOn(HTMLInputElement.prototype, "addEventListener");
    removeSpy = vi.spyOn(HTMLInputElement.prototype, "removeEventListener");
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("registers and removes the Escape keydown listener", () => {
    const { unmount } = render(
      <SearchInput value="test" onChange={onChange} />,
    );

    // Verify that addEventListener was called
    expect(addSpy).toHaveBeenCalledWith("keydown", expect.any(Function));

    unmount();

    // Verify that removeEventListener was called on unmount
    expect(removeSpy).toHaveBeenCalledWith("keydown", expect.any(Function));
  });

  it("calls onChange and blurs the input on Escape key press", () => {
    render(<SearchInput value="search" onChange={onChange} />);
    const input = screen.getByTestId("search-input") as HTMLInputElement;

    // Spy on blur
    const blurSpy = vi.spyOn(input, "blur");

    // Simulate Escape key press
    fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

    expect(onChange).toHaveBeenCalledWith("");
    expect(blurSpy).toHaveBeenCalled();
  });

  it("renders clear button when value is non-empty and clears on click", () => {
    render(<SearchInput value="abc" onChange={onChange} />);
    const clearButton = screen.getByRole("button", { name: /clear search/i });

    expect(clearButton).toBeInTheDocument();

    fireEvent.click(clearButton);
    expect(onChange).toHaveBeenCalledWith("");
  });
});
