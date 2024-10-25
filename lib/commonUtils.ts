export function formatDate(date: string) {
    const d = new Date(date);
    return d.toLocaleDateString("en-us", {
        day: "numeric",
        year: "numeric",
        month: "long",
    });
}
