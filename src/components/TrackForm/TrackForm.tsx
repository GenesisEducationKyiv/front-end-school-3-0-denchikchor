// src/components/TrackForm/TrackForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GenreSelector from "../GenreSelector/GenreSelector";
import styles from "./TrackForm.module.css";
import { TrackFormSchema, TrackFormSchemaType } from "../../schemas/track";

interface Props {
  initialValues?: Partial<TrackFormSchemaType>;
  onSubmit: (data: TrackFormSchemaType) => Promise<void> | void;
  onCancel: () => void;
  submitLabel: string;
}

const TrackForm: React.FC<Props> = ({
  initialValues = {},
  onSubmit,
  onCancel,
  submitLabel,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<TrackFormSchemaType>({
    resolver: zodResolver(TrackFormSchema),
    defaultValues: {
      title: initialValues.title ?? "",
      artist: initialValues.artist ?? "",
      album: initialValues.album ?? "",
      genres: initialValues.genres ?? [],
      coverImage: initialValues.coverImage ?? "",
    },
  });

  const genresValue = watch("genres");

  const handleGenreChange = (selectedGenres: string[]) => {
    setValue("genres", selectedGenres, { shouldValidate: true });
  };

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await onSubmit(data);
      })}
      className={styles.form}
      data-testid="track-form"
    >
      <div className={styles.fieldGroup}>
        <input
          data-testid="input-title"
          {...register("title")}
          placeholder="Track name"
        />
        {errors.title && (
          <div className={styles.error} data-testid="error-title" role="alert">
            {errors.title.message}
          </div>
        )}
      </div>

      <div className={styles.fieldGroup}>
        <input
          data-testid="input-artist"
          {...register("artist")}
          placeholder="Artist"
        />
        {errors.artist && (
          <div className={styles.error} data-testid="error-artist">
            {errors.artist.message}
          </div>
        )}
      </div>

      <input
        data-testid="input-album"
        {...register("album")}
        placeholder="Album"
      />
      <GenreSelector
        selected={genresValue ?? []}
        onChange={handleGenreChange}
      />
      {errors.genres && (
        <div className={styles.error} data-testid="error-genres">
          {errors.genres.message as string}
        </div>
      )}

      <input
        data-testid="input-cover-image"
        {...register("coverImage")}
        placeholder="Cover (URL)"
      />
      {errors.coverImage && (
        <div className={styles.error} data-testid="error-coverImage">
          {errors.coverImage.message}
        </div>
      )}

      <div className={styles.actions}>
        <button
          type="submit"
          data-testid="submit-button"
          disabled={isSubmitting}
          data-loading={isSubmitting}
          aria-disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : submitLabel}
        </button>
        <button type="button" onClick={onCancel} data-testid="cancel-button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TrackForm;
