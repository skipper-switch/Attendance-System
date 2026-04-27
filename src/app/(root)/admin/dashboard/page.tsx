"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { getUser } from "@/lib/auth";
import { useGetUsersQuery, useGetCohortsQuery } from "@/redux/features/api/apiSlice";
import { User, Cohort } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Users, BookOpen } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "admin") {
      router.push("/sign-in");
    }
  }, [user, router]);

  const { data: users, isLoading: usersLoading } = useGetUsersQuery({});
  const { data: cohorts, isLoading: cohortsLoading } = useGetCohortsQuery({});

  const students = users?.filter((u: User) => u.role === "student") || [];
  const totalStudents = students.length;
  const totalCohorts = cohorts?.length || 0;

  if (!user || user.role !== "admin") {
    return null;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Admin Overview</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back, {user?.name}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Students</p>
              <p className="text-3xl font-bold mt-2">{totalStudents}</p>
            </div>
            <Users className="h-10 w-10 text-blue-500" />
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Cohorts</p>
              <p className="text-3xl font-bold mt-2">{totalCohorts}</p>
            </div>
            <BookOpen className="h-10 w-10 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Cohorts Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Cohorts</h2>
          <Link href="/admin/cohorts/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              + Create Cohort
            </Button>
          </Link>
        </div>

        {cohortsLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : (
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
                      No cohorts yet. Create your first cohort to get started.
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
        )}

        <Link href="/admin/cohorts" className="block">
          <Button variant="outline" className="w-full">
            View All Cohorts
          </Button>
        </Link>
      </div>

      {/* Students Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Students</h2>
          <Link href="/admin/students/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              + Create Student
            </Button>
          </Link>
        </div>
        {usersLoading ? (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Cohort</TableHead>
                  <TableHead>Enrolled Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      No students enrolled yet
                    </TableCell>
                  </TableRow>
                ) : (
                  students.map((student: User) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{student.role}</Badge>
                      </TableCell>
                      <TableCell>{student.cohortId || "N/A"}</TableCell>
                      <TableCell>
                        {student.enrolledDate
                          ? new Date(student.enrolledDate).toLocaleDateString()
                          : "N/A"}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}