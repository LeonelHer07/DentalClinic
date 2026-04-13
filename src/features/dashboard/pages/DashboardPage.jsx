import { useState } from 'react'

import {
  dashboardMetrics,
  quickActions,
  recentPatients,
  todayAppointments,
} from '../data/dashboardMocks'
import { appointmentDoctors, appointmentPatients, appointmentTimes } from '../../appointments/data/appointmentMocks'
import {
  estimateDoctors,
  estimatePatients,
  estimatePieces,
  estimateTreatments,
} from '../../estimates/data/estimateMocks'
import { paymentMethods, paymentPatients } from '../../payments/data/paymentMocks'
import { DashboardWelcome } from '../components/DashboardWelcome'
import { QuickActionCard } from '../components/QuickActionCard'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'
import { StatCard } from '../../../shared/ui/StatCard'

function QuickActionModal({ actionType, onClose }) {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0])

  if (!actionType) {
    return null
  }

  const modalConfig = {
    patient: {
      title: 'Nuevo Paciente',
      subtitle: 'Crea un nuevo registro de paciente',
      content: (
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
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Guardar Paciente</Button>
          </div>
        </div>
      ),
    },
    appointment: {
      title: 'Nueva Cita',
      subtitle: 'Programa una nueva cita para la agenda',
      content: (
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
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Guardar Cita</Button>
          </div>
        </div>
      ),
    },
    estimate: {
      title: 'Nuevo Presupuesto',
      subtitle: 'Crea un presupuesto de tratamiento para el paciente',
      content: (
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
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Crear Presupuesto</Button>
          </div>
        </div>
      ),
    },
    payment: {
      title: 'Registrar Pago',
      subtitle: 'Registra un nuevo pago de paciente',
      content: (
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
            <Button className="min-h-9 px-4 py-2 text-xs" onClick={onClose} variant="ghost">
              Cancelar
            </Button>
            <Button className="min-h-9 px-4 py-2 text-xs">Registrar Pago</Button>
          </div>
        </div>
      ),
    },
  }

  const selectedModal = modalConfig[actionType]

  return (
    <DrawerPanel
      onClose={onClose}
      open={Boolean(actionType)}
      subtitle={selectedModal.subtitle}
      title={selectedModal.title}
    >
      {selectedModal.content}
    </DrawerPanel>
  )
}

export function DashboardPage() {
  const [activeQuickAction, setActiveQuickAction] = useState(null)

  return (
    <section className="space-y-4">
      <DashboardWelcome />

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {dashboardMetrics.map((metric) => (
          <StatCard key={metric.label} {...metric} />
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_320px]">
        <SectionPanel actionLabel="Ver todas" title="Citas de Hoy">
          {todayAppointments.length === 0 ? (
            <div className="flex min-h-56 flex-col items-center justify-center gap-3 rounded-[1.25rem] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-subtle)] text-center text-[var(--color-text-muted)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] text-sm font-semibold">
                |
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)]">
                  No hay citas programadas para hoy
                </p>
                <p className="mt-1 text-xs">
                  Agenda libre para el dia actual
                </p>
              </div>
            </div>
          ) : null}
        </SectionPanel>

        <SectionPanel actionLabel="Ver todos" title="Pacientes Recientes">
          <div className="space-y-3">
            {recentPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center gap-3 rounded-2xl border border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-3 py-2.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-xs font-semibold text-[var(--color-brand-700)]">
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
                    {patient.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionPanel>
      </div>

      <SectionPanel title="Acciones Rapidas">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.label}
              {...action}
              onClick={() => setActiveQuickAction(action.actionType)}
            />
          ))}
        </div>
      </SectionPanel>

      <QuickActionModal
        actionType={activeQuickAction}
        onClose={() => setActiveQuickAction(null)}
      />
    </section>
  )
}
