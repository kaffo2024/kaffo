"use client";
import { Modal } from "antd";
import {
  ServicesProjectsType,
  ProjectGalleryType,
} from "@/src/types/data-type";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  FiX,
  FiChevronRight,
  FiChevronLeft,
  FiMaximize2,
  FiMinimize2,
} from "react-icons/fi";
import { HiOutlinePhotograph } from "react-icons/hi";

interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  project: ServicesProjectsType | null;
}

function ImageGallery({ isOpen, onClose, project }: ImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Reset when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [project]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          nextImage();
          break;
        case "ArrowRight":
          prevImage();
          break;
        case "Escape":
          if (isFullscreen) {
            setIsFullscreen(false);
          } else {
            onClose();
          }
          break;
        case "f":
        case "F":
          if (e.ctrlKey || e.metaKey) {
            setIsFullscreen(!isFullscreen);
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isFullscreen, onClose]);

  const images: ProjectGalleryType[] = project?.gallery || [];

  const nextImage = useCallback(() => {
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setIsLoading(true);
    }
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length > 1) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + images.length) % images.length
      );
      setIsLoading(true);
    }
  }, [images.length]);

  const selectImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
    setIsLoading(true);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!project) return null;

  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={undefined} // Remove width prop since we'll use Tailwind classes
      className={
        isFullscreen
          ? "!h-[98vh] w-full"
          : ` bg-black rounded-lg overflow-hidden
            w-[90vw] sm:w-[85vw] md:w-[90vw] xl:w-[85vw]
            h-[65vh] sm:h-[85vh] md:h-[95vh]
      `
      }
      mask={true}
      centered
      wrapClassName={isFullscreen ? "!inset-0" : ""}
      styles={{
        body: {
          padding: 0,
          margin: 0,
          // Use Tailwind for height in className instead
          display: "flex",
          flexDirection: "column",
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          overflow: "hidden",
        },
        container: {
          margin: 0,
          padding: 0,
        },
        mask: {
          backgroundColor: "rgba(0, 0, 0, 0.9)",
        },
      }}
      closeIcon={null}
    >
      <div
        className={`flex p-0 flex-col rounded-lg overflow-hidden ${
          isFullscreen
            ? "!h-[98vh] w-full"
            : ` bg-black
            w-[90vw] sm:w-[85vw] md:w-[90vw] xl:w-[85vw]
            h-[65vh] sm:h-[85vh] md:h-[95vh]
      `
        }`}
      >
        <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-b from-black/80 to-transparent z-50 sticky top-0">
          <div className="text-white flex-1 min-w-0 mr-2">
            <h3 className="text-sm sm:text-lg font-semibold truncate">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="p-1.5 sm:p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title={isFullscreen ? "تصغير" : "تكبير"}
              aria-label={isFullscreen ? "تصغير" : "تكبير"}
            >
              {isFullscreen ? (
                <FiMinimize2 className="text-lg sm:text-xl" />
              ) : (
                <FiMaximize2 className="text-lg sm:text-xl" />
              )}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              title="إغلاق"
              aria-label="إغلاق"
            >
              <FiX className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 relative flex flex-col items-center justify-center p-2 sm:p-4 min-h-0">
          {images.length === 0 ? (
            <div className="text-center text-white/60 px-4">
              <HiOutlinePhotograph className="text-4xl sm:text-6xl mx-auto mb-3 sm:mb-4 opacity-50" />
              <p className="text-base sm:text-lg">
                لا توجد صور متاحة لهذا المشروع
              </p>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-white/40">
                {project.title}
              </p>
            </div>
          ) : (
            <>
              {/* Main Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-calypso-500/30 border-t-calypso-500 rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Current Image */}
                {currentImage && (
                  <div
                    className={`relative w-full h-full ${
                      isLoading ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300`}
                  >
                    <Image
                      src={currentImage.img}
                      alt={`${project.title} - الصورة ${currentImageIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, 80vw"
                      onLoad={handleImageLoad}
                      priority
                    />
                  </div>
                )}

                {/* Navigation Arrows - Enhanced for Mobile */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={nextImage}
                      className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 sm:p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                      disabled={!hasMultipleImages}
                      aria-label="الصورة التالية"
                    >
                      <FiChevronLeft className="text-xl sm:text-2xl" />
                    </button>
                    <button
                      onClick={prevImage}
                      className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 p-1.5 sm:p-3 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation active:scale-95"
                      disabled={!hasMultipleImages}
                      aria-label="الصورة السابقة"
                    >
                      <FiChevronRight className="text-xl sm:text-2xl" />
                    </button>
                  </>
                )}
              </div>

              {/* Image Counter - Better for Mobile */}
              {hasMultipleImages && (
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-30 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm min-w-[80px] text-center">
                  <span className="font-medium">{currentImageIndex + 1}</span>
                  <span className="mx-1 sm:mx-2 text-white/60">من</span>
                  <span className="font-medium">{images.length}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* Thumbnails Section */}
        {images.length > 1 && (
          <div className="p-2 sm:p-4 bg-gradient-to-t from-black/90 to-black/70 border-t border-white/10">
            <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 px-1 scrollbar-thin">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => selectImage(index)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 touch-manipulation active:scale-95 ${
                    currentImageIndex === index
                      ? "border-calypso-500 ring-1 sm:ring-2 ring-calypso-500/50 shadow-md sm:shadow-lg"
                      : "border-transparent hover:border-white/30 hover:scale-105"
                  }`}
                  title={`الصورة ${index + 1}`}
                  aria-label={`الصورة ${index + 1}`}
                  aria-current={currentImageIndex === index ? "true" : "false"}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 48px, 64px"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Project Info */}
        <div className="p-3 sm:p-4 bg-black/80 border-t border-white/10">
          <div className="text-white text-xs sm:text-sm">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2">
              <span className="font-semibold truncate mr-2">
                {project.title}
              </span>
              <span className="text-white/60 text-xs whitespace-nowrap">
                {images.length} صورة
              </span>
            </div>
            <p className="text-white/70 line-clamp-2 sm:line-clamp-3 leading-relaxed">
              {project.overview}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageGallery;
