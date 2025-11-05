const tinhBMI = (canNang, chieuCao) => {
    let ketQua = canNang / (chieuCao * chieuCao)
    let loai = ''

    switch (true) {
        case ketQua < 18.5: 
            loai = 'gay'
            break
        case ketQua < 25:
            loai = 'can doi'
            break
        case ketQua < 30:
            loai = 'hoi map'
            break
        default:
            loai = 'map'
    }

    return `Ban ${loai}, chi so BMI la ${ketQua.toFixed(1)}`
}

console.log(tinhBMI(54, 1.54))
