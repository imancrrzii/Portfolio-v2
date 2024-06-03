'use client'

import Link from "next/link"
import { Button } from "./ui/button"

import ProjectCard from "./ProjectCard"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'


const projectData = [
  {
    image: "/work/Srifoton.png",
    categories: ["backend", "Web App"],
    name: "Srifoton 2023",
    description: "NextJS, Laravel, MySQL, Blade, Tailwind CSS, Bootstrap",
    link: "/",
    github: "/",
  },
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
]

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col 
        justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, impsum dolor sit amet conectetur adipisicing elit.
          </p>
          <Link href='/projects'>
            <Button>
              All Projects
            </Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper 
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable: 'true'}}  
          >
            {/* Show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard imageStyles='shadow-xl' project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work