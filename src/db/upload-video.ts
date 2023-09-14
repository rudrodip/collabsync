import { type metadata } from '@/types/db';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosProgressEvent } from 'axios';
import { env } from '@env.mjs';

export async function uploadFile(
  uploaderId: string,
  workspaceId: string,
  metadata: metadata,
  video: File,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
  thumbnail: File | null,
): Promise<string | null> {
  try {
    const formData = new FormData();
    formData.append('uploaderId', uploaderId);
    formData.append('workspaceId', workspaceId);
    formData.append('metadata', JSON.stringify(metadata));
    formData.append('video', video);
    thumbnail && formData.append('thumbnail', thumbnail);

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress, // Attach progress callback
    };

    const response: AxiosResponse = await axios.post(
      `${env.NEXT_PUBLIC_BACKEND_API_URL}/video/upload`,
      formData,
      config // Include the config with progress callback
    );

    if (response.status === 200) {
      return response.data.message;
    } else {
      return null;
    }
  } catch (error) {
    console.error('File upload error:', error);
    return null;
  }
}