import { useHabits, type Habit } from "../context/UseHabit"
import { Button } from "./Buttons"
import { format, isFuture, isSameDay, subDays } from "date-fns"

type HabitListProps = {
    visibleDates: Date[]
}

export function HabitList({ visibleDates }: HabitListProps) {

    const { habits } = useHabits()
    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one to above to get started</p>
    }
    return <div className="flex flex-col gap-3">
        {
            habits.map(habit => (
                <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates} />
            ))
        }
    </div>
}

type HabitItemprops = {
    habit: Habit
} & HabitListProps
function HabitItem({ habit, visibleDates }: HabitItemprops) {

    const { deleteHabit, toggleHabit } = useHabits()
    const streak = getStreak(habit.completions)

    return <div className="rounded-xl bg-zinc-800 p-4 flex flex-col gap-3" >
        <div className="flex items-center justify-between ">
            <div className="flex gap-2">
                <span className="font-medium">{habit.name}</span>
                {streak !== 0 && (<span className="text-sm text-amber-400">💪 {streak}</span>)}

            </div>
            <Button variant="ghost-destructive" className="text-xs" onClick={() => deleteHabit(habit.id)}>Delete</Button>
        </div>
        <div className="flex gap-1.5 ">
            {visibleDates.map(date => (
                <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs" key={date.toISOString()} disabled={isFuture(date)}
                    variant={habit.completions.some(d => isSameDay(d, date)) ? "primary" : "secondary"}
                    onClick={() => toggleHabit(habit.id, date)} >
                    <span className="font-medium">{format(date, "EEE")}</span>
                    <span>{format(date, "d")}</span>
                </Button>
            ))}
        </div>
    </div>
}

function getStreak(completions: Date[]) {
    let streak = 0
    let date = new Date()
    while (completions.some(c => isSameDay(date, c))) {
        streak++
        date = subDays(date, 1)

    }

    return streak
}