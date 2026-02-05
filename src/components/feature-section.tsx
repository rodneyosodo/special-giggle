import {
  CloudyIcon,
  NetworkIcon,
  PackageIcon,
  ServerIcon,
  ShieldCheckIcon,
  ZapIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function FeatureSection() {
  return (
    <section id="features" className="py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mx-auto max-w-2xl lg:text-center">
          <Badge variant="outline" className="text-indigo-600">
            Features
          </Badge>
          <h3 className="font-heading mt-4 text-4xl sm:text-5xl lg:text-balance">
            WebAssembly Orchestration at Scale
          </h3>
          <p className="text-muted-foreground mt-6 text-lg">
            Deploy portable, secure, and high-performance Wasm workloads across
            any environment with Propeller's comprehensive feature set.
          </p>
        </header>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <CloudyIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                Cloud-Edge Orchestration
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Deploy Wasm workloads effortlessly across diverse environments,
                from robust cloud servers to lightweight microcontrollers
                running Zephyr RTOS.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <ZapIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                Fast Boot Times
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Take advantage of Wasm's near-instant startup for efficient
                workload execution. Deploy and scale functions in milliseconds.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <PackageIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                OCI Registry Support
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Push and pull Wasm workloads from OCI-compliant registries for
                streamlined workflow integration and version management.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <ShieldCheckIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                Security at the Core
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Propeller ensures secure workload execution and communication
                for IoT environments with sandboxed Wasm runtimes.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <NetworkIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                Powerful Service Mesh
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Integrates with SuperMQ for secure, efficient IoT device
                communication across your entire infrastructure.
              </dd>
            </div>

            <div className="relative pl-16">
              <dt className="text-base font-semibold">
                <div className="bg-primary absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                  <ServerIcon
                    aria-hidden="true"
                    className="text-primary-foreground size-6"
                  />
                </div>
                FaaS Deployment
              </dt>
              <dd className="text-muted-foreground mt-2 text-base/7">
                Enable Function-as-a-Service capabilities for scalable and
                event-driven applications across the cloud-edge continuum.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
