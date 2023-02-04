import logo from '../assets/logo.webp'
import img1 from '../assets/img1.webp'



const Home = () => {
    return (
        <div className="text-white">
            
            <div id='header' className='w-full flex  px-8 py-6 justify-cente items-center'>
                <img src={logo} className="w-10 md:w-16 object-contain brightness-[20]" alt="" />
                <h1 className='turr text-xl md:text-3xl pl-3 md:pl-6 pc text-center font-bold'>Metachain</h1>
            </div>
            
            <div className='w-11/12 mt-6 md:-mt-8 flex flex-wrap md:flex-nowrap px-4 md:px-0 items-center justify-between m-auto'>
                <div>
                    <h1 className='text-4xl turr font-bold'>The Future is NOW!</h1>
                    <h2 className=' md:text-xl mt-4 text-white/70 w-full md:w-10/12 md:leading-loose font-light'>Metachain is a platform that aims to create a virtual shared space called the Metaverse. In this space, users can interact with each other and digital objects in a 3D environment and..... </h2>          
                </div>
                <img className='p-8 w-[30rem] noselect' src={img1}/>
            </div>

        </div>
    )
}

export default Home;