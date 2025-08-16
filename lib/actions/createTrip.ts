"use server";

import { auth } from "@/auth";
import { prisma } from "../prisma";
import { redirect } from "next/navigation";

export async function createTrip(formData: FormData) {
  // Function to create a new trip

  const session = await auth(); // Get the current user session
  if (!session || !session.user?.id) {
    // Ensure user is authenticated
    throw new Error("Unauthorized: You must be logged in to create a trip.");
  }

  const title = formData.get("title")?.toString(); // Get the trip title from form data
  const description = formData.get("description")?.toString();
  const startDateStr = formData.get("startDate")?.toString();
  const endDateStr = formData.get("endDate")?.toString();

  if (!title || !description || !startDateStr || !endDateStr) {
    // Validate that all fields are provided and not empty
    throw new Error("All fields are required");
  }

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  if (startDate >= endDate) {
    // Validate that start date is before end date
    throw new Error("Start date must be before end date");
  }

  await prisma.trip.create({
    data: {
      title,
      description,
      startDate,
      endDate,
      userId: session.user.id, // Assuming session contains user info
    },
  });

  redirect("/trips"); // Redirect to the trips page after creation
}
