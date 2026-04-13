import { useState } from 'react'

import { treatmentCatalog, treatmentCategories, treatmentDurations } from '../data/treatmentMocks'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function TreatmentsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <section className="grid gap-4">
      <div className="space-y-4">
        <PageHeader
          actionLabel="+ Nuevo Tratamiento"
          onAction={() => setIsCreateOpen(true)}
          title="Catalogo de Tratamientos"
        >
          Gestiona los tratamientos y precios
        </PageHeader>

        <SectionPanel>
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <p className="text-xs font-medium text-[var(--color-text-secondary)]">
              Filtrar por categoria:
            </p>
            <div className="w-full max-w-xs">
              <Select defaultValue={treatmentCategories[0]}>
                {treatmentCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </Select>
            </div>
          </div>
        </SectionPanel>

        <SectionPanel>
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)]">
            <div className="hidden grid-cols-[minmax(220px,2.2fr)_140px_90px_110px_80px] gap-4 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] md:grid">
              <span>Tratamiento</span>
              <span>Categoria</span>
              <span>Duracion</span>
              <span>Precio</span>
              <span />
            </div>
            <div className="divide-y divide-[var(--color-border-soft)]">
              {treatmentCatalog.map((treatment) => (
                <article
                  key={treatment.id}
                  className="grid gap-3 px-4 py-3 md:grid-cols-[minmax(220px,2.2fr)_140px_90px_110px_80px] md:items-center"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-xs font-semibold text-[var(--color-brand-700)]">
                      +
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {treatment.name}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        {treatment.description}
                      </p>
                    </div>
                  </div>
                  <Badge tone={treatment.tone}>{treatment.category}</Badge>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {treatment.duration}
                  </span>
                  <span className="text-sm text-[var(--color-text-primary)]">
                    {treatment.price}
                  </span>
                  <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                    <button type="button">e</button>
                    <button type="button">x</button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </SectionPanel>
      </div>

      <DrawerPanel
        onClose={() => setIsCreateOpen(false)}
        open={isCreateOpen}
        subtitle="Agrega un nuevo tratamiento al catalogo"
        title="Nuevo Tratamiento"
      >
          <div className="space-y-4">
            <FormField label="Nombre" required>
              <Input />
            </FormField>
            <FormField label="Descripcion">
              <Input />
            </FormField>
            <FormField label="Categoria" required>
              <Select defaultValue="">
                <option value="">Seleccionar categoria</option>
                {treatmentCategories.slice(1).map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </Select>
            </FormField>
            <div className="grid gap-4 sm:grid-cols-[1fr_120px]">
              <FormField label="Precio Base ($)" required>
                <Input type="number" />
              </FormField>
              <FormField label="Duracion (min)">
                <Select defaultValue={treatmentDurations[0]}>
                  {treatmentDurations.map((duration) => (
                    <option key={duration}>{duration}</option>
                  ))}
                </Select>
              </FormField>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button
                className="min-h-9 px-4 py-2 text-xs"
                onClick={() => setIsCreateOpen(false)}
                variant="ghost"
              >
                Cancelar
              </Button>
              <Button className="min-h-9 px-4 py-2 text-xs">Guardar</Button>
            </div>
          </div>
      </DrawerPanel>
    </section>
  )
}
