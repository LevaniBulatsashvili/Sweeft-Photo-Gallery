import type { IPhoto } from "../../../interfaces/photo.interface";
import Modal from "../../../components/ui/Modal";
import useFetchPhotoStatistics from "../hooks/useFetchPhotoStatistics";
import ErrorBoundary from "../../../components/fallback/ErrorBoundary";

interface IPhotoModal {
  photo: IPhoto;
  onClose: () => void;
}

const PhotoModal = ({ photo, onClose }: IPhotoModal) => {
  const { data, isLoading, error } = useFetchPhotoStatistics(photo.id);

  return (
    <ErrorBoundary error={error}>
      <Modal isOpen={true} onClose={onClose}>
        <div className="w-full aspect-[16/9]">
          <img
            src={photo.urls.regular}
            alt={photo.description || "Unsplash Photo"}
            className="w-full h-full object-cover rounded-t-lg"
          />
        </div>

        <div className="p-6 space-y-3 text-gray-800 text-sm sm:text-base">
          <p>
            <strong>Description:</strong>{" "}
            {photo.description || photo.alt_description || "N/A"}
          </p>
          <p>
            <strong>Likes:</strong> ❤️ {photo.likes}
          </p>

          {!isLoading && data && (
            <>
              <p>
                <strong>Downloads:</strong> {data.downloads.total}
              </p>
              <p>
                <strong>Views:</strong> {data.views.total}
              </p>
            </>
          )}

          <p>
            <strong>Photographer:</strong> {photo.user.name}
          </p>
        </div>
      </Modal>
    </ErrorBoundary>
  );
};

export default PhotoModal;
