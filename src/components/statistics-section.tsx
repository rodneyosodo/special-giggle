import { Cpu, Network, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Zap,
    value: "<10ms",
    label: "Boot Time",
    description: "Near-instant Wasm startup",
  },
  {
    icon: Cpu,
    value: "Cloud to MCU",
    label: "Device Range",
    description: "From servers to microcontrollers",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Sandboxed",
    description: "Secure workload isolation",
  },
  {
    icon: Network,
    value: "Multi-Protocol",
    label: "Connectivity",
    description: "MQTT, CoAP, WebSocket support",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <div className="mb-5 flex justify-center">
            <Badge variant="default">By the numbers</Badge>
          </div>
          <h2 className="text-3xl font-semibold text-balance md:text-5xl">
            WebAssembly Performance at Scale
          </h2>
          <p className="text-muted-foreground mt-6 text-base text-balance md:text-lg">
            Propeller delivers unmatched performance, security, and flexibility
            for WebAssembly orchestration across any environment.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-background rounded-lg border p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 mx-auto mb-4 flex size-12 items-center justify-center rounded-full">
                  <Icon className="text-primary size-6" />
                </div>
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="mt-2 text-lg font-semibold">{stat.label}</div>
                <p className="text-muted-foreground mt-1 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
