import logo from '../assets/logo.webp'
import img1 from '../assets/img1.webp'
import abst from '../assets/abst.webp'
import patt from '../assets/pat.svg'



const Home = () => {
    return (
        <div className="text-white">

            <section id='nav' className='flex justify-center md:justify-between items-center'>
                <div id='header' className='w-full flex  px-8 py-6 justify-start items-center'>
                    <img src={logo} className="w-10 md:w-16 object-contain brightness-[20]" alt="" />
                    <h1 className='turr text-xl md:text-3xl pl-3 md:pl-6 pc text-center font-bold'>Metachain</h1>
                </div>
                <div className='flex gap-8 font-bold tracking-widest uppercase pr-8 pc'>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>Roadmap</h3>
                    <h3 className='text-slate-400 hover:text-white turr transition-all duration-300 ease-in-out '>Whitelist</h3><br/>
                </div>
            </section>

            <div className='pb-[9rem] relative mt-6 flex flex-wrap md:flex-nowrap px-4 md:px-0 items-center justify-between m-auto'>
                <div className='ml-6 md:ml-16'>
                    <h1 className='text-3xl md:text-5xl turr font-extrabold'>The Future is <span className='textgrad'>NOW!</span></h1>
                    <h2 className=' md:text-lg mt-4 text-slate-400 w-full md:w-10/12 md:leading-loose font-light'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </h2>   
                    <a href='/' className='bg-white/[0.05] text-sm  backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300 ease-in-out text-ms md:text-lg tracking-wide turr font-bold uppercase px-10 py-3 md:py-4 mt-6 md:mt-8 block w-fit rounded-xl border-solid border-white/10 border-2'>Read More</a>
                </div>
                <img className='pr-16 botttt drop-shadow-lg pc w-[30rem] noselect' alt='' src={img1}/>
            </div>

            <div className='w-full relative bg-white/10 backdrop-blur-xl rounded-xl w-10/12 m-auto overflow-hidden h-[15rem]'>
                <img src={patt} className="absolute rotate-[45deg]  w-screen object-contain" alt="" />
            </div>
<br/>
        </div>
    )
}

export default Home;