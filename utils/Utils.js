
export function parseBooksData({ items }, barcode) {
    if (!items) return;

    const { volumeInfo } = items[0]

    return {
        title: volumeInfo.title,
        author: volumeInfo.authors,
        year: volumeInfo.publishedDate,
        isbn: barcode,
    }
}