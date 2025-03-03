import { useState, type SubmitEvent } from "react";
import { Button } from "./Buttons";
import { useHabits } from "../context/HabitProvider";



export function HabitForm() {
    const [name, setName] = useState("")
    const { addHabit } = useHabits()

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        if (name.trim() === "")
            return
        setName("")
        addHabit(name)
    }

    return <form className="flex gap-2" onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className="rounded-lg flex-1 bg-zinc-800 px-4 outline focus-visible:ring-2 focus-visible:ring-blue-600"
            placeholder="New habit..." />

        <Button disabled={name.trim() === ""} className="rounded-xl px-4 py-2 font-medium">Add Habit</Button>
    </form>
}