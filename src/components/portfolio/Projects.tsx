import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Admin Dashboard",
    description:
      "A comprehensive admin dashboard built as a team project. Features include data visualization with Chart.js, user management, and responsive layout with smooth navigation.",
    technologies: ["React", "Axios", "Chart.js", "Tailwind CSS"],
    type: "Team Project",
    github: "https://github.com/fatmamostafa42/courses-project.git",
    demo: null,
    image: "/images/admin.PNG",
  },

  {
    title: "E-Commerce Application",
    description:
      "A feature-rich e-commerce platform with product listings, shopping cart, and checkout functionality. Implements state management and integrates with external APIs.",
    technologies: ["React", "Redux", "REST API", "CSS"],
    type: "Personal Project",
    github: "https://github.com/fatmamostafa42/React.js-project.git",
    demo: null,
    image: "/images/ecommerce.PNG",
  },

  {
    title: "Online Courses Website",
    description:
      "A full-stack web application for online learning. Users can browse courses, enroll, and track their progress. Built with modern technologies and integrated with Supabase for backend services.",
    technologies: ["React.js", "Tailwind CSS", "Supabase"],
    type: "Personal Project",
    github: "https://github.com/fatmamostafa42/dr-bassem.git",
    demo: null,
    image: "/images/courses.PNG",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-soft-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 gradient-bg rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="group flex flex-col hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-0 shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
               {/* Project Image */}
<div className="aspect-video overflow-hidden relative">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
</div>


                <CardContent className="flex-1 p-6">
                  {/* Project Type Badge */}
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {project.type}
                  </Badge>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 gap-3">
                  <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 gap-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href="https://github.com/fatmamostafa42"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
