import { MarqueeEffect } from "@/components/ui/marquee-effect";

const logos = [
  {
    name: "WebAssembly",
    img: "https://cdn.worldvectorlogo.com/logos/webassembly-1.svg",
  },
  {
    name: "Kubernetes",
    img: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
  },
  {
    name: "Docker",
    img: "https://cdn.worldvectorlogo.com/logos/docker-3.svg",
  },
  {
    name: "Zephyr RTOS",
    img: "https://www.zephyrproject.org/wp-content/uploads/2021/11/zephyr_logo_r_color_negative_big.svg",
  },
  {
    name: "Rust",
    img: "https://cdn.worldvectorlogo.com/logos/rust.svg",
  },
  {
    name: "Go",
    img: "https://cdn.worldvectorlogo.com/logos/gopher.svg",
  },
  {
    name: "Linux Foundation",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Linux_Foundation_logo_2013.svg/1280px-Linux_Foundation_logo_2013.svg.png",
  },
];

export default function PartnerCloudSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="space-y-2 text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Built on Industry Standards
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base text-balance md:text-lg">
            Propeller seamlessly integrates with leading WebAssembly runtimes,
            container orchestration platforms, and IoT protocols to power your
            cloud-edge infrastructure.
          </p>
        </header>
        {logos.length > 0 && (
          <MarqueeEffect
            className="mask-r-from-80% mask-l-from-80%"
            speed={30}
            gap={40}
          >
            {logos.map((logo) => (
              <div key={logo.name} className="flex items-center">
                <img
                  src={logo.img}
                  className="w-[80px] h-[60px] sm:w-[100px] sm:h-[80px] lg:w-[130px] lg:h-[100px] object-contain"
                  alt={logo.name}
                />
              </div>
            ))}
          </MarqueeEffect>
        )}
      </div>
    </section>
  );
}
