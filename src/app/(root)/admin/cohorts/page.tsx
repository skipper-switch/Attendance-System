"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/lib/auth";
import { useGetCohortsQuery } from "@/redux/features/api/apiSlice";
import { Cohort } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function CohortsPage() {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/sign-in");
    }
  }, [user, router]);

  const { data: cohorts, isLoading, error } = useGetCohortsQuery();

  if (!user || user.role !== "admin") {
    return null;
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Cohorts</h1>
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-12 w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Cohorts</h1>
        <p className="text-red-500">Error loading cohorts: {JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Cohorts</h1>
          <p className="text-muted-foreground">
            Manage all active cohorts
          </p>
        </div>
        <Link href="/admin/cohorts/create">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Create Cohort
          </Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Start Date</TableHead>
              <TableHead>End Date</TableHead>
              <TableHead>Instructor</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!cohorts || cohorts.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No cohorts found
                </TableCell>
              </TableRow>
            ) : (
              cohorts.map((cohort: Cohort) => (
                <TableRow key={cohort.id}>
                  <TableCell>{cohort.id}</TableCell>
                  <TableCell className="font-medium">{cohort.name}</TableCell>
                  <TableCell>{new Date(cohort.startDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(cohort.endDate).toLocaleDateString()}</TableCell>
                  <TableCell>{cohort.instructor}</TableCell>
                  <TableCell className="max-w-sm truncate">{cohort.description}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}