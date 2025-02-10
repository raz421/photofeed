import { getPhotoById } from "@/lib/images";

export async function GET(_request, { params }) {
  const id = params.photoid;

  const photo = await getPhotoById(id);
  console.log(photo);
  return Response.json(photo);
}
