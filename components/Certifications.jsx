'use client'

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'
import ProjectCard from "./ProjectCard"

const certificationsData = [
  {
    image: '/certifications/certificate-2.png', 
    categories: ['OOP'],
    name: 'Problem Solving (Intermediate) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/13fd08a72c03',
  },
  {
    image: '/certifications/certificate-1.png',
    categories: ['GCP'],
    name: 'Cloud Computing (Distinction Graduates) - Bangkit Academy ',
    description: 'January 2023',
    link: 'https://drive.google.com/file/d/1ruC7Dy9dQ__kUMDgr_jU-n3NPsIgdB8C/view?usp=sharing',
  },
  {
    image: '/certifications/certificate-3.png',
    categories: ['JS'],
    name: 'JavaScript (Intermediate) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/3612a38f8a85',
  },
  {
    image: '/certifications/certificate-4.png',
    categories: ['SQL'],
    name: 'Structured Query Language (Intermediate) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/28ddc3ed444b',
  },
  {
    image: '/certifications/certificate-5.png',
    categories: ['BE'],
    name: 'Intro to Back-End Development using Google Cloud - Dicoding',
    description: 'October 2023',
    link: 'https://www.dicoding.com/certificates/L4PQ81MVOZO1',
  },
  {
    image: '/certifications/certificate-6.png',
    categories: ['JS'],
    name: 'Intro to JavaScript Basic - Dicoding',
    description: 'September 2023',
    link: 'https://www.dicoding.com/certificates/NVP78K2NVXR0',
  },
  {
    image: '/certifications/certificate-7.png',
    categories: ['GCP'],
    name: 'Becoming a Google Cloud Engineer - Dicoding',
    description: 'November 2023',
    link: 'https://www.dicoding.com/certificates/GRX52RQ13X0M',
  },
  {
    image: '/certifications/certificate-8.png',
    categories: ['CSS'],
    name: 'Cascading Style Sheets (Basic) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/9b3ddea0b12e',
  },
  {
    image: '/certifications/certificate-9.png',
    categories: ['Python'],
    name: 'Python (Basic) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/a5c200746aa9',
  },
  {
    image: '/certifications/certificate-10.png',
    categories: ['Java'],
    name: 'Java (Basic) - Hackerrank',
    description: 'May 2024',
    link: 'https://www.hackerrank.com/certificates/8dbc806726b2',
  },
];


const Certifications = () => {
  return (
    <section className="relative mb-12 xl:mb-16">
      <div className="container mx-auto">
      <h2 className="section-title mb-12 mx-auto">Certifications</h2>
        {/* slider */}

        {/* slider */}
        <div className="xl:mx-auto">
          <Swiper 
            className="h-[510px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{clickable: 'true'}}  
          >
            {/* Show only the first 10 projects for the slides */}
            {certificationsData.slice(0, 10).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Certifications
