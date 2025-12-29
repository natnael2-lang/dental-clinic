import Navbar from "@/components/Navbar";

const DentalBridges = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Video */}
            <div className="flex items-center justify-center">
              <video
                src="https://maisondental.co.uk/wp-content/uploads/2021/10/dental-bridges-video-maisondental.mp4"
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
                Dental Bridges
              </h2>

              <p className="text-muted-foreground mb-4">
                Dental Bridges are a fixed solution for replacing missing teeth.
                They are designed to fill a space or gap in your smile by anchoring
                an artificial tooth to one or more healthy natural teeth on either side.
              </p>

              <p className="text-muted-foreground mb-6">
                As long as you have a strong, healthy natural tooth to support the bridge,
                this treatment offers a reliable and natural-looking way to restore both
                function and appearance to your smile.
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✔ Fixed replacement for missing teeth</li>
                <li>✔ Restores chewing and speaking ability</li>
                <li>✔ Prevents surrounding teeth from shifting</li>
                <li>✔ Natural-looking and durable solution</li>
                <li>✔ Improves smile balance and confidence</li>
              </ul>

              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Book Dental Bridges
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DentalBridges;
