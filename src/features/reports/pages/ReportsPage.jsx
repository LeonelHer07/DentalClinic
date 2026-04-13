import {
  dailyIncomeBars,
  dentistDistribution,
  paymentDistribution,
  reportMetrics,
  topTreatments,
} from '../data/reportMocks'
import { MiniMetricCard } from '../../../shared/ui/MiniMetricCard'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function ReportsPage() {
  const maxBarValue = Math.max(...dailyIncomeBars.map((bar) => bar.value), 1)
  const maxTreatmentValue = Math.max(...topTreatments.map((item) => item.value), 1)

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <PageHeader title="Reportes">
          Analisis y estadisticas de la clinica
        </PageHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-1 text-[11px] text-[var(--color-text-muted)]">Desde:</p>
            <Select defaultValue="01/02/2026">
              <option>01/02/2026</option>
            </Select>
          </div>
          <div>
            <p className="mb-1 text-[11px] text-[var(--color-text-muted)]">Hasta:</p>
            <Select defaultValue="11/02/2026">
              <option>11/02/2026</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {reportMetrics.map((item) => (
          <MiniMetricCard key={item.label} {...item} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <SectionPanel title="Ingresos Diarios">
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">
            Ingresos por dia en el periodo seleccionado
          </p>
          <div className="flex h-56 items-end gap-8 border-b border-l border-[var(--color-border-soft)] px-6 pb-6">
            {dailyIncomeBars.map((bar) => (
              <div key={bar.day} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full max-w-[140px] rounded-t-md bg-cyan-600"
                  style={{ height: `${(bar.value / maxBarValue) * 150}px` }}
                />
                <span className="text-xs text-[var(--color-text-muted)]">{bar.day}</span>
              </div>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel title="Citas por Estado">
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">
            Distribucion de citas segun su estado
          </p>
          <div className="flex min-h-56 items-center justify-center">
            <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-cyan-600/95">
              <div className="absolute inset-0 m-auto h-px w-24 bg-white/40" />
            </div>
            <p className="ml-6 text-sm text-cyan-600">Completadas (100%)</p>
          </div>
        </SectionPanel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <SectionPanel title="Ingresos por Metodo de Pago">
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">
            Distribucion de ingresos segun el metodo de pago
          </p>
          <div className="flex min-h-56 flex-col items-center justify-center gap-6 lg:flex-row">
            <div className="relative h-36 w-36 rounded-full bg-[conic-gradient(#22c55e_0_82%,_#0ea5e9_82%_100%)]">
              <div className="absolute inset-8 rounded-full bg-[var(--color-panel)]" />
            </div>
            <div className="space-y-3">
              {paymentDistribution.map((item) => (
                <p key={item.label} className="text-sm" style={{ color: item.color }}>
                  {item.label} ({item.value})
                </p>
              ))}
            </div>
          </div>
        </SectionPanel>

        <SectionPanel title="Tratamientos Mas Realizados">
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">
            Top 10 tratamientos por cantidad
          </p>
          <div className="space-y-4">
            {topTreatments.map((item) => (
              <div key={item.name} className="grid grid-cols-[120px_minmax(0,1fr)] items-center gap-4">
                <span className="text-xs text-[var(--color-text-muted)]">{item.name}</span>
                <div className="h-10 rounded-md bg-[var(--color-surface-subtle)]">
                  <div
                    className="h-full rounded-md bg-emerald-500"
                    style={{ width: `${(item.value / maxTreatmentValue) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </SectionPanel>
      </div>

      <SectionPanel title="Citas por Odontologo">
        <p className="mb-4 text-xs text-[var(--color-text-muted)]">
          Distribucion de citas entre odontologos
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          {dentistDistribution.map((dentist) => (
            <div
              key={dentist.name}
              className="flex items-center gap-3 rounded-2xl bg-[var(--color-surface-subtle)] p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-600 text-xs font-semibold text-white">
                {dentist.badge}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {dentist.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {dentist.appointments}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionPanel>
    </section>
  )
}
