import { z } from "zod";

export const authSchemaRegister = z.object({
   
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  userName: z.string().min(3, { message: "User name must be at least 3 characters long" }),
});

export default authSchemaRegister;