import { Button } from "./Buttons";

export function HabitForm() {
    return <form className="flex gap-2">
        <input type="text" className="flex-1 rounded-lg bg-zinc-800 px-4 outline focus-visible:ring-2 focus-visible:ring-blue-600" placeholder="New habit..." />
        <Button className="rounded-xl px-4 py-2 font-medium">Add Habit</Button>
    </form>
}