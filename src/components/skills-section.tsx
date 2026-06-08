import { skillCategories } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
      {skillCategories.map((cat) => (
        <Card
          key={cat.title}
          className="rounded-none border-0 bg-card transition-colors hover:bg-accent/40"
        >
          <CardHeader className="pb-4">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-mono text-sm font-medium tracking-tight">
                {cat.title}
              </h3>
              <span className="font-mono text-xs text-muted-foreground">
                {String(cat.skills.length).padStart(2, "0")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {cat.description}
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
