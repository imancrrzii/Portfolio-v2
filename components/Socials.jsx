"use client";

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";

import Link from 'next/link'

const icons = [
  {
    path: '/',
    name: <RiLinkedinFill/>
  },
  {
    path: '/',
    name: <RiGithubFill/>
  },
  {
    path: '/',
    name: <RiInstagramFill/>
  }
]

const Socials = ({containerStyles, iconsStyle}) => {
  return <div className={`${containerStyles}`}>
    {icons.map((icon, index) => {
      return       <Link href={icon.path} key={index}>
      <div className={`${iconsStyle}`}>{icon.name}</div>
    </Link> 
    })}
  </div>;
};

export default Socials;
