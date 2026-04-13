import { UI_ASSETS } from '../../../shared/constants/assets'

export const dashboardMetrics = [
  {
    label: 'Total de Pacientes',
    value: '10',
    accent: '#3b82f6',
    icon: UI_ASSETS.userIcon,
  },
  {
    label: 'Citas de Hoy',
    value: '10',
    accent: '#22c55e',
    icon: UI_ASSETS.calendarIcon,
  },
  {
    label: 'Presupuestos Pendientes',
    value: '10',
    accent: '#f59e0b',
    icon: UI_ASSETS.estimatesIcon,
  },
  {
    label: 'Ingresos del Mes',
    value: 'USD 200.00',
    accent: '#a855f7',
    icon: UI_ASSETS.incomeIcon,
  },
]

export const todayAppointments = []

export const recentPatients = [
  { id: 'p-1', fullName: 'Bryan Castellon', phone: '87551847' },
  { id: 'p-2', fullName: 'Bryan Castellon', phone: '87551847' },
  { id: 'p-3', fullName: 'Bryan Castellon', phone: '87551847' },
  { id: 'p-4', fullName: 'Bryan Castellon', phone: '87551847' },
  { id: 'p-5', fullName: 'Bryan Castellon', phone: '87551847' },
]

export const quickActions = [
  {
    label: 'Nuevo Paciente',
    accent: '#3b82f6',
    icon: UI_ASSETS.userIcon,
    actionType: 'patient',
  },
  {
    label: 'Agendar Cita',
    accent: '#22c55e',
    icon: UI_ASSETS.calendarIcon,
    actionType: 'appointment',
  },
  {
    label: 'Crear Presupuesto',
    accent: '#f59e0b',
    icon: UI_ASSETS.estimatesIcon,
    actionType: 'estimate',
  },
  {
    label: 'Registrar Pago',
    accent: '#a855f7',
    icon: UI_ASSETS.paymentsIcon,
    actionType: 'payment',
  },
]
