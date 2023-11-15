import { LiaCertificateSolid } from 'react-icons/lia';
import { FaUsers } from 'react-icons/fa';
import { FcAlarmClock } from 'react-icons/fc';

const Elementor = () => {
    return (
        <div className="bg-sky-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-xl m-auto py-10">
                <div className="flex items-center p-6 border-r-0 md:border-r-2 border-slate-200">
                    <div className='flex items-center mr-4'>
                        <span className='text-5xl text-white'><LiaCertificateSolid></LiaCertificateSolid></span>
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-semibold text-white font-[roboto]'>20 Online Courses</h2>
                        <p className='text-lg text-white font-normal mt-2 font-serif'>Explore a variety of fresh topics</p>
                    </div>
                </div>
                <div className="flex items-center p-6 border-r-0 md:border-r-2 border-slate-200">
                    <div className='flex items-center mr-4'>
                        <span className='text-5xl text-white'><FaUsers></FaUsers></span>
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-semibold text-white font-[roboto]'>Expert instruction</h2>
                        <p className='text-lg text-white font-normal mt-2 font-serif'>Find the right instructor for you</p>
                    </div>
                </div>
                <div className="flex items-center p-6">
                    <div className='flex items-center mr-4'>
                        <span className='text-5xl text-white'><FcAlarmClock></FcAlarmClock></span>
                    </div>
                    <div>
                        <h2 className='text-2xl lg:text-3xl font-semibold text-white font-[roboto]'>Lifetime access</h2>
                        <p className='text-lg text-white font-normal mt-2 font-serif'>Learn on your schedule</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Elementor;