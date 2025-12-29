import Navbar from "@/components/Navbar";

const PreDesignedCompositeVeneers = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Video */}
            <div className="flex items-center justify-center">
              <video
                src="https://maisondental.co.uk/wp-content/uploads/2021/10/pre-designed-composite-veneers-video_maisondental.mp4"
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
                Pre-Designed Composite Veneers
              </h2>

              <p className="text-muted-foreground mb-4">
                Pre-designed composite veneers allow us to create your new smile using 
                thin coverings of high-quality composite resin placed over your natural teeth.
                No drilling of the natural tooth structure is required.
              </p>

              <p className="text-muted-foreground mb-6">
                Your veneers are carefully designed and approved by you before the final 
                treatment, ensuring the shape, shade, and overall look meet your expectations.
                This makes the procedure highly predictable, comfortable, and minimally invasive.
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✔ No drilling or damage to natural teeth</li>
                <li>✔ Pre-designed and approved before treatment</li>
                <li>✔ Natural-looking, high-quality composite material</li>
                <li>✔ Comfortable and minimally invasive procedure</li>
                <li>✔ Instant smile transformation</li>
              </ul>

              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Book Composite Veneers
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PreDesignedCompositeVeneers;
