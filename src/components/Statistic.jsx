import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Statistic({ number, title }) {
    const [inView, setInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        };

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return(
        <div ref={ref} className="relative bg-[#0c0c0c] rounded-lg lg:my-5 text-2xl flex justify-center items-center overflow-hidden hover:bg-white group cursor-pointer">
            <div className="text-center">
                {inView && (
                    <p className="text-2xl lg:text-5xl font-semibold hover:hidden">
                        <CountUp end={number} duration={3} />
                        +
                    </p>
                )}
                <p className="font-light text-sm lg:text-base mt-1 hover:hidden">{title}</p>

                <p className="hidden group-hover:block text-black text-sm lg:text-base absolute top-3 lg:top-8 left-3 lg:left-8">{title}</p>
                <p className="hidden group-hover:block text-black/90 absolute -bottom-2 lg:-bottom-4 -right-4 lg:-right-6 font-black text-5xl lg:text-[4rem] xl:text-[6rem] 2xl:text-[10rem]">{number}+</p>
            </div>
        </div>
    )
}