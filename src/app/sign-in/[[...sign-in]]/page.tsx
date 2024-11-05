import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 relative text-white">
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        <SignIn />
      </div>
    </div>
  )
}