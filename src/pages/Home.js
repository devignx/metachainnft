import logo from '../assets/logo.webp'
import img1 from '../assets/img1.webp'
import abst from '../assets/abst.webp'
import circ from '../assets/circle.svg'
import { motion } from 'framer-motion'

import it1 from '../assets/nfts/nft (1).webp'
import it2 from '../assets/nfts/nft (2).webp'
import it6 from '../assets/nfts/nft (6).webp'
import it4 from '../assets/nfts/nft (4).webp'
import it5 from '../assets/nfts/nft (5).webp'


const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      };
      const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      };

    return (
        <div className="text-white">

        <div class="opacity-40 w-[200px] md:w-[350px] h-[350px] bg-white mix-blend-overlay rounded-full blur-[140px] bottt top-[35%] left-0 absolute "></div>
        <div class="opacity-40 w-[200px] md:w-[350px] h-[350px] bg-white mix-blend-overlay rounded-full blur-[140px] bottt top-[35%] right-0 absolute "></div>


            <section id='nav' className='fixed bg-white-[0.001] top-0 toppp backdrop-blur-xl flex w-full justify-center md:justify-between items-center'>
                <a href='#home' id='header' className='w-full flex  px-8 py-6 justify-start items-center'>
                    <img src={logo} className="pc w-10 md:w-14 object-contain brightness-[20]" alt="" />
                    <h1 className='turr text-xl md:text-2xl pl-3 md:pl-5 pc text-center'>Metachain</h1>
                </a>
                <div className='flex lg:gap-12 md:gap-8 tracking-widest  toppp uppercase pr-8 pc'>
                    <a href='#about' className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>About</a>
                    <a href='#roadmap' className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Roadmap</a>
                    <a href='#mint' className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Mint</a>
                    <a href='#whitelist' className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Whitelist</a>
                </div>
            </section>

            <section id='home' className='h-screen relative flex justify-start pb-12 flex-col overflow-hidden'>

                <div className='relative h-full mt-[5%] md:mt-[10%]'>        
                    <img className='w-[12rem] md:w-[16rem] botttt absolute brightness-[20] mix-blend-overlay -ml-[4px] centerh' alt='' src={logo}/>
                    <img className='w-[12rem] md:w-[16rem] botttt absolute brightness-[20] mix-blend-overlay -ml-[8px] centerh' alt='' src={logo}/>
                    <img className='w-[12rem] md:w-[16rem] botttt absolute brightness-[20] mix-blend-overlay centerh' alt='' src={logo}/>
                    <img className='w-[12rem] md:w-[16rem] botttt absolute brightness-[20] mix-blend-overlay ml-[4px] centerh' alt='' src={logo}/>
                    <img className='w-[12rem] md:w-[16rem] botttt absolute brightness-[20] mix-blend-overlay ml-[8px] centerh' alt='' src={logo}/>
                </div>

                <div className='h-full w-full m-auto relative text-center'>
                    <h1 className='text-2xl md:text-4xl turr font-extrabold'>The Future is <span className='textgrad'>NOW!</span></h1>
                    <h2 className='w-10/12 md:w-[50%] m-auto md:text-lg mt-6 text-slate-400 md:leading-loose font-light'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </h2>   
                    <a href='/' className='bg-white/90 text-black m-auto text-sm backdrop-blur-xl hover:bg-white transition-all duration-300 ease-in-out text-sm font-bold uppercase px-10 py-3 md:py-4 mt-12 md:mt-8 block w-fit rounded-full'>Learn More</a>
                </div>
                
                <img className='mix-blend-overlay absolute bottt h-screen -bottom-[40%] md:-bottom-16 centerh ' src={circ} />
            </section>

            <section id='nft' className='my-16'>
                <h1 className='text-3xl text-center turr '>NFTs</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
                <div className='m-auto w-full overflow-x-scroll py-24 mt-[4rem] md:scale-[65%] lg:scale-[85%] h-full flex items-center gap-12 justify-start scroll-px-8'>
                    <div className='bg-white relative h-[10rem] w-[15rem] rounded-[1.5rem] p-5 py-8 shad overflow-visible shrink-0 flex flex-col justify-end'>
                        <img className='rounded-full border-[7px] border-white border-solid centerh absolute -top-[4.5rem] w-[9rem] ' src={it1} />
                        <h1 className='font-bold  text-center turr text-3xl text-black'>123</h1>
                    </div>
                    <div className='bg-white relative h-[10rem] w-[15rem] rounded-[1.5rem] p-5 py-8 shad overflow-visible shrink-0 flex flex-col justify-end'>
                        <img className='rounded-full border-[7px] border-white border-solid centerh absolute -top-[4.5rem] w-[9rem] ' src={it4} />
                        <h1 className='font-bold  text-center turr text-3xl text-black'>123</h1>
                    </div>
                    <div className='bg-white relative h-[10rem] w-[15rem] rounded-[1.5rem] p-5 py-8 shad overflow-visible shrink-0 flex flex-col justify-end'>
                        <img className='rounded-full border-[7px] border-white border-solid centerh absolute -top-[4.5rem] w-[9rem] ' src={it2} />
                        <h1 className='font-bold  text-center turr text-3xl text-black'>123</h1>
                    </div>
                    <div className='bg-white relative h-[10rem] w-[15rem] rounded-[1.5rem] p-5 py-8 shad overflow-visible shrink-0 flex flex-col justify-end'>
                        <img className='rounded-full border-[7px] border-white border-solid centerh absolute -top-[4.5rem] w-[9rem] ' src={it5} />
                        <h1 className='font-bold  text-center turr text-3xl text-black'>123</h1>
                    </div>
                    <div className='bg-white relative h-[10rem] w-[15rem] rounded-[1.5rem] p-5 py-8 shad overflow-visible shrink-0 flex flex-col justify-end'>
                        <img className='rounded-full border-[7px] border-white border-solid centerh absolute -top-[4.5rem] w-[9rem] ' src={it6} />
                        <h1 className='font-bold  text-center turr text-3xl text-black'>123</h1>
                    </div>
                </div> 
                    <a href='/' className='bg-white/90 text-black m-auto text-sm backdrop-blur-xl hover:bg-white transition-all duration-300 ease-in-out text-sm font-bold uppercase px-10 py-3 md:py-4 mt-24 md:mt-16 block w-fit rounded-full'>View All</a>
            </section>

            <section id='about' className='h-screen pt-24'>
                <h1 className='text-3xl text-center turr '>About</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
            </section>

            <section id='roadmap' className='pt-24'>
                <h1 className='text-3xl text-center turr '>Roadmap</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    className="flex flex-wrap text-white     scale-[100%] md:scale-[95%] gap-4 md:gap-8  m-auto w-full md:w-10/12 justify-center items-start mt-6 md:mt-16"
                >
                    <motion.div className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4">
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[35px] h-[35px] border-white/60 border-solid border-[10px] rounded-full bg-pink-500">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={item}
                        className="flex flex-col text-center justify-center items-center p-3 w-10/12 md:w-[13rem] gap-4"
                    >
                        <h2 className="font-semibold">May 2023</h2>
                        <div className="w-[20px] h-[20px] border-white/70 border-solid border-[4px] rounded-full bg-purple-400">
                        <br />
                        </div>
                        <hr />
                        <p className="text-sm text-white/60">
                        Metachain is a platform that aims to create a virtual shared space called the Metaverse.
                        </p>
                    </motion.div>
                </motion.div>
            </section>
            
            <section id='mint' className='h-screen pt-24'>
                <h1 className='text-3xl text-center turr '>Mint</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
            </section>

            <section id='whitelist' className='h-screen pt-24'>
                <h1 className='text-3xl text-center turr '>Whitelist</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
            </section>

        </div>
    )
}

export default Home;