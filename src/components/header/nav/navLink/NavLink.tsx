import Link from "next/link";
import { motion } from 'framer-motion';
import { slide } from '../../anim.js';

interface LinkData {
	index: number;
	title: string;
	href: string;
}

const NavLink = ({data}: {data: LinkData}) => {
  return (
    <motion.div custom={data.index} variants={slide} initial='initial' animate='enter' exit='exit' className="">
      <div className=""></div>
      <Link href={data.href} >
        {data.title}
      </Link>
    </motion.div>
  )
}
export default NavLink