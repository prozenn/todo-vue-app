// only for demo data

const shared = {
    lists: [
        {
            name: "Lista zakupów",
            id: 1,
            items: [
                { id: 1, text: "kawa", isCompleted: false },
                { id: 2, text: "mleko", isCompleted: false },
                { id: 3, text: "jajka", isCompleted: false },
                { id: 4, text: "jabłka", isCompleted: false },
                { id: 5, text: "ser", isCompleted: false },
            ],
        },
        {
            name: "Zadania na dziś",
            id: 2,
            items: [
                { id: 6, text: "Dokończyć kurs...", isCompleted: false },
                { id: 7, text: "Przygotować API", isCompleted: false },
                { id: 8, text: "Ukończyć TODO", isCompleted: false },
            ],
        },
        {
            name: "Plany noworoczne",
            id: 3,
            items: [
                { id: 9, text: "Zaplanować budżet domowy", isCompleted: false },
                { id: 10, text: "Zasadzić drzewo", isCompleted: false },
                { id: 11, text: "Skosić trawnik", isCompleted: false },
                { id: 12, text: "Zjeść czekoladę.", isCompleted: false },
            ],
        },
    ],
}

export default shared