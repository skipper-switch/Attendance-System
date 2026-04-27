"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "@/components/shared/CustomFormField";
import { Button } from "@/components/ui/button";
import { SelectItem } from "@/components/ui/select";
import { StudentSchema } from "@/lib/schemas";
import {
  useGetCohortsQuery,
  useCreateUserMutation,
} from "@/redux/features/api/apiSlice";
import { Cohort } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";

export default function CreateStudentPage() {
  const router = useRouter();
  
  const { data: cohorts, isLoading: cohortsLoading } = useGetCohortsQuery({});
  const [createUser, { isLoading: isCreating }] = useCreateUserMutation();

  const form = useForm<z.infer<typeof StudentSchema>>({
    resolver: zodResolver(StudentSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      cohortId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof StudentSchema>) => {
    try {
      const nameParts = values.name.split(" ");
      const avatarInitials = nameParts.length > 1 
        ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
        : values.name.substring(0, 2).toUpperCase();

      const newStudent = {
        name: values.name,
        email: values.email,
        password: values.password,
        role: "student",
        cohortId: Number(values.cohortId),
        avatarInitials,
        enrolledDate: new Date().toISOString()
      };

      await createUser(newStudent).unwrap();
      
      toast.success("Student created successfully!");
      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Failed to create student. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Student</h1>
        <p className="text-muted-foreground mt-2">
          Add a new student and enroll them in a cohort.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              label="Full Name"
              placeholder="e.g. Ada Okafor"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="e.g. ada@academy.com"
              type="email"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter password"
              type="password"
            />

            {cohortsLoading ? (
              <div className="space-y-2">
                <p className="text-sm font-medium">Cohort</p>
                <Skeleton className="h-10 w-full" />
              </div>
            ) : (
              <CustomFormField
                fieldType={FormFieldType.SELECT}
                control={form.control}
                name="cohortId"
                label="Select Cohort"
                variant="w-full"
                placeholder="Choose a cohort"
              >
                {cohorts?.map((cohort: Cohort) => (
                  <SelectItem key={cohort.id} value={String(cohort.id)}>
                    {cohort.name}
                  </SelectItem>
                ))}
              </CustomFormField>
            )}

            <div className="flex w-full gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.back()}
                disabled={isCreating}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isCreating || cohortsLoading}
              >
                {isCreating ? "Creating Student..." : "Create Student"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
