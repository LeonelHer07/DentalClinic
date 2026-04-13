import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { routePaths } from '../../../app/router/routePaths'
import { Button } from '../../../shared/ui/Button'
import { Card } from '../../../shared/ui/Card'
import { Checkbox } from '../../../shared/ui/Checkbox'
import { Input } from '../../../shared/ui/Input'
import { Label } from '../../../shared/ui/Label'
import { useAuth } from '../hooks/useAuth'

export function LoginForm() {
  const navigate = useNavigate()
  const location = useLocation()
  const { signIn } = useAuth()
  const [remember, setRemember] = useState(true)

  const targetPath = location.state?.from || routePaths.dashboard

  const handleSubmit = (event) => {
    event.preventDefault()
    signIn({ remember })
    navigate(targetPath, { replace: true })
  }

  return (
    <Card className="w-full max-w-md border border-white/70 bg-white/90 p-8 shadow-[var(--shadow-card)] sm:p-10">
      <div className="mb-8">
        <h1 className="text-[2rem] font-semibold tracking-[-0.03em] text-slate-900">
          Bienvenido
        </h1>
        <p className="mt-2 text-base text-slate-500">
          Ingresa tus credenciales para acceder al sistema administrativo.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Correo Electronico</Label>
          <Input
            autoComplete="email"
            id="email"
            name="email"
            placeholder="correo@clinicadental.com"
            type="email"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">Contrasena</Label>
          <Input
            autoComplete="current-password"
            id="password"
            name="password"
            placeholder="********"
            type="password"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <Checkbox
            checked={remember}
            id="remember"
            label="Remember me"
            onChange={(event) => setRemember(event.target.checked)}
          />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
            Auth v1
          </span>
        </div>

        <Button className="w-full" type="submit">
          Iniciar sesion
        </Button>
      </form>
    </Card>
  )
}
