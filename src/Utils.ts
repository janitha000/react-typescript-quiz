export const shuffleArray = (array: any[]) => {
    [...array].sort(() => Math.random() - 0.5)
    return array
}