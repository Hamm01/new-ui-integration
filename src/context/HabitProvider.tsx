import { isSameDay } from "date-fns";
import { type ReactNode } from "react";
import { HabitContext, type Habit } from "./UseHabit";
import { useLocalStorage } from "../hooks/useLocalStorage";


type HabitProvideProps = {
    children: ReactNode
}

export function HabitProvider({ children }: HabitProvideProps) {
    const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", [])

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

