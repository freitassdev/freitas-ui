'use client';

import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function GithubButton() {
    return (
        //TODO: Hover effect
        <motion.a
            initial={{
                backgroundImage: "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
            }}
            animate={{
                backgroundImage: [
                    "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
                    "linear-gradient(67deg, #ff52f9,#12d6df, #7A69F9, #b239ae)",
                    "linear-gradient(67deg, #b239ae, #ff52f9,#12d6df, #7A69F9)",
                    "linear-gradient(67deg, #7A69F9, #b239ae, #ff52f9,#12d6df)",
                    "linear-gradient(67deg, #12d6df, #7A69F9, #b239ae, #ff52f9)",
                ],
            }}
            className="w-36 h-9 p-2 px-2 rounded-xl transform-gpu text-sm transition-colors duration-1000 group-hover:text-transparent flex flex-row items-center justify-center border border-muted cursor-pointer"
            transition={{
                duration: 2,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
            }}
            href='https://github.com/freitassdev/freitas-ui'
            target='_blank'
        >
            <div className='w-[8.5rem] h-7 rounded-lg absolute bg-background/40 backdrop-blur-sm'></div>
            <div className='relative z-10 flex flex-row items-center justify-center text-white'>
                <FaGithub className="mr-2" />
                See on GitHub
            </div>
        </motion.a>
    );
}