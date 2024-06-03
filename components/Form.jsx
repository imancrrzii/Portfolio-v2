'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"



const Form = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Name'/>
        <User size={20} className="absolute right-6"/> 
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input type='name' id='name' placeholder='Name'/>
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea placeholder='Type Your message Here.'/>
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center max-w-[166px] gap-x-1" disabled>
        Let's Talk <ArrowRightIcon size={20}/>
      </Button>
    </div>
  )
}

export default Form