export type video = {
  id: string;
  uploader: string;
  workspaceId: string;
  metadata: metadata;
  videoFileName: string;
  thumbnailFileName: string;
};

export type metadata = {
  title: string;
  desc: string;
  privacyStatus: 'public' | 'private';
  tags: string[];
};

export type workspace = {
  id: string;
  creator: string;
  editors: number[];
  name: string;
  pending_videos: video[];
  uploaded_videos: video[];
  channel_id: string;
};

export type workspaces = string[];

export type UserData = {
  id: string;
  email: string;
  access_token: string;
  refresh_token: string;
  expires: number;
  roles: {
    creator: boolean;
    editor: boolean;
  };
  workspaces: workspaces;
};
