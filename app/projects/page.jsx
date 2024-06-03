"use client";

import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
  {
    image: "/work/emotiven.png",
    categories: ["fullstack", "Web App"],
    name: "Emotiven",
    description: "Flask, Tensorflow, Pytorch, BERT, Tailwind CSS",
    link: "/",
    github: "/",
  },
  {
    image: "/work/carval.png",
    categories: ["frontend", "Web App"],
    name: "Carval Apps Landing Page",
    description: "Laravel, HTML, CSS, JavaScript, MySQL, Blade, Bootstrap",
    link: "/",
    github: "/",
  },
  {
    image: "/work/diwa.png",
    categories: ["frontend", "Web App"],
    name: "Diwa Hospital Landing Page",
    description: "Laravel, MySQL, Blade, Bootstrap, Whatsapp API",
    link: "/",
    github: "/",
  },
  {
    image: "/work/admin-carval.png",
    categories: ["fullstack"],
    name: "Carval Admin Dashboard",
    description:
      "Laravel, HTML, CSS, JavaScript, JQuery, MySQL, Blade, Bootstrap",
    link: "/",
    github: "/",
  },
  {
    image: "/work/admin-srifoton.png",
    categories: ["fullstack", "Web App"],
    name: "Srifoton Admin Dashboard",
    description:
      "Laravel, HTML, CSS, JavaScript, JQuery, MySQL, Blade, Bootstrap",
    link: "/",
    github: "/",
  },
  {
    image: "/work/admin-tbms.png",
    categories: ["fullstack", "Web App"],
    name: "TBM Sriwijaya Admin Dashboard",
    description:
      "Laravel, HTML, CSS, JavaScript, JQuery, MySQL, Blade, Bootstrap",
    link: "/",
    github: "/",
  },
  {
    image: "/work/admin-diwa.png",
    categories: ["fullstack", "Web App"],
    name: "Diwa Hospital Admin Dashboard",
    description:
      "Laravel, HTML, CSS, JavaScript, JQuery, MySQL, Blade, Bootstrap, Whatsapp API",
    link: "/",
    github: "/",
  },
  {
    image: "/work/landing-1.png",
    categories: ["frontend"],
    name: "ReactJS Landing Page",
    description: "React JS, Vite, Tailwind CSS, Framer Motion",
    link: "/",
    github: "/",
  },
  {
    image: "/work/portfolio-first.png",
    categories: ["frontend"],
    name: "Portfolio Website v1",
    description: "HTML, CSS, JavaScript",
    link: "/",
    github: "/",
  },
  {
    image: "/work/portfolio-second.png",
    categories: ["frontend"],
    name: "Portfolio Website v2",
    description: "NextJS 14, Vite, Tailwind, Shadcn UI, JavaScript",
    link: "/",
    github: "/",
  },
  {
    image: "/work/admin-payowasdal.png",
    categories: ["frontend"],
    name: "Payowasdal Admin Dashboard",
    description: "Laravel, HTML, CSS, JavaScript, JQuery, MySQL, Blade, Bootstrap, Whatsapp API",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Srifoton.png",
    categories: ["backend", "Web App"],
    name: "Srifoton 2023",
    description: "NextJS, Laravel, MySQL, Blade, Tailwind CSS, Bootstrap",
    link: "/",
    github: "/",
  },
];

// Remove category duplicates and flatten the categories array
const uniqueCategories = [
  "all",
  ...new Set(projectData.flatMap((item) => item.categories)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all");

  const filteredProjects = projectData.filter((project) => {
    return category === "all" ? true : project.categories.includes(category);
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-5 lg:max-w-[640px] mb-12 mx-auto
            md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
