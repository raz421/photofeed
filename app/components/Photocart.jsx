import Image from "next/image";
import Link from "next/link";

export default function PhotoCart({ photo }) {
  return (
    <Link href={`/photos/${photo.id}`} className="group">
      <Image width={700} height={700} src={photo.url} alt={photo.title} />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
}
