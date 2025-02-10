import PhotoCart from "./Photocart";

export default function PhotoList({ photos }) {
  return (
    <div className="img-grid">
      {photos.map((photo) => (
        <PhotoCart key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
