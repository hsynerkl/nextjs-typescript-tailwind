const Video = () => {
  return (
    <div className="w-full h-2/4 lg:h-3/4 relative">
      <video src="/images/video.mp4" muted loop autoPlay={true}></video>
      <div className="w-3/4 absolute bottom-14 left-8">
        <h1 className="text-white text-2xl md:text-5xl">
          From Farm to Boutique.
        </h1>
        <p className="tracking-widest interstate text-white  text-xs md:text-lg mt-4">
          Come Experience Our New Boutique, Now Open.
        </p>
        <button className=" text-xs md:text-md tracking-widest bg-[#4f4285] text-md text-white px-5 py-3 interstate mt-4 rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Video;
