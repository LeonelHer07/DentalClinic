import { useDeferredValue, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { patientRecords } from '../data/patientMocks'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SearchInput } from '../../../shared/ui/SearchInput'
import { SectionPanel } from '../../../shared/ui/SectionPanel'

function matchesPatient(patient, term) {
  if (!term) {
    return true
  }

  const normalized = term.toLowerCase()

  return [
    patient.fullName,
    patient.phone,
    patient.email,
    patient.birthDate,
    patient.registeredAt,
  ]
    .join(' ')
    .toLowerCase()
    .includes(normalized)
}

export function PatientsPage() {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const deferredSearch = useDeferredValue(search)
  const isCreateOpen = searchParams.get('modal') === 'create'

  const filteredPatients = useMemo(
    () =>
      patientRecords.filter((patient) => matchesPatient(patient, deferredSearch)),
    [deferredSearch],
  )

  const openCreateModal = () => setSearchParams({ modal: 'create' })
  const closeCreateModal = () => setSearchParams({})

  return (
    <section className="space-y-4">
      <SectionPanel>
        <PageHeader actionLabel="+ Nuevo Paciente" onAction={openCreateModal} title="Pacientes">
          Gestiona los registros de tus pacientes
        </PageHeader>
      </SectionPanel>

      <SectionPanel>
        <div className="rounded-[1rem] border border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] p-3">
          <SearchInput
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar..."
            value={search}
          />
        </div>
      </SectionPanel>

      <SectionPanel>
        <div className="overflow-hidden rounded-[1rem] border border-[var(--color-border-soft)]">
          <div className="hidden grid-cols-[minmax(220px,2fr)_minmax(180px,1.6fr)_minmax(160px,1.2fr)_minmax(160px,1.2fr)_60px] gap-4 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] md:grid">
            <span>Pacientes</span>
            <span>Contacto</span>
            <span>Fecha de nacimiento</span>
            <span>Registro</span>
            <span />
          </div>

          <div className="divide-y divide-[var(--color-border-soft)]">
            {filteredPatients.map((patient) => (
              <article
                key={patient.id}
                className="grid gap-3 bg-[var(--color-panel)] px-4 py-4 md:grid-cols-[minmax(220px,2fr)_minmax(180px,1.6fr)_minmax(160px,1.2fr)_minmax(160px,1.2fr)_60px] md:items-center"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-danger-soft)] text-[11px] font-semibold text-[var(--color-danger)]">
                    {patient.fullName
                      .split(' ')
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-[var(--color-text-primary)]">
                      {patient.fullName}
                    </p>
                    <p className="truncate text-xs text-[var(--color-text-muted)]">
                      {patient.role}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-[var(--color-text-primary)]">{patient.phone}</p>
                  <p className="truncate text-xs text-[var(--color-text-muted)]">
                    {patient.email}
                  </p>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)]">
                  {patient.birthDate}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {patient.registeredAt}
                </p>
                <button
                  className="justify-self-start text-sm font-semibold text-[var(--color-text-secondary)] transition hover:text-[var(--color-brand-600)] md:justify-self-center"
                  type="button"
                >
                  ver
                </button>
              </article>
            ))}
          </div>
        </div>
      </SectionPanel>

      <DrawerPanel
        onClose={closeCreateModal}
        open={isCreateOpen}
        subtitle="Crea un nuevo registro de paciente"
        title="Nuevo Paciente"
      >
        <div className="space-y-4">
          <FormField label="Nombre Completo" required>
            <Input />
          </FormField>
          <FormField label="Correo Electronico">
            <Input type="email" />
          </FormField>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Telefono" required>
              <Input />
            </FormField>
            <FormField label="Fecha de Nacimiento">
              <Input type="date" />
            </FormField>
          </div>
          <FormField label="Notas">
            <Input />
          </FormField>
          <div className="flex justify-end gap-3 pt-2">
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={closeCreateModal} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Guardar Paciente</Button>
          </div>
        </div>
      </DrawerPanel>
    </section>
  )
}
