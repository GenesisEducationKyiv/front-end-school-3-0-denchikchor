// src/components/TrackForm/__tests__/TrackForm.test.tsx

import React from "react";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import TrackForm from "../TrackForm";
import { vi } from "vitest";

vi.mock("../../GenreSelector/GenreSelector", () => ({
  __esModule: true,
  default: ({ selected }: { selected: string[] }) => (
    <div data-testid="genre-selector">
      Genres: {selected.join(", ")}
    </div>
  ),
}));

describe("TrackForm", () => {
  const defaultProps = {
    onSubmit: vi.fn(),
    onCancel: vi.fn(),
    submitLabel: "Save",
  };

  beforeEach(() => {
    defaultProps.onSubmit.mockClear();
    defaultProps.onCancel.mockClear();
  });

  it("renders inputs and submits valid form", async () => {
    render(
      <TrackForm
        {...defaultProps}
        initialValues={{ genres: ["rock"] }}
      />
    );

    fireEvent.change(screen.getByTestId("input-title"), {
      target: { value: "Test Track" },
    });
    fireEvent.change(screen.getByTestId("input-artist"), {
      target: { value: "Test Artist" },
    });

    fireEvent.click(screen.getByTestId("submit-button"));

    // чекаємо, поки onSubmit викликається
    const called = await screen.findByTestId("track-form"); 
    // просто щоб дочекатися реакції форми

    expect(defaultProps.onSubmit).toHaveBeenCalledWith({
      title: "Test Track",
      artist: "Test Artist",
      album: "",
      coverImage: "",
      genres: ["rock"],
    });
  });

  it("shows validation errors if title or artist are empty", async () => {
    render(
      <TrackForm
        {...defaultProps}
        initialValues={{ genres: ["rock"] }} // щоб не ловити помилку по жанрах
      />
    );

    fireEvent.click(screen.getByTestId("submit-button"));

    // дочекатися появи помилок
    const titleError = await screen.findByTestId("error-title");
    const artistError = await screen.findByTestId("error-artist");

    expect(titleError).toHaveTextContent("Track name is required");
    expect(artistError).toHaveTextContent("Artist is required");
    expect(defaultProps.onSubmit).not.toHaveBeenCalled();
  });

  it("calls onCancel when Cancel button is clicked", () => {
    render(<TrackForm {...defaultProps} />);
    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });
});
