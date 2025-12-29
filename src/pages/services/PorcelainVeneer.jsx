import Navbar from "@/components/Navbar";

const PorcelainVeneers = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Video */}
            <div className="flex items-center justify-center">
              <video
                src="https://maisondental.co.uk/wp-content/uploads/2021/10/IMG_3368.mov"
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
                Porcelain Veneers
              </h2>

              <p className="text-muted-foreground mb-4">
                One of the most popular ways to enhance your smile is through the use of
                porcelain veneers. These ultra-thin ceramic shells are custom-made to fit
                over the front surface of your teeth, delivering a flawless and natural look.
              </p>

              <p className="text-muted-foreground mb-6">
                Porcelain veneer treatments can correct a wide range of cosmetic concerns
                in a short period of time, including discoloration, chips, gaps, and uneven
                teeth. They are highly durable, stain-resistant, and designed to last for years.
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✔ Corrects discoloration, chips, and gaps</li>
                <li>✔ Long-lasting and stain-resistant porcelain</li>
                <li>✔ Natural-looking, custom-designed veneers</li>
                <li>✔ Enhances smile symmetry and confidence</li>
                <li>✔ Fast and predictable cosmetic results</li>
              </ul>

              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Book Porcelain Veneers
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PorcelainVeneers;
