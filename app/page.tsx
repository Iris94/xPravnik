import Image from "next/image"
import { Hero, DocumentChoice } from "@/components"

export default function Home() {
  return (
    <main className="flex items-center flex-col overflow-x-hidden">
      <Hero />
      <DocumentChoice />
    </main>
  )
}

