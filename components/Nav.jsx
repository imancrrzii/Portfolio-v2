import Link from "next/link";
import React from "react";

// next hooks
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"

const links = [
  { path: "/", name: "Home" },
  { path: "/projects", name: "Portfolio" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`capitalize ${linkStyles}`}
            key={index}
            href={link.path}
          >
            {link.path === path && (<motion.span initial={{y: '-100%'}} animate={{y: 0}} transition={{type: 'tween'}} layoutId='underline' className={`${underlineStyles}`}/>)} 
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
