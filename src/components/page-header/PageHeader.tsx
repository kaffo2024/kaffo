interface Props {
  background: string;
  title: string;
  subtitle?: string;
  titleLevel?: 1 | 2 | 3 | 4 | 5;
  overlayColor?: "dark" | "calypso" | "koromiko";
  minHeight?: "sm" | "md" | "lg" | "xl";
}

function PageHeader({
  background,
  title,
  subtitle,
  titleLevel = 1,
  overlayColor = "dark",
  minHeight = "md",
}: Props) {
  const overlayClasses = {
    dark: "bg-black/50",
    calypso: "bg-calypso-900/60",
    koromiko: "bg-koromiko-900/60",
  };

  const heightClasses = {
    sm: "min-h-[30vh]",
    md: "min-h-[40vh]",
    lg: "min-h-[50vh]",
    xl: "min-h-[60vh]",
  };

  const titleSizeClasses = {
    1: "text-3xl sm:text-4xl lg:text-5xl",
    2: "text-2xl sm:text-3xl lg:text-4xl",
    3: "text-xl sm:text-2xl lg:text-3xl",
    4: "text-lg sm:text-xl lg:text-2xl",
    5: "text-base sm:text-lg lg:text-xl",
  };

  return (
    <div
      className={`relative ${heightClasses[minHeight]} flex justify-center items-center flex-col w-full overflow-hidden`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${background})`,
        }}
      />

      <div
        className={`absolute inset-0 ${overlayClasses[overlayColor]} z-10`}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1
          className={`${titleSizeClasses[titleLevel]} font-bold text-white mb-4 leading-tight`}
          data-seo="true"
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* pulsating dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" />
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
        <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-300" />
      </div>
    </div>
  );
}

export default PageHeader;
