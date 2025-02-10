import { getPhotos } from "@/lib/images";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getPhotos();
  return NextResponse.json(data);
}
