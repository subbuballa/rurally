import Image from "next/image";

const Hero = () => {
    return (
        <div className="max-w-screen-xl mt-2" id="about">
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
                <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                    Welcome to <strong>Rur-ally Connectors</strong>.
                </h1>
                <p className="text-black-500 mt-4 mb-6">
                    Find funds. Plan projects. Connect communities
                </p>
                <button className="py-3 lg:py-4 px-12 lg:px-16 text-white font-semibold rounded-lg bg-red-500 hover:shadow-red-md transition-all outline-none">Start Campaign</button>
                </div>
                <div className="flex w-full">
                <div className="h-full w-full">
                    {/* <Image
                    src="/assets/agreement.jpg"
                    alt="Rurally Connectors"
                    quality={100}
                    width={300}
                    height={300}
                    layout="responsive"
                    /> */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Hero