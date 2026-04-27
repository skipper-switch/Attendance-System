"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";
import { useGetAttendanceQuery } from "@/redux/features/api/apiSlice";
import { AttendanceRecord } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function StudentDashboardPage() {
  const router = useRouter();
  const user = getUser();

  useEffect(() => {
    if (!user || user.role !== "student") {
      router.push("/sign-in");
    }
  }, [user, router]);

  const { data: attendance, isLoading, error } = useGetAttendanceQuery();

  const studentAttendance = attendance?.filter((record: AttendanceRecord) => record.studentId === user?.id) || [];

  if (!user || user.role !== "student") {
    return null; // Will redirect
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Student Dashboard - My Attendance</h1>
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
        <h1 className="text-2xl font-bold">Student Dashboard - My Attendance</h1>
        <p className="text-red-500">Error loading attendance: {JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Dashboard - My Attendance</h1>
        <p className="text-muted-foreground">
          View your attendance records
        </p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Check-in Time</TableHead>
              <TableHead>Note</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentAttendance.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-8">
                  No attendance records found
                </TableCell>
              </TableRow>
            ) : (
              studentAttendance.map((record: AttendanceRecord) => (
                <TableRow key={record.id}>
                  <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={
                      record.status === "present" ? "default" :
                      record.status === "late" ? "secondary" :
                      record.status === "excused" ? "outline" : "destructive"
                    }>
                      {record.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {record.checkInTime ? new Date(record.checkInTime).toLocaleTimeString() : "N/A"}
                  </TableCell>
                  <TableCell>{record.note || "N/A"}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}