"use client";
import CountUp from "react-countup"

const stats = [
    {
        num:3,
        text: "Years of experience",
    },
    {
        num:6,
        text:"Projects completed",
    },
    {
        num:7,
        text:"Technology mastered",
    },
    {
        num:500,
        text:"Code commits",
    },

]
const Stats = () => {
    return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none">
                {stats.map((item,index)=>{
                    return (
                        <div key = {index} className="flex-1 flex gap-4 items-center justify-center
                        xl:justify-start">
                            <CountUp 
                                end = {item.num}  
                                duration={7} 
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            {/* <span className="text-4xl xl:text-6xl font-extrabold">+</span> */}
                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
};

export default Stats;