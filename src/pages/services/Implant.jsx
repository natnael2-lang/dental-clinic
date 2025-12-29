import Navbar from "@/components/Navbar";

const DentalImplants = () => {
  return (
    <>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Video */}
            <div className="flex items-center justify-center">
              <video
                src="https://maisondental.co.uk/wp-content/uploads/2021/10/dental-implant-video-maisondental.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="h-full rounded-2xl shadow-lg object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dental Implants
              </h2>

              <p className="text-muted-foreground mb-4">
                Dental implants are a long-lasting solution for replacing missing teeth.
                They can be used to replace a single missing tooth or as part of a full
                mouth rehabilitation for patients who have lost all their teeth.
              </p>

              <p className="text-muted-foreground mb-6">
                Missing teeth can affect your lifestyle, including how you eat, speak,
                and smile with confidence. At our clinic, dental implants are designed
                to restore both function and appearance, helping you feel comfortable
                and confident again.
              </p>

              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✔ Individual replacement for missing teeth</li>
                <li>✔ Full-mouth rehabilitation options available</li>
                <li>✔ Restores natural chewing and speech</li>
                <li>✔ Prevents bone loss in the jaw</li>
                <li>✔ Secure, long-lasting, and natural-looking</li>
              </ul>

              <a href="/contact">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition">
                  Book Dental Implants
                </button>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DentalImplants;
