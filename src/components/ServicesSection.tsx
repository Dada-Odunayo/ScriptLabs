import {
  Bot,
  CircuitBoard,
  MonitorCog,
  Smartphone,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Service = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Mobile App Development",
    description:
      "Native-feeling mobile products with thoughtful UX, resilient architecture, and room to scale.",
    Icon: Smartphone,
  },
  {
    title: "Web App Development",
    description:
      "Secure, responsive platforms for dashboards, portals, marketplaces, and business workflows.",
    Icon: MonitorCog,
  },
  {
    title: "AI, ML & LLM Solutions",
    description:
      "Practical AI systems, model integrations, automations, and intelligent tools built around real use cases.",
    Icon: Bot,
  },
  {
    title: "Embedded Systems",
    description:
      "Firmware-aware solutions, device interfaces, telemetry, and software for connected engineering systems.",
    Icon: CircuitBoard,
  },
  {
    title: "CMMS Solutions",
    description:
      "Maintenance platforms for asset tracking, work orders, scheduling, inspections, and operations visibility.",
    Icon: Wrench,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 sm:py-28" aria-labelledby="services-heading">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_center,rgba(154,108,255,0.12),transparent_38rem)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="services-heading"
          eyebrow="Services"
          title="Engineering capability across software, AI, and systems"
          description="ScriptLabs is built for technical products where reliability, usability, and implementation detail all matter."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {services.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-glow/45 hover:bg-white/[0.055] hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-slate-950 text-cyan-glow transition group-hover:border-cyan-glow/40 group-hover:text-white">
                <Icon aria-hidden="true" size={24} />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
