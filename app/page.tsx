import Image from "next/image"
import { Hero, DocumentChoice, Tutorial } from "@/components"

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden">
      <Hero />
      <Tutorial />
      <DocumentChoice />
    </main>
  )
}

