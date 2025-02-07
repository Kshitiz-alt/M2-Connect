import { useRef } from 'react'

import { DESC } from './Props'
import { motion, useInView } from 'motion/react'
import Nav from './Nav'


const Animation = {
    initial: {
        y: -200,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}
const TextSync = {
    initial: {
        x: -200,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: .5
        }
    }
}


const HomePage = () => {

    
    const ref = useRef()
    const InView = useInView(ref)

    return (
        <div className="bg-[url(/background.png)] bg-cover bg-fixed h-[219vh] " ref={ref}>
            <motion.nav
                variants={Animation}
                initial="initial"
                animate={InView ? "animate" : "initial"}
                className="w-[100%] h-[150px] rounded-br-[50px] rounded-bl-[50px] justify-center items-center flex  bg-[rgba(0,0,0,0.7)] text-blue-50"

            >
                <a>
                    <img className="w-[20%] flex relative rounded-[70px] animate-pulse" src="image.png"/>
                </a>
                <h3 className="relative top-[2rem] left-[-30rem] text-[4rem]">M2-CONNECT.com</h3>


            </motion.nav>
            <section>
                <Nav />
            </section>

            <div className=" flex h-[162.5vh] flex-col gap-[30px] relative text-center text-[25px] w-[95%] left-[2.375rem] rounded-tr-[20px] rounded-tl-[20px] bg-[rgba(255,255,255,0.9)]">
                {DESC.map((descc) => (
                    <div key={descc.id}>
                        <motion.p
                            className="text-[2rem] font-bold"
                            variants={TextSync}
                            initial="initial"
                            animate={InView ? "animate" : "initial"}
                        >{descc.heading}
                        </motion.p>
                        <motion.p
                            variants={TextSync}
                            initial="initial"
                            animate={InView ? "animate" : "initial"}
                        >{descc.desc}
                        </motion.p>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default HomePage
