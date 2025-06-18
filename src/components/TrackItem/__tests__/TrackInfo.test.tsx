import { render, screen } from "../../../test-utils";
import TrackInfo from "../TrackInfo";

describe("TrackInfo", () => {
  it("renders title, artist, album and genres", () => {
    render(
      <TrackInfo
        title="Imagine"
        artist="John Lennon"
        album="Best of Lennon"
        genres={["rock", "classic"]}
        id="1"
      />,
    );

    expect(screen.getByText("Imagine")).toBeInTheDocument(); 
    expect(screen.getByText("John Lennon")).toBeInTheDocument();
    expect(screen.getByText("Best of Lennon")).toBeInTheDocument();
    expect(screen.getByText("rock")).toBeInTheDocument();
    expect(screen.getByText("classic")).toBeInTheDocument();
  });
});
