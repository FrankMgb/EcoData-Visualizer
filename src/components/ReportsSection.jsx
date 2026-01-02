const ReportsSection = () => {
    return (
        <section className="py-24 px-6 space-y-32">
            {/* The Reports */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    Analysis done for you
                </div>
                <h2 className="text-5xl font-bold text-white">
                    the reports
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    ClimateFlow continuously analyzes trusted climate datasets and packages the results into ready-made reports. Instead of wrestling with raw numbers, you get curated views that highlight what&apos;s changing, where, and why it matters—updated as new data becomes available.
                </p>
            </div>

            {/* Custom Built Reports */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    You say it, we&apos;ll build it
                </div>
                <h2 className="text-4xl font-bold text-white">
                    Custom Built Reports
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Need something specific? Describe the questions you&apos;re trying to answer, and ClimateFlow assembles a custom report around them—selecting the right indicators, time ranges, and narratives. Whether it&apos;s a briefing for stakeholders or a deep dive for a project, the report is tailored to your context, not just the data.
                </p>

                <div className="pt-8">
                    <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ReportsSection;
