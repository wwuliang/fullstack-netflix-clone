import React from 'react';

interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw]">
            <img className="
                    cursor-pointer 
                    object-cover 
                    transition 
                    duration 
                    shadow-xl 
                    rounded-md 
                    group-hover:opacity-90 
                    sm:group-hover:opacity-0 
                    delay-300 
                    w-full 
                    h-[12vw]
                " 
            src={data.thumbnailUrl} alt="Thumbnail" />
            <div className="
                opacity-0 
                absolute 
                top-0 
                transition 
                duration-200 
                z-10 
                invisible 
                sm:visible 
                delay-300 
                w-full 
                scale-0 
                group-hover:scale-110 
                group-hover:-translate-y-[6vw] 
                group-hover:translate-x-[2vw]
                group-hover:opacity-100
            ">
                <img className="
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl 
                    rounded-md
                    w-full
                    h-[12vw]
                "
                src={data.thumbnailUrl} alt="Thumbnail" />
            </div>
        </div>
    )
}

export default MovieCard;