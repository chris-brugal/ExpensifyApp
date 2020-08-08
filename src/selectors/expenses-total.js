const getExpensesTotal = (arr) => {
    let total = 0;
    if(arr.length > 0){ 
        arr.forEach((element) => {
            total = total + element.amount;
        });
    }
    return total;
};

export default getExpensesTotal;