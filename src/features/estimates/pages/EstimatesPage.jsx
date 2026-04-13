import { useSearchParams } from 'react-router-dom'

import {
  estimateDoctors,
  estimatePatients,
  estimatePieces,
  estimateRows,
  estimateStatuses,
  estimateTreatments,
} from '../data/estimateMocks'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function EstimatesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCreateOpen = searchParams.get('modal') === 'create'

  const openCreateModal = () => setSearchParams({ modal: 'create' })
  const closeCreateModal = () => setSearchParams({})

  return (
    <section className="grid gap-4">
      <div className="space-y-4">
        <PageHeader
          actionLabel="+ Nuevo Presupuesto"
          onAction={openCreateModal}
          title="Presupuestos"
        >
          Crea y gestiona presupuestos de tratamiento
        </PageHeader>

        <SectionPanel>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <p className="text-xs font-medium text-[var(--color-text-secondary)]">
              Filtrar por estado:
            </p>
            <div className="w-full max-w-[160px]">
              <Select defaultValue={estimateStatuses[0]}>
                {estimateStatuses.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </Select>
            </div>
          </div>
        </SectionPanel>

        <SectionPanel>
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)]">
            <div className="hidden grid-cols-[minmax(180px,1.6fr)_minmax(150px,1.2fr)_120px_110px_90px_70px] gap-4 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] lg:grid">
              <span>Presupuesto</span>
              <span>Paciente</span>
              <span>Tratamientos</span>
              <span>Estado</span>
              <span>Total</span>
              <span />
            </div>
            <div className="divide-y divide-[var(--color-border-soft)]">
              {estimateRows.map((estimate) => (
                <article
                  key={estimate.id}
                  className="grid gap-3 px-4 py-3 lg:grid-cols-[minmax(180px,1.6fr)_minmax(150px,1.2fr)_120px_110px_90px_70px] lg:items-center"
                >
                  <div>
                    <p className="text-sm font-medium text-[var(--color-text-primary)]">
                      {estimate.id}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)]">{estimate.date}</p>
                  </div>
                  <p className="text-sm text-[var(--color-text-primary)]">{estimate.patient}</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">{estimate.treatments}</p>
                  <Badge tone={estimate.statusTone}>{estimate.status}</Badge>
                  <p className="text-sm text-[var(--color-text-primary)]">{estimate.total}</p>
                  <button className="text-xs font-semibold text-[var(--color-text-secondary)]" type="button">
                    Ver
                  </button>
                </article>
              ))}
            </div>
          </div>
        </SectionPanel>
      </div>

      <DrawerPanel
        onClose={closeCreateModal}
        open={isCreateOpen}
        subtitle="Crea un presupuesto de tratamiento para el paciente"
        title="Nuevo Presupuesto"
      >
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Paciente" required>
                <Select defaultValue={estimatePatients[0]}>
                  {estimatePatients.map((patient) => (
                    <option key={patient}>{patient}</option>
                  ))}
                </Select>
              </FormField>
              <FormField label="Odontologo" required>
                <Select defaultValue={estimateDoctors[0]}>
                  {estimateDoctors.map((doctor) => (
                    <option key={doctor}>{doctor}</option>
                  ))}
                </Select>
              </FormField>
            </div>

            <div className="rounded-2xl border border-[var(--color-border-soft)] p-4">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                Agregar Tratamiento
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,1fr)_80px_60px_42px]">
                <FormField label="Tratamiento">
                  <Select defaultValue={estimateTreatments[0]}>
                    {estimateTreatments.map((treatment) => (
                      <option key={treatment}>{treatment}</option>
                    ))}
                  </Select>
                </FormField>
                <FormField label="Pieza">
                  <Select defaultValue={estimatePieces[0]}>
                    {estimatePieces.map((piece) => (
                      <option key={piece}>{piece}</option>
                    ))}
                  </Select>
                </FormField>
                <FormField label="Cant.">
                  <Input defaultValue="1" type="number" />
                </FormField>
                <div className="flex items-end">
                  <Button className="min-h-10 w-full px-0">+</Button>
                </div>
              </div>
            </div>

            <FormField label="Notas">
              <Input />
            </FormField>

            <div className="flex justify-end gap-3">
              <Button
                className="min-h-9 px-4 py-2 text-xs"
                onClick={closeCreateModal}
                variant="ghost"
              >
                Cancelar
              </Button>
              <Button className="min-h-9 px-4 py-2 text-xs">Crear Presupuesto</Button>
            </div>
          </div>
      </DrawerPanel>
    </section>
  )
}
