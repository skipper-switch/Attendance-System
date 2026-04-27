"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";
import { useCreateCohortMutation } from "@/redux/features/api/apiSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CohortSchema } from "@/lib/schemas";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "@/components/shared/CustomFormField";
import SubmitButton from "@/components/shared/SubmitButton";
import ToastNotification from "@/components/shared/ToastNotification";

export default function CreateCohortPage() {
  const router = useRouter();
  const user = getUser();
  const [createCohort, { isLoading }] = useCreateCohortMutation();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/sign-in");
    }
  }, [user, router]);

  const form = useForm<z.infer<typeof CohortSchema>>({
    resolver: zodResolver(CohortSchema),
    defaultValues: {
      name: "",
      startDate: "",
      endDate: "",
      instructor: "",
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof CohortSchema>) => {
    try {
      await createCohort(values).unwrap();

      ToastNotification({
        title: "Success",
        description: "Cohort created successfully",
        type: "success",
      });

      router.push("/admin/dashboard");
    } catch (error: any) {
      ToastNotification({
        title: "Error",
        description: error?.data?.error || "Unable to create cohort",
        type: "error",
      });
    }
  };

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Cohort</h1>
        <p className="text-muted-foreground">
          Create a new cohort for students
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 rounded-md border p-6">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Cohort Name"
            placeholder="e.g. Frontend Engineering - Cohort 3"
            variant="h-[40px] w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="startDate"
              label="Start Date"
              type="date"
              variant="h-[40px] w-full"
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="endDate"
              label="End Date"
              type="date"
              variant="h-[40px] w-full"
            />
          </div>

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="instructor"
            label="Instructor Name"
            placeholder="e.g. Mr. Ade Coker"
            variant="h-[40px] w-full"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="description"
            label="Description"
            placeholder="e.g. Full-stack frontend engineering with React, Next.js and TypeScript"
            variant="h-[40px] w-full"
          />

          <SubmitButton
            isLoading={isLoading}
            loadingText="Creating..."
            className="w-full h-[50px] bg-blue-600"
          >
            Create Cohort
          </SubmitButton>
        </form>
      </Form>
    </div>
  );
}