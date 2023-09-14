"use client";

import { WorkSpaceCard } from "./workspace-card";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchWorkspaces } from "@/redux/slices/workspaceSlice";
import { CreateWorkspace } from "./create-workspace-button";
import { useEffect } from "react";

type WorkspaceGalleryProps = {
  userId: string;
};

export const WorkspaceGallery = ({ userId }: WorkspaceGalleryProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, data } = useAppSelector(
    (state) => state.workspaceSlice
  );

  useEffect(() => {
    if (data.workspaces.length === 0) {
      dispatch(fetchWorkspaces(userId));
    }
  }, [dispatch, userId, data]);

  return (
    <div className="">
      <h1 className="font-heading text-2xl lg:text-4xl">Your Workspaces</h1>
      {isLoading ? "Loading..." : ""}
      {isError ? "Error loading workspaces" : ""}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
        {data?.workspaces.map((w, index) => {
          return (
            <WorkSpaceCard
              key={index.toString()}
              id={w.id}
              creator={w.creator}
              name={w.name}
              pending={w.pending_videos.length}
              uploaded={w.uploaded_videos.length}
            />
          );
        })}
        <CreateWorkspace id={userId} />
      </div>
    </div>
  );
};
