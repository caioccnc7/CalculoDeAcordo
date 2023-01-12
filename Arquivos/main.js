function divideInParcels(totalParcels, startDate = new Date()) {
    if (totalParcels < 1) {
        throw new Error("The total number of parcels must be greater than 0");
    }

    let date = new Date(startDate);
    date.setDate(1);
    let parcelDates = [];
    for (let i = 1; i <= totalParcels; i++) {
        if(date.getDate() > 1) {
            date.setMonth(date.getMonth() + 1);
        }
        parcelDates.push(new Date(date));
    }
    return parcelDates;
}

console.log(divideInParcels(3));
console.log(divideInParcels(5,new Date()));