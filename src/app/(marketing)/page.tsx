import { LandingHeader } from "@/components/header/landing-header"
import { FeatureOverview } from "@/components/header/feature-card"
import { Guide } from "@/components/header/guide"
import { StudioIntegration } from "@/components/header/studio"

export default function Home() {
  return (
    <main className="w-[85vw]">
      <LandingHeader />
      <FeatureOverview />
      <Guide />
      <StudioIntegration />
    </main>
  )
}