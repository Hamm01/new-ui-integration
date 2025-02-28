import { createContext, type ReactNode } from "react";


export type Habit = { id: string, name: string, completions: Date[] }

type HabitContext = {
    habit: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void,
    toggleHabit: (id: string, date: Date) => void
}

type HabitProvideProps = {
    children: ReactNode
}

export const HabitContext = createContext<null | HabitContext>(null)

export function HabitProvider({ children }: HabitProvideProps) {

    return <HabitContext value={{}}>{children}</HabitContext>
}