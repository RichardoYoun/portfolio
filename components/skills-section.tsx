import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import type { SkillCategory } from "@/lib/data"

interface SkillsSectionProps {
  categories: SkillCategory[]
}

export default function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Expertise
        </h2>

        <Tabs defaultValue={categories[0].id} className="w-full">
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <Card key={skill.name} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <Badge variant="outline">{skill.level}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Progress value={skill.proficiency} className="h-2 w-full" />
                        <div className="flex flex-wrap gap-2">
                          {skill.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
