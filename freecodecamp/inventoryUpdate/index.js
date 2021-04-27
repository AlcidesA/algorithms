function updateInventory(arr1, arr2) {
    let dict = {};

    [...arr1, ...arr2].forEach(([qnt, name]) => {
        dict[name] = dict[name] ? dict[name] + qnt : qnt;
    });

    return Object.entries(dict).map(([name, qnt]) => [qnt, name]).sort((a, b) => {
        return a[1].localeCompare(b[1])
    })
}
