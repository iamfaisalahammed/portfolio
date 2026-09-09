const AdditionalSkills = () => {
  const skills = [
    "SEO",
    "Keyword Research",
    "On-Page SEO",
    "Google Search Console",
    "Technical SEO",
    "Digital Marketing",
  ];

  return (
    <section className="bg-[#0b0f14] py-14 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-blue-400 text-xs font-semibold uppercase tracking-[0.3em] mb-2">
            Additional Expertise
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            SEO & Digital Marketing
          </h2>

          <p className="text-gray-500 text-sm mt-3 max-w-xl mx-auto">
            Basic knowledge of SEO and digital marketing strategies.
          </p>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2
                rounded-lg
                text-sm
                bg-white/[0.03]
                border border-white/10
                text-gray-300
                hover:text-blue-400
                hover:border-blue-500/30
                transition-all duration-300
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSkills;