function sym(...sets) {
    while(sets.length >= 2) {
        const a = sets[0]
        const b = sets[1]

        const diffA = a.filter(n => !b.includes(n))
        const diffB = b.filter(n => !a.includes(n))

        sets.splice(0, 2, [...diffA, ...diffB])
    }

    return [...new Set(sets[0])]
}
