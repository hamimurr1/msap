import React from 'react';

const Hero = () => {
  return (
    <>
    <section
  className="bg-blue-50 min-h-screen py-20 bg-[url('https://i.ibb.co.com/ZpNGdpB8/Gemini-Generated-Image-vn4e4qvn4e4qvn4e.png')] bg-no-repeat bg-cover bg-center"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center mt-64">
      Find Nearby Essential Services
    </h1>
    <p className="mt-4 text-xl text-black-600">
      Emergency, medical, police, and daily assistance all in one platform.
    </p>
    <div className="mt-6 flex justify-center gap-4">
  <button
          onClick={() =>
            document.getElementById("services")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-5 py-2 bg-[#41644A] text-white rounded-lg"
        >
          Get Started
        </button>

    <button
          onClick={() =>
            document.getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-5 py-2 border border-[#41644A] text-[#41644A] rounded-lg"
        >
          Learn More
        </button>
</div>

  </div>
</section>

      
    </>
  );
};

export default Hero;
