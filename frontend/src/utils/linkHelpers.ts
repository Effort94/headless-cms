export function getRelativePath(url: string) {
    try {
        const parsed = new URL(url);
        return parsed.pathname;
    } catch (e) {
        return url;
    }
}