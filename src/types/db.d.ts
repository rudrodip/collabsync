export type videos = string[]

export type workspace = {
  creatorId: string
  editors: number[]
  name: string
  pending_videos: videos
  uploaded_videos: videos
}

export type workspaces = string[]

export type UserData = {
  id: string
  email: string
  access_token: string
  refresh_token: string
  expires: number
  roles: {
    creator: boolean
    editor: boolean
  }
  workspaces: workspaces
}
