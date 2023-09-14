import { FeaturesConfig } from "@/types";
import { Text, BrainCircuit, Store, MessageSquare, Database, Video, Brain, ListFilter } from "lucide-react"

export const studioConfig: FeaturesConfig = {
  features: [
    {
      icon: BrainCircuit,
      name: 'AI Model Fine-Tuning',
      desc: 'Fine-tune your AI model to align perfectly with your channel\'s unique style and audience preferences. Personalize the AI\'s recommendations for maximum impact.'
    },
    {
      icon: Text,
      name: 'Title Generation',
      desc: 'Supercharge your content with AI-generated video titles that grab attention and boost discoverability. No more struggling to come up with compelling titles.'
    },
    {
      icon: Database,
      name: 'Generous Video Storage',
      desc: 'Enjoy up to 5GB of video storage per workspace. Studio Pro ensures you have ample space to store and manage your content seamlessly.'
    },
    {
      icon: MessageSquare,
      name: 'WhatsApp Notifications',
      desc: 'Receive instant WhatsApp notifications for important updates and activities within your workspace. Stay connected and informed, no matter where you are.'
    },
    {
      icon: Store,
      name: 'Persistent Video Retention',
      desc: 'Videos uploaded to Studio Pro will remain in your workspace as long as you want, ensuring you never lose valuable content unless you decide to delete it.'
    },
    {
      icon: Video,
      name: 'Next Video Topics',
      desc: 'Stay ahead of the curve by receiving AI-driven suggestions for your next video topics. Keep your content fresh and engaging to captivate your audience.'
    },
    {
      icon: ListFilter,
      name: 'Content Optimization',
      desc: 'Optimize your content strategy with data-driven suggestions. Studio Pro helps you make data-backed decisions to continuously improve your channel.'
    },
    {
      icon: Brain,
      name: 'Premium AI Assistance',
      desc: 'Access the power of premium AI assistance designed exclusively for your channel. Studio Pro elevates your content creation game to new heights.'
    },
  ]
};
