import { useState } from 'react'

import { roleSummary, systemUsers, userRoles } from '../data/settingsMocks'
import { Badge } from '../../../shared/ui/Badge'
import { Button } from '../../../shared/ui/Button'
import { DrawerPanel } from '../../../shared/ui/DrawerPanel'
import { FormField } from '../../../shared/ui/FormField'
import { Input } from '../../../shared/ui/Input'
import { MiniMetricCard } from '../../../shared/ui/MiniMetricCard'
import { PageHeader } from '../../../shared/ui/PageHeader'
import { SectionPanel } from '../../../shared/ui/SectionPanel'
import { Select } from '../../../shared/ui/Select'

export function SettingsPage() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  return (
    <section className="grid gap-4">
      <div className="space-y-4">
        <PageHeader
          actionLabel="+ Nuevo Usuario"
          onAction={() => setIsCreateOpen(true)}
          title="Configuracion"
        >
          Gestiona usuarios y configuracion del sistema
        </PageHeader>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {roleSummary.map((item) => (
            <MiniMetricCard key={item.label} {...item} value={item.count} />
          ))}
        </div>

        <SectionPanel title="Usuarios del Sistema">
          <p className="mb-4 text-xs text-[var(--color-text-muted)]">
            Gestiona los usuarios y sus permisos
          </p>
          <div className="overflow-hidden rounded-2xl border border-[var(--color-border-soft)]">
            <div className="hidden grid-cols-[minmax(220px,1.8fr)_120px_100px_90px_70px] gap-4 border-b border-[var(--color-border-soft)] bg-[var(--color-surface-subtle)] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)] lg:grid">
              <span>Usuario</span>
              <span>Rol</span>
              <span>Telefono</span>
              <span>Estado</span>
              <span />
            </div>
            <div className="divide-y divide-[var(--color-border-soft)]">
              {systemUsers.map((user) => (
                <article
                  key={user.id}
                  className="grid gap-3 px-4 py-3 lg:grid-cols-[minmax(220px,1.8fr)_120px_100px_90px_70px] lg:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-brand-50)] text-[11px] font-semibold text-[var(--color-brand-700)]">
                      {user.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                        {user.name}
                      </p>
                      <p className="text-xs text-[var(--color-text-muted)]">{user.email}</p>
                    </div>
                  </div>
                  <Badge tone={user.roleTone}>{user.role}</Badge>
                  <span className="text-sm text-[var(--color-text-secondary)]">{user.phone}</span>
                  <Badge tone="green">{user.status}</Badge>
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
        subtitle="Crea una nueva cuenta de usuario"
        title="Nuevo Usuario"
      >
          <div className="space-y-4">
            <FormField label="Nombre Completo" required>
              <Input />
            </FormField>
            <FormField label="Correo Electronico" required>
              <Input type="email" />
            </FormField>
            <FormField label="Contrasena" required>
              <Input type="password" />
            </FormField>
            <FormField label="Telefono">
              <Input />
            </FormField>
            <FormField label="Rol" required>
              <Select defaultValue={userRoles[0]}>
                {userRoles.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </Select>
            </FormField>
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
