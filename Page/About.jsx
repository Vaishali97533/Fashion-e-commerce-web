import React from 'react'

function About() {
  return (
    <div>

        
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-08.jpg')",   backgroundSize: 'cover', backgroundPosition: 'center'
      
        }}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
        <h1 className="relative text-white text-4xl md:text-6xl font-serif italic  z-10">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="px-6 py-12 md:px-20 md:py-20 bg-white grid md:grid-cols-2 gap-10">
        {/* Left Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-serif italic  leading-snug">
            From Vision To Vogue:<br />
            The Birth Of<br />
            <span className="italic">FemmeWardrobe</span>
          </h2>
        </div>

        {/* Right Story Text */}
        <div>
          <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-3">Our Story</h4>
          <p className="italic text-lg font-medium mb-4">
            Our Journey Began With A Simple Yet Powerful Vision – To Redefine The Way Women Experience Fashion.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection 
            that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the 
            vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this 
            fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.
          </p>
        </div>
      </div>

      <section className="px-6 md:px-20 py-16 bg-white text-black">
      {/* Small Heading */}
      <h4 className="text-sm font-semibold tracking-widest uppercase mb-4">
        Quality Assurance
      </h4>

      {/* Main Italic Heading */}
      <h2 className="text-3xl md:text-4xl font-[500]  italic leading-tight md:leading-[1.4] font-serif mb-8">
        We Understand That Fashion Is An Expression Of Identity, <br />
        And We Take Pride In Delivering Products That Embody <br />
        The Highest Standards Of Quality.
      </h2>

      {/* Paragraph */}
      <p className="text-gray-600 text-sm md:text-base font-serif leading-relaxed max-w-6xl">
        Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent
        criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing
        facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there – rigorous quality control
        processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe
        for fashion that not only captures attention but withstands the test of time.
      </p>
    </section>


    <section className="relative w-full h-[100vh]  text-white">
      {/* Background Image */}
      <img
        src="https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/bg-11.jpg"
        alt="Customer"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-10 xl:px-30">
        <div className="max-w-2xl space-y-6">
          {/* Subheading */}
          <p className="uppercase tracking-widest text-sm font-semibold text-white/80">
            Customer-Centric Approach
          </p>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic  leading-tight">
            Beyond Fashion: Nurturing <br />
            A Customer-Centric <br />
            Experience
          </h1>

          {/* Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-white font-serif italic leading-relaxed">
            We believe that the essence of our success lies in the satisfaction of our customers.
            Our commitment to providing an exceptional shopping experience goes beyond trends and styles – 
            it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. 
            From personalized recommendations to hassle-free returns, we've crafted every aspect of our service 
            with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, 
            enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your 
            satisfaction is not just a priority; it's our passion.
          </p>
        </div>
      </div>
    </section>




    

    </div>
  )
}

export default About