export const paymentSummary = [
  { label: 'Efectivo', value: 'USD 50.00', accent: '#4ade80' },
  { label: 'Tarjeta', value: 'USD 233.00', accent: '#60a5fa' },
  { label: 'Transferencia', value: 'USD 0.00', accent: '#a78bfa' },
  { label: 'Cheque', value: 'USD 0.00', accent: '#fbbf24' },
]

export const paymentRows = [
  { id: 'pay-1', date: '7 feb 2026', patient: 'Juan Perez', method: 'Tarjeta', tone: 'blue', estimate: '-', amount: 'USD 183.00' },
  { id: 'pay-2', date: '6 feb 2026', patient: 'Carlos Rodriguez', method: 'Tarjeta', tone: 'blue', estimate: '-', amount: 'USD 100.00' },
  { id: 'pay-3', date: '6 feb 2026', patient: 'Test Patient', method: 'Efectivo', tone: 'green', estimate: '-', amount: 'USD 50.00' },
]

export const paymentPatients = ['Seleccionar paciente', 'Juan Perez', 'Carlos Rodriguez', 'Test Patient']
export const paymentMethods = ['Efectivo', 'Tarjeta', 'Transferencia', 'Cheque']
