import PhotoDetails from "@/app/components/PhotoDetails";

export default function PhotoId({ params: { id, localid } }) {
  return <PhotoDetails id={id} local={localid} />;
}
