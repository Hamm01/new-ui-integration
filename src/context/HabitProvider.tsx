import { isSameDay } from "date-fns";
import { createContext, useContext, useState, type ReactNode } from "react";


export type Habit = { id: string, name: string, completions: Date[] }

type HabitContext = {
    habits: Habit[]
    addHabit: (name: string) => void
    deleteHabit: (id: string) => void,
    toggleHabit: (id: string, date: Date) => void
}

type HabitProvideProps = {
    children: ReactNode
}

export const HabitContext = createContext<null | HabitContext>(null)

export function HabitProvider({ children }: HabitProvideProps) {
    const [habits, setHabits] = useState<Habit[]>([])

    function addHabit(name: string) {
        setHabits(currhabit => [...currhabit, { id: crypto.randomUUID(), name, completions: [new Date()] }])
    }

    function deleteHabit(id: string) {
        setHabits(currhabit => currhabit.filter(h => h.id !== id))
    }
    function toggleHabit(id: string, date: Date) {
        setHabits(curr => (
            curr.map(h => {
                if (h.id !== id) return h

                const alreadyDone = h.completions.some(c => isSameDay(c, date))
                const completions = alreadyDone ? h.completions.filter(c => !isSameDay(c, date)) : [...h.completions, date]
                return { ...h, completions }
            }
            )
        ))
    }
    return <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>{children}</HabitContext>
}

export function useHabits() {
    const habitContext = useContext(HabitContext)
    if (habitContext == null) throw new Error("Null context values")

    return habitContext

}