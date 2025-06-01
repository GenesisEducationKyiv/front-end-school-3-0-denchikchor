import { z } from "zod";

export const TrackFormSchema = z.object({
  title: z.string().min(1, { message: "Track name is required" }),
  artist: z.string().min(1, { message: "Track name is required" }),
  album: z.string().optional(),
  genres: z
    .array(z.string().min(1))
    .min(1, { message: "Select at least one genre" }),
  coverImage: z.string().url({ message: "Cover image must be a valid URL" }).optional().or(z.literal("")),
});

export type TrackFormSchemaType = z.infer<typeof TrackFormSchema>;
