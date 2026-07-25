"use client";

import { motion } from "framer-motion";
import { ExternalLink, Cpu, Zap, Table2, Package, Gauge } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

function SpecTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5">
      <table className="w-full text-sm">
        <tbody>
          {specs.map((spec, i) => (
            <tr
              key={spec.label}
              className={cn(
                "border-b border-white/5 last:border-0",
                i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"
              )}
            >
              <td className="px-4 py-2.5 text-muted-foreground w-2/5 font-medium">
                {spec.label}
              </td>
              <td className="px-4 py-2.5 text-foreground/90">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ComponentsTable({
  components,
}: {
  components: { part: string; manufacturer: string; function: string; qty: number }[];
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/5">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Part</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden sm:table-cell">Manufacturer</th>
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden md:table-cell">Function</th>
            <th className="px-4 py-2.5 text-right font-medium text-muted-foreground">Qty</th>
          </tr>
        </thead>
        <tbody>
          {components.map((c, i) => (
            <tr
              key={c.part}
              className={cn(
                "border-b border-white/5 last:border-0",
                i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"
              )}
            >
              <td className="px-4 py-2.5 font-mono text-xs text-foreground/90">
                {c.part}
              </td>
              <td className="px-4 py-2.5 text-xs text-muted-foreground hidden sm:table-cell">
                {c.manufacturer}
              </td>
              <td className="px-4 py-2.5 text-xs text-muted-foreground hidden md:table-cell">
                {c.function}
              </td>
              <td className="px-4 py-2.5 text-right text-xs text-muted-foreground">
                {c.qty}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PowerStage({ stage, description }: { stage: string; description: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.015] p-4">
      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10">
        <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-semibold text-foreground/80">{stage}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  mainboard: <Cpu className="h-5 w-5" />,
  relay: <Zap className="h-5 w-5" />,
};

export function Hardware() {
  const { boards } = siteConfig;

  return (
    <section id="hardware" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          label="Hardware"
          title="Current Boards"
          description="The ESP_HOME ecosystem currently includes two completed board designs. All design files, schematics, and BOMs are open and available in the repository."
        />

        {boards.map((board, bIdx) => (
          <motion.article
            key={board.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: bIdx * 0.15 }}
            className={cn(
              "mt-16 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent overflow-hidden",
              bIdx === 0 ? "glow" : "glow-orange"
            )}
          >
            {/* Header */}
            <div className="border-b border-white/5 bg-white/[0.02] px-6 py-6 sm:px-8 sm:py-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                    bIdx === 0 ? "bg-blue-600/10 text-blue-400" : "bg-orange-600/10 text-orange-400"
                  )}>
                    {iconMap[board.id]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{board.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{board.tagline}</p>
                  </div>
                </div>
                <span className={cn(
                  "inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium",
                  board.status === "Production Ready" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"
                )}>
                  <span className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    board.status === "Production Ready" ? "bg-green-400" : "bg-yellow-400"
                  )} />
                  {board.status}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-3xl">
                {board.description}
              </p>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              {/* MCU & Features */}
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-1">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Cpu className="h-4 w-4 text-blue-400" />
                    Microcontroller
                  </h4>
                  <SpecTable specs={[
                    { label: "Module", value: board.mcu },
                    { label: "Core", value: board.mcuCores },
                    { label: "Flash", value: board.mcuFlash },
                    { label: "Wireless", value: board.mcuWireless },
                  ]} />
                </div>
                <div className="lg:col-span-2">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Gauge className="h-4 w-4 text-blue-400" />
                    Key Features
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {board.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.015] px-3.5 py-2.5 text-xs leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400/60" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Full Specifications */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Table2 className="h-4 w-4 text-blue-400" />
                  Full Specifications
                </h4>
                <SpecTable specs={board.specifications} />
              </div>

              {/* Key Components */}
              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <Package className="h-4 w-4 text-blue-400" />
                  Key Components
                </h4>
                <ComponentsTable components={board.keyComponents} />
              </div>

              {/* Power Architecture (mainboard only) */}
              {"powerArchitecture" in board && board.powerArchitecture && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Zap className="h-4 w-4 text-blue-400" />
                    Power Architecture
                  </h4>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {board.powerArchitecture.map((stage) => (
                      <PowerStage
                        key={stage.stage}
                        stage={stage.stage}
                        description={stage.description}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* GPIO (mainboard only) */}
              {"gpio" in board && board.gpio && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Table2 className="h-4 w-4 text-blue-400" />
                    GPIO Assignment
                  </h4>
                  <div className="overflow-hidden rounded-xl border border-white/5">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Pin</th>
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Function</th>
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden sm:table-cell">Type</th>
                          <th className="px-4 py-2.5 text-left font-medium text-muted-foreground hidden md:table-cell">Notes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {board.gpio.map((pin, i) => (
                          <tr
                            key={pin.pin}
                            className={cn(
                              "border-b border-white/5 last:border-0",
                              i % 2 === 0 ? "bg-white/[0.015]" : "bg-transparent"
                            )}
                          >
                            <td className="px-4 py-2.5 font-mono text-xs text-foreground/90">{pin.pin}</td>
                            <td className="px-4 py-2.5 text-xs text-foreground/80">{pin.function}</td>
                            <td className="px-4 py-2.5 text-xs text-muted-foreground hidden sm:table-cell">{pin.type}</td>
                            <td className="px-4 py-2.5 text-xs text-muted-foreground hidden md:table-cell">{pin.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* BOM Summary (mainboard only) */}
              {"bom" in board && board.bom && (
                <div>
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Package className="h-4 w-4 text-blue-400" />
                    Bill of Materials
                  </h4>
                  <p className="mb-3 text-xs text-muted-foreground">
                    {board.bom.totalUnique} unique components / {board.bom.totalParts} total parts
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {board.bom.categories.map((cat) => (
                      <div
                        key={cat.name}
                        className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.015] px-4 py-3"
                      >
                        <span className="text-xs text-muted-foreground">{cat.name}</span>
                        <span className="text-xs font-mono text-foreground/70">
                          {cat.total}x
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* View Hardware Button */}
              <div className="flex">
                <Button as="a" href={board.href} variant="secondary" size="sm">
                  View Hardware Files
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
