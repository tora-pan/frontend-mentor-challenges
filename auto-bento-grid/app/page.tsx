export default function Home() {
    const renderGrid = (columns: number) => {
        return (
            <div
                className={`grid auto-rows-[100px] grid-cols-${
                    Math.floor(Math.random() * 3) + 6
                } gap-4`}
            >
                {[...Array(columns)].map((_, i) => (
                    <div
                        key={i}
                        className={`h-2 row-span-${Math.floor(Math.random()*2) + 2} rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 col-span-${
                            Math.floor(Math.random() * 6) + 1
                        }`}
                    ></div>
                ))}
            </div>
        );
    };

    return (
        <main className="p-8">
            <div>here is the div</div>
            {renderGrid(Math.floor(Math.random() * 12) + 12)}
        </main>
    );
}
