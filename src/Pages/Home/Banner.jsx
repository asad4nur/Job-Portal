import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.png'
import { motion } from 'motion/react';
import { LuTextSearch } from "react-icons/lu";
import { PiBagSimple } from "react-icons/pi";
import { Link } from 'react-router';


const Banner = () => {
    return (
        <div className="hero min-h-96 bg-base-200 w-full">
            <div className="hero-content flex-col lg:flex-row-reverse gap-30">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-full shadow-2xl w-60"
                    />
                    <motion.img
                        src={team2}
                        animate={{ x: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="max-w-sm rounded-full shadow-2xl w-60"
                    />
                </div>
                <div className='flex-2'>
                    <h1 className="text-5xl font-bold"> The Easiest Way
                        to Get Your motion.
                        <motion.span
                            animate={{ color: ['#f93e16', '#50e600', '#e600ca'] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >New Job!
                        </motion.span> </h1>
                    <p className="py-6">
                        Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day
                    </p>

                    <div className='bg-base-200 flex justify-center items-center p-3 rounded my-5 gap-3'>
                        <PiBagSimple className='text-3xl' />
                        <select defaultValue="Pick a font" className="select select-ghost">
                            <option disabled={true}>Industry</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                        <select defaultValue="Pick a font" className="select select-ghost">
                            <option disabled={true}>Location</option>
                            <option>Inter</option>
                            <option>Poppins</option>
                            <option>Raleway</option>
                        </select>
                        <div className='flex justify-center items-center'>
                            <LuTextSearch className='text-2xl' />
                            <input type="text" placeholder="Type here" className="p-3 rounded w-40" />
                        </div>
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <div className='flex gap-3 mt-10'>
                        <p className='font-bold'>Popular Searches:</p>
                        <a href="" >PHP</a>
                        <a href="" >Laravel</a>
                        <a href="" >Java</a>
                        <a href="" >React</a>
                        <a href="" >Paython</a>
                        <a href="" >Mongo</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;