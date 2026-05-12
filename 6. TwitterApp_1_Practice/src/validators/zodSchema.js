import { z } from "zod";

export const zodSchema = z.object({
  tweet: z.string().min(1).max(50),
});
