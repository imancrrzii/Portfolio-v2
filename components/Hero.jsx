import Link from "next/link";
import { Button } from "./ui/button";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
  RiDownloadFill,
  RiSendPlaneLine,
  RiSchoolFill,
  RiBriefcase2Fill,
  RiBook2Fill,
  RiGraduationCapFill,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";
import { Send, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[-84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-md uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4 max-w-[600px]">
              Hello, I am Iman Carrazi Syamsidi
            </h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              As a sixth-semester Informatics student at Sriwijaya University, I
              have successfully developed several web development initiatives
              focusing on frontend and backend, managing project schedules
              effectively, reducing delivery time by 25% while maintaining a 98%
              code accuracy rate and staying abreast of the
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Hire me <Send size={18} />
                </Button>
              </Link>
              <Link href="/CV - Iman Carrazi Syamsidi.pdf" download>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Social */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyle="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[20%] -left-[5rem]"
              endCountNum={1}
              badgeText="Years of Experience"
              icon={<RiBriefcase2Fill />}
            />
            <Badge
              containerStyles="absolute top-[70%] -left-[2rem]"
              endCountNum={9}
              endCountText="+"
              badgeText="Finished Projects"
              icon={<RiTodoFill />}
            />
            <Badge
              containerStyles="absolute top-[55%] -right-[5rem]"
              endCountNum={6}
              badgeText="Semesters of Study"
              icon={<RiGraduationCapFill />}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc="/hero/hero.png"
            />
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
