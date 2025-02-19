import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}

export function Button({ children }: ButtonProps) {
    return <button className="bg-blue-700 hover:bg-blue-600 transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed">{children}</button>
}