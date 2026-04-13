import { useSearchParams } from 'react-router-dom'

import {
  appointmentCalendar,
  appointmentDoctors,
  appointmentPatients,
  appointmentTimes,
} from '../data/appointmentMocks'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function AppointmentsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const isCreateOpen = searchParams.get('modal') === 'create'

  const openCreateModal = () => setSearchParams({ modal: 'create' })
  const closeCreateModal = () => setSearchParams({})

  return (
    <section className="space-y-4">
      <PageHeader actionLabel="+ Nueva Cita" onAction={openCreateModal} title="Citas">
        Gestiona la agenda de la clinica
      </PageHeader>

      <div className="grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)]">
        <SectionPanel title="Calendario">
          <div className="rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] p-4">
            <div className="mb-4 flex items-center justify-between">
              <button className="text-sm text-[var(--color-text-muted)]" type="button">
                &lt;
              </button>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                {appointmentCalendar.monthLabel}
              </p>
              <button className="text-sm text-[var(--color-text-muted)]" type="button">
                &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center text-[11px] uppercase text-[var(--color-text-muted)]">
              {appointmentCalendar.weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-7 gap-2">
              {appointmentCalendar.days.map((day, index) => {
                const isSelected = day === appointmentCalendar.selectedDay
                return (
                  <div
                    key={`${day}-${index}`}
                    className={[
                      'flex h-8 items-center justify-center rounded-full text-xs',
                      isSelected
                        ? 'bg-[var(--color-brand-600)] font-semibold text-white'
                        : 'text-[var(--color-text-secondary)]',
                    ].join(' ')}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>
        </SectionPanel>

        <SectionPanel title="Citas del 11 de febrero, 2026">
          <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-subtle)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border-soft)] text-lg text-[var(--color-text-muted)]">
              |
            </div>
            <p className="text-sm text-[var(--color-text-muted)]">
              No hay citas programadas para este dia
            </p>
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={openCreateModal}>
              Agendar Cita
            </Button>
          </div>
        </SectionPanel>
      </div>

      <DrawerPanel
        onClose={closeCreateModal}
        open={isCreateOpen}
        subtitle="Programa una nueva cita para la agenda"
        title="Nueva Cita"
      >
        <div className="space-y-4">
          <FormField label="Paciente" required>
            <Select defaultValue={appointmentPatients[0]}>
              {appointmentPatients.map((patient) => (
                <option key={patient}>{patient}</option>
              ))}
            </Select>
          </FormField>
          <FormField label="Odontologo" required>
            <Select defaultValue={appointmentDoctors[0]}>
              {appointmentDoctors.map((doctor) => (
                <option key={doctor}>{doctor}</option>
              ))}
            </Select>
          </FormField>
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="Fecha" required>
              <Input type="date" />
            </FormField>
            <FormField label="Hora" required>
              <Select defaultValue={appointmentTimes[0]}>
                {appointmentTimes.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </Select>
            </FormField>
          </div>
          <FormField label="Notas">
            <Input />
          </FormField>
          <div className="flex justify-end gap-3 pt-2">
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={closeCreateModal} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Guardar Cita</Button>
          </div>
        </div>
      </DrawerPanel>
    </section>
  )
}
