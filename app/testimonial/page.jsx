import React from 'react'
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="text-center p-10 py-10">
      <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Testimonials :</h3>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1 flex items-center justify-between text-start gap-8">
          <Image
            className="rounded-lg object-cover max-w-[400px] max-h-[400px]"
            width={10}
            height={10}
            layout="responsive"
            src="/assets/Lenny.jpg"
          />
          <p>
          Testimonial 1: <br /><br />
          "I'm so glad I discovered Bik-E!
          I bought my ATV here a few months ago and couldn't be more pleased.
          Not only was the purchase process simple and secure, but the delivery was incredibly fast.
          The bike was well packed and in perfect condition on arrival. Since then, I've logged hundreds of kilometers on the trails with my new riding companion.
          The quality of the bike is remarkable, and I always receive compliments on its design.
          Thank you to the entire Bik-E team for their excellent service and quality products! I highly recommend to all bike enthusiasts." <br /><br />
          - Lenny F., Happy Customer
          </p>
        </div>
        
        <div className="basis-1/3 flex-1 flex items-center justify-between text-start gap-8">
          <Image
            className="rounded-lg object-cover max-w-[400px] max-h-[400px]"
            width={10}
            height={10}
            layout="responsive"
            src="/assets/Mathias.png"
          />
          <p>
          Testimonial 2: <br /><br />
          "I'm an avid urban cyclist and was looking for a sturdy and stylish city bike. 
          After browsing several sites, I found exactly what I wanted at Bik-E. 
          I was pleasantly surprised by the variety of bikes available, and finally opted for a hybrid city bike. 
          The shopping experience was seamless, and I was even able to customize a few details to my preferences.
           Delivery was fast, and the bike arrived perfectly fitted and ready to ride. Since then, getting around town has become a real pleasure. 
           Thanks to Bik-E for their exceptional customer service and the quality of their products. 
           I highly recommend this place to anyone looking for a quality bike at an affordable price." <br /><br />
          - Mathias A. , Happy Customer
          </p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Testimonials