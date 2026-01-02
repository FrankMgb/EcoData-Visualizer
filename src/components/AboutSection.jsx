const AboutSection = () => {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">
                What is ClimateFlow?
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
                ClimateFlow is your AI-assisted climate insight companion, turning complex environmental data into clear, decision-ready stories so you don&apos;t have to be a scientist to understand the planet&apos;s signals.
            </p>

            <div className="pt-8">
                <button className="text-sm font-semibold text-white border-b border-white hover:border-primary hover:text-primary transition-colors pb-1">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default AboutSection;
