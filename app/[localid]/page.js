import PhotoList from "../components/PhotoList";

export default async function Home() {
  // const dictionaries = await getDictionary(localid);
  // console.log(dictionaries);
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();
  // console.log(photos);
  return <PhotoList photos={photos} />;
}
