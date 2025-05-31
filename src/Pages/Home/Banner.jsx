import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.png'
import { motion } from 'motion/react';


const Banner = () => {
    return (
        <div className="hero min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
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
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold"> The Easiest Way
                        to Get Your motion.
                        <motion.span
                            animate={{ color:['#f93e16', '#50e600', '#e600ca'] }}
                        transition={{ duration: 5, repeat:Infinity }}
                        >New Job!
                    </motion.span> </h1>
                <p className="py-6">
                    Each month, more than 3 million job seekers turn to
                    website in their search for work, making over 140,000
                    applications every single day
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div >
    );
};

export default Banner;