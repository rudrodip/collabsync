"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setUploadedVideo, clearUploadedVideo } from "@/redux/slices/videoSlice";
import { Button } from "@/components/ui/button";

const VideoUploader: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const { video, url } = useAppSelector((state) => state.videoSlice);
  const dispatch = useAppDispatch();

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);

    const files = Array.from(e.dataTransfer.files);

    // Filter and store only video files (you can customize the accepted file types)
    const videoFiles = files.filter((file) => file.type.startsWith("video/"));

    // Allow only the first video file if multiple files are dropped
    if (videoFiles.length > 0) {
      dispatch(setUploadedVideo(videoFiles[0]));
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      // Filter and store only the first video file if multiple files are selected
      const videoFiles = Array.from(files).filter((file) =>
        file.type.startsWith("video/")
      );

      if (videoFiles.length > 0) {
        dispatch(setUploadedVideo(videoFiles[0]));
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
        {!url ? (
          <div>
            <input
              type="file"
              accept="video/*"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              id="file-input"
            />
            <label
              htmlFor="file-input"
              className="cursor-pointer block text-center p-5 rounded-md bg-accent"
            >
              Drag and drop video files here or click to select
            </label>
          </div>
        ) : (
          <video
            key={url}
            controls
            width="auto"
            autoPlay={false}
            className="rounded-lg"
          >
            <source src={url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      {url && <Button 
        onClick={(e) => {
          e.preventDefault()
          dispatch(clearUploadedVideo())
        }}
        className="inline-block"
      >
        Remove Video
      </Button>}
    </div>
  );
};

export default VideoUploader;
