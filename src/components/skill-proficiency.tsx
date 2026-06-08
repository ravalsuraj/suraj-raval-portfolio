import { skillProficiencies } from "@/lib/data";

export function SkillProficiency() {
  return (
    <div className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
      {skillProficiencies.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="font-mono text-xs text-muted-foreground">
              {skill.level}%
            </span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-foreground/80"
              style={{ width: `${skill.level}%` }}
              role="progressbar"
              aria-valuenow={skill.level}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={skill.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
