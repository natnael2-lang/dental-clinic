import Navbar from "@/components/Navbar"

const CompositeBondind=()=>{


    return(
    <>
    <Navbar/>
    <section className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Video */}
      <div className="flex items-center justify-center">
        <video
        src="https://maisondental.co.uk/wp-content/uploads/2021/10/composite-bonding-video_maisondental.mp4"
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
          Composite Bonding
        </h2>

        <p className="text-muted-foreground mb-4">
          Composite Bonding is a cosmetic dental procedure that involves applying a tooth-colored 
          composite resin material directly to your existing teeth. 
          It’s an excellent solution for repairing chipped, fractured, or discoloured teeth.
        </p>

        <p className="text-muted-foreground mb-6">
          The treatment is quick, minimally invasive, and provides natural-looking results. 
          Your dentist shapes and polishes the composite to blend seamlessly with your teeth, 
          giving you a flawless, confident smile.
        </p>

        <ul className="space-y-2 text-muted-foreground mb-6">
          <li>✔ Repairs chipped or fractured teeth</li>
          <li>✔ Corrects discoloration</li>
          <li>✔ Minimally invasive procedure</li>
          <li>✔ Instant improvement in appearance</li>
          <li>✔ Long-lasting and natural-looking results</li>
        </ul>

        <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
          Book Composite Bonding
        </button>
      </div>

    </div>
  </div>
</section>

    
    </>)
}

export default CompositeBondind;