import type { ComponentProps } from "react"

type Variant = "primary" | "secondary" | "ghost-destructive"

type ButtonProps = {
    variant?: "primary" | "secondary" | "ghost-destructive"
} & ComponentProps<"button">

export function Button({ variant = "primary", ...props }: ButtonProps) {
    return <button {...props} className={`${getVariant(variant)}transition-colors rounded px-2 py-1 disabled:opacity-30 disabled:cursor-not-allowed`} />
}

function getVariant(variant: Variant) {

    switch (variant) {
        case "primary":
            return "bg-blue-700 hover:bg-blue-600"
        case "secondary":
            return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400"
        case "ghost-destructive":
            return "hover:bg-red-600 text-red-800 hover:text-red-200"
        default:
            throw new Error(`Invalid Variant: ${variant satisfies never}`)
    }
}