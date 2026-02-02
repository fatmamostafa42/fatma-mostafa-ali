import { 
  Code, 
  Palette, 
  Database, 
  Wrench,
  FileCode,
  Layout,
  Smartphone,
  GitBranch
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript","Java"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Frameworks & Libraries",
    icon: Layout,
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "Redux", "Selenium", "TestNG","Cucumber"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "IntelliJ IDEA","JIRA", "TestRail"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: ["Supabase", "Strapi", "REST APIs", "Axios"],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const additionalSkills = [
  { name: "Responsive Design", icon: Smartphone },
  { name: "Clean Code", icon: FileCode },
  { name: "UI/UX Principles", icon: Palette },
  { name: "Version Control", icon: GitBranch },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building & test modern web applications
            </p>
          </div>

          {/* Skill Categories Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-0 shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl ${category.bgColor} ${category.color} mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card text-sm font-medium text-foreground"
              >
                <skill.icon className="h-4 w-4 text-primary" />
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
