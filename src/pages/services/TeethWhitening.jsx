import Navbar from "@/components/Navbar"

const TeethWhiteningSection = () => {
  return (

    <>
    <Navbar/>

    <section className="py-20 bg-background h-screen overflaow-hidden">
  <div className="container mx-auto px-4">
    <div className=" grid lg:grid-cols-2 gap-10 items-right">

      {/* Video */}
      <div className="flex items-center justify-center ">
         <video
        src="https://maisondental.co.uk/wp-content/uploads/2022/10/8E87F1F8-66CF-4C62-8A3B-58637CFA80C3.mov"
        autoPlay
        muted
        loop
        playsInline
        controls
        className="w-80 rounded-2xl shadow-lg object-cover"
      />

      </div>
      

      {/* Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Teeth Whitening
        </h2>

        <p className="text-muted-foreground mb-4">
          Teeth Whitening is a cosmetic dental treatment that removes
          discolouration caused by foods, drinks, and smoking. It is one of the
          easiest and most effective ways to improve your smile.
        </p>

        <p className="text-muted-foreground mb-6">
          Our professional whitening treatments are safe, gentle, and designed
          to deliver fast, visible results while protecting your teeth and gums.
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li>✔ Brightens stained teeth</li>
          <li>✔ Safe & painless treatment</li>
          <li>✔ Quick results</li>
          <li>✔ Boosts confidence instantly</li>
        </ul>

        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
          Book Teeth Whitening
        </button>
      </div>

    </div>
  </div>
</section>
    
    </>
   

  );
};

export default TeethWhiteningSection;
