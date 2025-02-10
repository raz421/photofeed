import Modal from "@/app/components/Modal";
import PhotoDetails from "@/app/components/PhotoDetails";

export default function InterceptPhoto({ params: { id, localid } }) {
  console.log("Run this code extrmely");
  return (
    <Modal>
      <PhotoDetails id={id} local={localid} />
    </Modal>
  );
}
