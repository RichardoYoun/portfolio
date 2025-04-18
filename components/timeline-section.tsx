import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface TimelineItem {
  id: string
  title: string
  role?: string
  description: string
  date: string
  tags: string[]
  image?: string
  links?: {
    demo?: string
    github?: string
    website?: string
  }
}

interface TimelineSectionProps {
  items: TimelineItem[]
}

export default function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

      <div className="space-y-12 md:space-y-24">
        {items.map((item, index) => (
          <div key={item.id} className="relative">
            {/* Timeline dot */}
            <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-background bg-primary" />

            <div
              className={cn(
                "grid gap-8",
                index % 2 === 0 ? "md:grid-cols-[1fr,0.2fr,1fr]" : "md:grid-cols-[1fr,0.2fr,1fr] md:[direction:rtl]",
              )}
            >
              {/* Date */}
              <div
                className={cn(
                  "flex items-center justify-center md:justify-end",
                  index % 2 === 0 ? "md:text-right" : "md:text-left md:[direction:ltr]",
                )}
              >
                <div className="rounded-lg bg-muted px-4 py-2 text-sm font-medium">{item.date}</div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block" />

              {/* Card */}
              <Card className={cn("group transition-all hover:shadow-md", index % 2 !== 0 && "md:[direction:ltr]")}>
                {item.image && (
                  <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  {item.role && <CardDescription>{item.role}</CardDescription>}
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {item.links && (
                  <CardFooter className="flex gap-2">
                    {item.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={item.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    {item.links.github && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={item.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {item.links.website && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={item.links.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Website
                        </Link>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
