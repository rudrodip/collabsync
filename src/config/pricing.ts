import { PriceConfigs } from "@/types";

export const pricing: PriceConfigs = {
  free: {
    name: 'Free',
    description: 'Get started with essential features for small-scale content creation and collaboration.',
    features: [
      'Video Workspace (2GB)',
      'Collaborative Editing',
      'Basic Analytics',
    ],
    price: '$0/month',
  },
  video_workspace: {
    name: 'Video Workspace',
    description: 'Unlock enhanced video workspace features for more extensive content projects.',
    features: [
      'Video Workspace (5GB)',
      'Collaborative Editing',
      'Advanced Analytics',
    ],
    price: '$19/month',
  },
  ai_titles: {
    name: 'AI Titles',
    description: 'Harness AI-powered title suggestions to boost your content discoverability.',
    features: [
      'AI-Generated Title Suggestions',
      'Video Workspace (5GB)',
      'Collaborative Editing',
      'Advanced Analytics',
    ],
    price: '$49/month',
  },
  studio_pro: {
    name: 'Studio Pro',
    description: 'Unleash the full potential of CollabSync with custom AI models and premium features.',
    features: [
      'Fine Tuned AI Model',
      'AI-Generated Title Suggestions',
      'Video Workspace (5GB)',
      'Collaborative Editing',
      'Advanced Analytics',
      'Enhanced Access Control',
      'WhatsApp Notifications',
      'Persistent Video Retention'
    ],
    price: '$79/month',
  },
};
