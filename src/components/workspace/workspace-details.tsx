"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { fetchWorkspaces } from "@/redux/slices/workspaceSlice";
import { fetchChannel } from "@/redux/slices/channelSlice";
import { useEffect } from "react";
import { ChannelCard } from "./channel-card";
import { WorkSpaceCard } from "./workspace-card";

type WorkspaceDetailsProps = {
  userId: string;
  workspaceId: string;
};

export default function WorkspaceDetails({
  userId,
  workspaceId,
}: WorkspaceDetailsProps) {
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useAppSelector(
    (state) => state.workspaceSlice
  );
  const { channelData } = useAppSelector((state) => state.channelSlice);

  useEffect(() => {
    dispatch(fetchChannel({ workspaceId: workspaceId, userId: userId }));
    if (data.workspaces.length === 0) {
      dispatch(fetchWorkspaces(userId));
    }
  }, [dispatch, userId, workspaceId]);

  const workspace = data.workspaces.find((w) => w.id === workspaceId);

  return (
    <div className=" hidden lg:flex flex-col justify-center items-center space-y-10">
      {channelData?.data && (
        <div className="w-full">
          <ChannelCard
            id={channelData.data.id}
            name={channelData.data.title}
            customUrl={channelData.data.customUrl}
            image={channelData.data.thumbnail}
          />
        </div>
      )}
      <div id="workspace">
        {isLoading && "loading..."}
        {isError && "error loading workspace data"}
        {workspace && (
          <div className="w-full">
            <WorkSpaceCard
              id={workspace.id}
              name={workspace.name}
              creator={workspace.creator}
              pending={workspace.pending_videos.length}
              uploaded={workspace.uploaded_videos.length}
            />
          </div>
        )}
      </div>
    </div>
  );
}
