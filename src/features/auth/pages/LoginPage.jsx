import { LoginBrand } from '../components/LoginBrand'
import { LoginForm } from '../components/LoginForm'

export function LoginPage() {
  return (
    <section className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(280px,1fr)_minmax(380px,460px)] lg:gap-20">
      <LoginBrand />
      <LoginForm />
    </section>
  )
}
