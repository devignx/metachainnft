import logo from '../assets/logo.webp'
import img1 from '../assets/img1.webp'
import abst from '../assets/abst.webp'
import circ from '../assets/circle.svg'


import it1 from '../assets/nfts/nft (1).webp'
import it2 from '../assets/nfts/nft (2).webp'
import it6 from '../assets/nfts/nft (6).webp'
import it4 from '../assets/nfts/nft (4).webp'
import it5 from '../assets/nfts/nft (5).webp'


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
                <div className='flex lg:gap-12 md:gap-8 tracking-widest  toppp uppercase pr-8 pc'>
                    <h3 className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>About</h3>
                    <h3 className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Roadmap</h3>
                    <h3 className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Mint</h3>
                    <h3 className='text-slate-400 hover:text-white transition-all duration-300 ease-in-out '>Whitelist</h3>
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
                    <a href='/' className='bg-white/90 text-black m-auto text-sm backdrop-blur-xl hover:bg-white transition-all duration-300 ease-in-out text-sm font-bold uppercase px-10 py-3 md:py-4 mt-12 md:mt-8 block w-fit rounded-full'>Learn More</a>
                </div>
                
                <img className='mix-blend-overlay absolute bottt h-screen -bottom-[40%] md:-bottom-16 centerh ' src={circ} />
            </section>

            <section id='nft' className='my-16'>
                <h1 className='text-3xl text-center turr '>NFTs</h1>
                <p className='text-center w-10/12 md:w-1/2 m-auto my-8 text-slate-400'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </p>
                <div className='m-auto w-full overflow-x-scroll pt-24 mt-[4rem] md:scale-[65%] lg:scale-[85%] h-full flex items-center gap-12 justify-start scroll-px-8'>
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


        </div>
    )
}

export default Home;