import { useState } from "react";
import type { IPhoto } from "../../../interfaces/photo.interface";
import PhotoModal from "./PhotoModal";

interface IPhotoCard {
  photo: IPhoto;
}

const PhotoCard = ({ photo }: IPhotoCard) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        onClick={openModal}
        className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-[1.05] hover:shadow-xl cursor-pointer duration-300 w-full max-w-sm"
      >
        <img
          src={photo.urls.small}
          alt={photo.description || "Unsplash Photo"}
          className="w-full h-50 object-cover"
          loading="lazy"
        />

        <div className="p-4 space-y-2">
          <p className="truncate text-sm text-gray-800 line-clamp-2">
            {photo.alt_description}
          </p>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>❤️ {photo.likes}</span>
            <span>{photo.user.name}</span>
          </div>
        </div>
      </div>

      {isModalOpen && <PhotoModal photo={photo} onClose={closeModal} />}
    </>
  );
};

export default PhotoCard;
