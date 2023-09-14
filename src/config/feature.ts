import { FeaturesConfig } from "@/types";
import { Github, Image, Merge, Target, Fingerprint, Braces, Blocks, BrainCog, BrainCircuit } from "lucide-react"

export const featureConfig: FeaturesConfig = {
  features: [
    {
      icon: Github,
      name: 'Open Source',
      desc: 'CollabSync is the go-to platform for connecting creators and editors, streamlining content creation and fostering collaboration in the digital world'
    },
    {
      icon: Fingerprint,
      name: 'Hassle-Free Onboarding',
      desc: 'Creators can effortlessly sign up using their Google accounts, granting instant access to their YouTube channels. No more cumbersome setup processes.'
    },
    {
      icon: Image,
      name: 'Simplified Content Sharing',
      desc: 'Easily share your content with collaborators, making teamwork effortless.'
    },
    {
      icon: Target,
      name: 'Collaborative Workspaces',
      desc: 'Invite editors to your workspaces, enabling real-time collaboration. Say goodbye to clunky email exchanges and outdated workflows.'
    },
    {
      icon: Merge,
      name: 'Streamlined Video Upload',
      desc: 'Editors can upload videos complete with metadata. Once approved by YouTube, our server takes care of the rest. No more downloading and re-uploading; you\'re free to focus on what you do best.'
    },
    {
      icon: BrainCircuit,
      name: 'AI-Driven Title Suggestions',
      desc: 'Harness the power of AI with OpenAI\'s GPT-3.5 Turbo model. CollabSync analyzes top-performing videos to provide compelling title suggestions, boosting your content\'s discoverability and engagement.'
    },
    {
      icon: BrainCog,
      name: 'Tailored AI Models',
      desc: 'Tailor AI to your unique channel. Train your own AI model, aligning it with your specific audience and content style. It\'s your secret weapon for content success.'
    },
    {
      icon: Blocks,
      name: 'Seamless Tool Integration',
      desc: 'Connect CollabSync with your favorite tools for a cohesive workflow.'
    },
  ]
};
