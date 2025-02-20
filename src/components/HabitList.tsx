export function HabitList() {
    const habits = [{ id: 1, name: "Hi" }, { id: 2, name: "gisso" }]
    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one to above to get started</p>
    }
    return <div className="flex flex-col gap-3">
        {
            habits.map(habit => (<h1 key={habit.id}>{habit.name}</h1>)
            )
        }
    </div>
} 