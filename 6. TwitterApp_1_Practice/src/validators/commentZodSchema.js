import { z } from "zod";

export const commentZodSchema = z.object({
  comment: z.string().min(1).max(30),
});
