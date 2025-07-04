import React from "react";
import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("./components/CustomAudioPlayer/CustomAudioPlayer", () => ({
  default: () => <div data-testid="mock-audio-player">AudioPlayer</div>,
}));

vi.mock("./components/TrackUpload/TrackUpload", () => ({
  default: ({ trackId }: { trackId: string }) => (
    <div data-testid="mock-upload">Upload for {trackId}</div>
  ),
}));

vi.mock("./assets/dots.svg?react", () => ({
  default: () => <div data-testid="mock-dots-icon" />,
}));

(globalThis as any).jest = vi;
