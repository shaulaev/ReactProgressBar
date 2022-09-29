export function getPercents(arr) {
    let num = 0

    const sum = arr.map((it, index) => {
        num = num + it.value

        return num
    })

    return arr.map(val => {
        return (val.value * 100) / sum[sum.length - 1]
    })
}