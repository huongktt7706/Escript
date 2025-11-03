function calBMI (wei,hei){
    const bmi = wei / (hei * hei);
    let category;
    if(bmi < 18.5){
        category="Thieu can";
    }else if(bmi < 25){
        category="Binh thuong";
    }else if(bmi < 30){
        category="Thua can";
    }else{
        category="Beo phi";
    }
    const message = `Chỉ số BMI của bạn là ${bmi.toFixed(2)} - Phân loại: ${category}`;
    return message;
}
console.log(calBMI(54, 1.54)); 
console.log(calBMI(55,1.53));
