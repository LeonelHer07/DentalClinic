import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { paymentMethods, paymentPatients, paymentRows, paymentSummary } from '../data/paymentMocks'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { MiniMetricCard } from '../../../shared/ui/MiniMetricCard'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function PaymentsPage() {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0])
  const [searchParams, setSearchParams] = useSearchParams()
  const isCreateOpen = searchParams.get('modal') === 'create'

  const openCreateModal = () => setSearchParams({ modal: 'create' })
  const closeCreateModal = () => setSearchParams({})

  return (
    <section className="grid gap-4">
      <div className="space-y-4">
        <PageHeader
          actionLabel="+ Registrar Pago"
          onAction={openCreateModal}
          title="Pagos"
        >
          Registra y gestiona los pagos de pacientes
        </PageHeader>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {paymentSummary.map((item) => (
            <MiniMetricCard key={item.label} {...item} />
          ))}
        </div>

        <SectionPanel>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <p className="text-xs font-medium text-[var(--color-text-secondary)]">
                Filtrar por metodo:
              </p>
              <div className="w-full max-w-[180px]">
                <Select defaultValue="Todos los metodos">
                  <option>Todos los metodos</option>
                  {paymentMethods.map((method) => (
                    <option key={method}>{method}</option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-[var(--color-text-muted)]">Total filtrado</p>
              <p className="text-sm font-semibold text-[var(--color-brand-600)]">
                USD 283.00
              </p>
            </div>
          </div>
        </SectionPanel>

        <SectionPanel>
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)]">
            <div className="hidden grid-cols-[110px_1.2fr_120px_1fr_110px] gap-4 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] lg:grid">
              <span>Fecha</span>
              <span>Paciente</span>
              <span>Metodo</span>
              <span>Presupuesto</span>
              <span>Monto</span>
            </div>
            <div className="divide-y divide-[var(--color-border-soft)]">
              {paymentRows.map((row) => (
                <article
                  key={row.id}
                  className="grid gap-3 px-4 py-3 lg:grid-cols-[110px_1.2fr_120px_1fr_110px] lg:items-center"
                >
                  <span className="text-sm text-[var(--color-text-secondary)]">{row.date}</span>
                  <span className="text-sm text-[var(--color-text-primary)]">{row.patient}</span>
                  <Badge tone={row.tone}>{row.method}</Badge>
                  <span className="text-sm text-[var(--color-text-secondary)]">{row.estimate}</span>
                  <span className="text-sm text-[var(--color-text-primary)]">{row.amount}</span>
                </article>
              ))}
            </div>
          </div>
        </SectionPanel>
      </div>

      <DrawerPanel
        onClose={closeCreateModal}
        open={isCreateOpen}
        subtitle="Registra un nuevo pago de paciente"
        title="Registrar Pago"
      >
          <div className="space-y-4">
            <FormField label="Paciente" required>
              <Select defaultValue={paymentPatients[0]}>
                {paymentPatients.map((patient) => (
                  <option key={patient}>{patient}</option>
                ))}
              </Select>
            </FormField>
            <FormField label="Monto ($)" required>
              <Input type="number" />
            </FormField>

            <div className="space-y-2">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Metodo de Pago
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <button
                    key={method}
                    className={[
                      'min-h-10 rounded-[var(--radius-control)] border px-3 text-sm font-medium transition',
                      selectedMethod === method
                        ? 'border-[var(--color-brand-600)] bg-[var(--color-brand-600)] text-white'
                        : 'border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)]',
                    ].join(' ')}
                    onClick={() => setSelectedMethod(method)}
                    type="button"
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <FormField label="Notas">
              <Input />
            </FormField>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                className="min-h-9 px-4 py-2 text-xs"
                onClick={closeCreateModal}
                variant="ghost"
              >
                Cancelar
              </Button>
              <Button className="min-h-9 px-4 py-2 text-xs">Registrar Pago</Button>
            </div>
          </div>
      </DrawerPanel>
    </section>
  )
}
