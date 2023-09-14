import { GuideConfig } from "@/types"
import { FloatingCard } from "@/components/guide/floating-cards/floating-card"

export const guideConfig: GuideConfig = {
  steps: [
    {
      id: 1,
      title: 'Authorize Your Google Account',
      desc: 'To continue with CollabSync, you need to authorize Google with necessary permissions to allow it to upload and edit videos on your channel, ensuring seamless integration.',
      floating_card: FloatingCard
    },
    {
      id: 2,
      title: 'Create Your Workspace',
      desc: 'Set up your collaborative workspace, where you and your team can work together on content creation, editing, and management.',
      floating_card: FloatingCard
    },
    {
      id: 3,
      title: 'Invite Editors',
      desc: 'Invite editors to your workspace, enabling real-time collaboration. Simplify the process of content creation by working together seamlessly.',
      floating_card: FloatingCard
    },
    {
      id: 4,
      title: 'Editors Upload Videos with Metadata',
      desc: 'Editors can upload videos with complete metadata, streamlining the content creation process. No more manual data entry; everything is organized.',
      floating_card: FloatingCard
    },
    {
      id: 5,
      title: 'Review and Approve Videos',
      desc: 'You review and approve videos within CollabSync. Once approved, they are automatically uploaded to your YouTube channel. No more manual uploading.',
      floating_card: FloatingCard
    },
  ]
}