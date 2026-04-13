import { Label } from './Label'

export function FormField({ children, label, required }) {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        {required ? ' *' : ''}
      </Label>
      {children}
    </div>
  )
}
