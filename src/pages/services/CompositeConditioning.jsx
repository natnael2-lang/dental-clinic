import Navbar from "@/components/Navbar";

const CompositeConditioning = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Video */}
            <div className="flex items-center justify-center">
              <video
                src="https://maisondental.co.uk/wp-content/uploads/2021/10/composite-conditioning-video_maisondental.mp4"
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
                Composite Conditioning™
              </h2>

              <p className="text-muted-foreground mb-4">
                Composite Conditioning™ is an exclusive service at Maison Dental. 
                Our specially designed procedure combines professional cleaning of your 
                composite bonding and natural teeth to maintain your smile makeover results.
              </p>

              <p className="text-muted-foreground mb-6">
                This treatment helps remove surface stains, polish the composite, and 
                preserve the longevity and shine of your dental enhancements. It is safe, 
                effective, and tailored to your unique dental needs.
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✔ Professional cleaning of composite restorations</li>
                <li>✔ Polishing for a natural, bright smile</li>
                <li>✔ Removes surface stains from teeth and composites</li>
                <li>✔ Maintains long-lasting results of your smile makeover</li>
                <li>✔ Safe, minimally invasive, and effective</li>
              </ul>

              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Book Composite Conditioning™
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CompositeConditioning;
