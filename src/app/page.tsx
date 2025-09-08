'use client'

import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/clerk-react"

const HomePage = () => {
  return (
    <div>HomePage

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default HomePage