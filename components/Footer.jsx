import Socials from "./Socials"
const Footer = () => {
  return (
    <footer className="bg-tertiary dark:bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* socials */}
          <Socials  
            containerStyles='flex gap-x-6 mx-auto xl:mx-0' 
            iconStyles='text-primary dark:text-white/70 text-[20px] text-foreground text-[22px] hover:text-primary transition-all'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer