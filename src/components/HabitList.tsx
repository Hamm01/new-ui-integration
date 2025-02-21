

export function HabitList() {
    const habits = [{ id: "sfjgkf", name: "Hi" }, { id: "dfsjkdf", name: "gisso" }]
    if (habits.length === 0) {
        return <p className="text-center text-zinc-500 py-12">No habits yet. Add one to above to get started</p>
    }
    return <div className="flex flex-col gap-3">
        {
            habits.map(habit => (
                <HabitItem key={habit.id} habit={habit} />
            ))
        }
    </div>
}

type HabitItemprops = {
    habit: { id: string, name: string }
}
function HabitItem({ habit }: HabitItemprops) {
    return <h1>{habit.name}</h1>
}