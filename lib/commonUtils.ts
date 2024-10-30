export function formatDate(date: string) {
    const d = new Date(date);
    return d.toLocaleDateString("en-us", {
        day: "numeric",
        year: "numeric",
        month: "long",
    });
}

export function randRange(min: number, max: number) {
    return Math.random() * (max - min) + min
}
