import { useNavigate } from 'react-router-dom'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const variantSync = {
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


const Nav = () => {
 
    const ref = useRef()
    const WhenInView = useInView(ref)
    const navigate = useNavigate()
    return (
        <>
            <div className="flex  gap-[3rem] justify-center items-center mt-[1rem]">
                {/* Bottom Row */}
                <motion.div
                    ref={ref}
                    variants={variantSync}
                    initial="initial"
                    animate={WhenInView ? "animate" : "initial"}
                    className="flex flex-col  "
                >
                    <button onClick={() => navigate('/LatestBW')} className="h-[2rem] pl-[10rem] pr-[10rem]  mt-[-0.5rem] pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer  p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 " >Latest Bollywood</button>
                    <button onClick={() => navigate('/LatestPJ')} className="h-[2rem] pl-[10rem] pr-[10rem]  pb-[35px] bg-[rgba(255,255,255,0.5)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 " >Latest Punjabi</button>
                    <button onClick={() => navigate('/LatestIP')} className="h-[2rem] pl-[10rem] pr-[10rem]  pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 " >Latest IndiPOP</button>
                    <button onClick={() => navigate('/TopSongs')} className="h-[2rem] pl-[10rem] pr-[10rem]  pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[1px] mb-[1rem]  border-2 rounded-[20px] duration-500 ">Tops Songs 2024</button>
                </motion.div>
                {/* Bottom Row */}
                <motion.div
                    variants={variantSync}
                    initial="initial"
                    animate={WhenInView ? "animate" : "initial"}
                    className="flex flex-col"
                >
                    <button onClick={() => navigate('/Anime')} className="h-[2rem] pl-[10rem] pr-[10rem] pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 ">Anime Songs</button>
                    <button onClick={() => navigate('/HS')} className="h-[2rem] pl-[10rem] pr-[10rem] pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 ">Haryanvi Songs</button>
                    <button onClick={() => navigate('/NRing')} className="h-[2rem] pl-[10rem] pr-[10rem] pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 ">New Ringtones</button>
                    <button onClick={() => navigate('/NewDJ')} className="h-[2rem] pl-[10rem] pr-[10rem] pb-[35px] bg-[rgba(255,255,255,0.8)] hover:bg-[rgba(0,0,255,0.3)] hover:text-cyan-50 cursor-pointer  p-[10px] mb-[1rem]  border-2 rounded-[20px] duration-500 ">New DJ Remix</button>
                </motion.div>
            </div>
        </>
    )
}
export default Nav
