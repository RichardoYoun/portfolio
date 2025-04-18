import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import TimelineSection from "@/components/timeline-section"
import SkillsSection from "@/components/skills-section"
import { workExperiences, projects, skillCategories } from "@/lib/data"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            JeWan Youn
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="#skills" className="text-sm font-medium hover:underline">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:underline">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline">
              Projects
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/RichardoYoun" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/jewan-youn-410a05215" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:sk0373wj@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">JeWan Youn</h1>
              <p className="text-muted-foreground md:text-xl">
                Full Stack Developer with expertise in building modern web applications. Passionate about creating
                intuitive user experiences and solving complex problems.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://docs.google.com/document/d/1hM6NsxZahzmHIj9QS7kxoPoI7GZ1w0RP/edit?usp=sharing&ouid=100915952741563845312&rtpof=true&sd=true"
                    target="_blank"
                  >
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-background bg-muted">
                <Image src="jewan.png" alt="Profile" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="bg-muted py-12 md:py-24">
          <SkillsSection categories={skillCategories} />
        </section>

        {/* Work Experience & Startups Section */}
        <section id="experience" className="py-12 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience & Startups
            </h2>
            <TimelineSection items={workExperiences} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-muted py-12 md:py-24">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <TimelineSection items={projects} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button asChild>
                  <Link href="mailto:sk0373wj@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link
                    href="https://www.linkedin.com/in/jewan-youn-410a05215/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} JeWan Youn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/RichardoYoun" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/jewan-youn-410a05215/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:sk0373wj@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
