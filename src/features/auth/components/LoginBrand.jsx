import { BRAND_ASSETS } from '../../../shared/constants/assets'

export function LoginBrand() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 flex h-36 w-36 items-center justify-center overflow-hidden">
        <img
          alt="Logo de DentalClinic"
          className="h-full w-full object-contain"
          src={BRAND_ASSETS.logo}
        />
      </div>

      <p className="text-[2rem] font-semibold tracking-[-0.03em] text-slate-900">
        DentalCare
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">
        Sistema de Gestion Odontologica
      </p>
    </div>
  )
}
