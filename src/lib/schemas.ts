import { z } from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  title: z.string().min(1, "Description is required"),
  price: z.string().refine((val) => /^\d+$/.test(val), {
    message: "Price must be a number",
  }),
});

//sign-in
export const SignInSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid work email address")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email cannot exceed 100 characters"),
  
  password: z.string().min(6, "Password must be at least 6 characters long"),
});




export const SignUpSchema = z.object({
  name: z
    .string()
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});


export const SearchTermSchema = z.object({
  searchTerm: z
    .string()
});

export const CohortSchema = z.object({
  name: z.string().min(1, "Cohort name is required"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  instructor: z.string().min(1, "Instructor name is required"),
  description: z.string().min(1, "Description is required"),
});

export const StudentSchema = z.object({
  name: z.string().min(2, "Full name must be at least 2 characters long"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  cohortId: z.string().min(1, "Please select a cohort"),
});

