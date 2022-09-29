export function getPercents(arr) {
    let num = 0

    const sum = arr.map((it, index) => {
        num = num + it.value

        return num
    })

    return arr.map(val => {
        if(val.value === 0) {
            return ((val.value + sum[sum.length - 1] / 70) * 100) / sum[sum.length - 1]
        } else {
            return (val.value * 100) / sum[sum.length - 1]
        }
    })
}