import React from "react";
import styles from "./TrackItem.module.css";
import coverImage from "../../assets/default_cover.webp";

interface Props {
  src?: string;
  alt: string;
}

const TrackCover: React.FC<Props> = ({ src, alt }) => (
  <img
    src={src || coverImage}
    alt={alt || "Track cover"}
    role="img"
    aria-label={alt ? undefined : "Default track cover"}
    onError={(e) => ((e.target as HTMLImageElement).src = coverImage)}
    className={styles.cover}
  />
);

export default TrackCover;
