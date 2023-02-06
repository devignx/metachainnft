import logo from '../assets/logo.webp'
import img1 from '../assets/img1.webp'
import abst from '../assets/abst.webp'
import circ from '../assets/circle.svg'



const Home = () => {
    return (
        <div className="text-white">

        <div class="opacity-40 w-[200px] md:w-[350px] h-[350px] bg-white mix-blend-overlay rounded-full blur-[140px] bottt top-[35%] left-0 absolute "></div>
        <div class="opacity-40 w-[200px] md:w-[350px] h-[350px] bg-white mix-blend-overlay rounded-full blur-[140px] bottt top-[35%] right-0 absolute "></div>


            <section id='nav' className='absolute flex w-full justify-center md:justify-between items-center'>
                <div id='header' className='w-full flex  px-8 py-6 justify-start items-center'>
                    <img src={logo} className="pc w-10 md:w-14 object-contain brightness-[20]" alt="" />
                    <h1 className='turr text-xl md:text-2xl pl-3 md:pl-5 pc text-center'>Metachain</h1>
                </div>
                <div className='flex lg:gap-12 md:gap-8 tracking-widest uppercase pr-8 pc'>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>About</h3>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>Roadmap</h3>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>Mint</h3>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>Whitelist</h3>
                </div>
            </section>

            <section className='h-screen relative flex justify-start pb-12 flex-col overflow-hidden'>

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
                    <a href='/' className='bg-white text-black m-auto text-sm backdrop-blur-xl hover:bg-white/90 transition-all duration-300 ease-in-out text-ms md:text-lg tracking-wide turr font-bold uppercase px-10 py-3 md:py-4 mt-12 md:mt-8 block w-fit rounded-full'>Read More</a>
                </div>
                
                <img className='mix-blend-overlay absolute bottt h-screen -bottom-[40%] md:-bottom-16 centerh ' src={circ} />
            </section>

            <section>
                <h1 className='text-3xl text-center turr mt-16 '>About</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>

            </section>


        </div>
    )
}

export default Home;