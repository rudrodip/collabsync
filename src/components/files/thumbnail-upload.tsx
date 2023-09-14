"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setThumbnail, clearThumbnail } from "@/redux/slices/videoSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const ThumbnailUploader: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const { thumbnail, thumbnail_url } = useAppSelector((state) => state.videoSlice);
  const dispatch = useAppDispatch();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);

    // Filter and store only video files (you can customize the accepted file types)
    const thumbnailImage = files.filter((file) => file.type.startsWith("image/"));

    // Allow only the first video file if multiple files are dropped
    if (thumbnailImage.length > 0) {
      dispatch(setThumbnail(thumbnailImage[0]));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      // Filter and store only the first video file if multiple files are selected
      const thumbnailImage = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      );

      if (thumbnailImage.length > 0) {
        dispatch(setThumbnail(thumbnailImage[0]));
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  return (
    <div className="p-3 lg:p-10 border-2 rounded-lg h-full flex flex-col justify-between items-center">
      <div
        className={`rounded-md flex flex-col justify-center items-center font-heading text-lg lg:text-2xl h-full ${
          dragging ? "bg-primary" : ""
        }`}
        onDrop={handleFileDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {!thumbnail_url ? (
          <div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer block text-center p-5 rounded-md bg-accent"
            >
              Drag and drop thumbnail here or click to select
            </label>
          </div>
        ) : (
          <Image 
            src={thumbnail_url}
            alt="Thumbnail"
            width={1980}
            height={1080}
          />
        )}
      </div>
      {thumbnail_url && <Button 
        onClick={(e) => {
          e.preventDefault()
          dispatch(clearThumbnail())
        }}
        className="inline-block"
      >
        Remove Image
      </Button>}
    </div>
  );
};