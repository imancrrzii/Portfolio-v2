import { GanttChartSquare, Gem, Blocks, Laptop, LaptopIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    title: "Web Design",
    description:
      "Involves the creative process of designing the visual layout and user interface of a website to create an engaging and intuitive user experience",
    icon: <Gem size={72} strokeWidth={0.8} />,
  },
  {
    title: "Web Development",
    description:
      "Involves the technical process of building and maintaining websites, including writing code, creating interactive web pages, and integrating databases",
    icon: <LaptopIcon size={72} strokeWidth={0.8} />,
  },
  {
    title: "Backend Development",
    description:
      "Focuses on the server-side development of a website, including database management and implementing logic behind the scenes to support the core functions of the website.",
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
            My Service
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              href={`#card-${index}`}
            >
              <CardHeader className='text-primary absolute -top-[60px]'>
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
              </CardHeader>
              <CardContent className='text-center'>
                <CardTitle className='mb-4'>{item.title}</CardTitle>
                <CardDescription className='text-lg'>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
