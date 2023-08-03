function checkCashRegister(price, cash, cid) {

    const currencyUnits = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      "ONE HUNDRED": 100,
    };
  
    let totalCashInDrawer = 0;
    // console.log(cid);
    for (const [unit, amount] of cid){
      // console.log(unit);
      // console.log(amount);
      totalCashInDrawer += amount;
    }
  
    let changeDue = cash - price;
    // console.log(changeDue);
    let changeArr = [];
  
    if(totalCashInDrawer < changeDue){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }else if(totalCashInDrawer === changeDue) {
      return {status: "CLOSED", change: cid};
    }else{
      for (let i = cid.length - 1; i >= 0; i--){
        const [unit, amount] = cid[i];
        const value = currencyUnits[unit];
        let count = Math.floor(changeDue / value);
  
        if(count > 0 && amount > 0){
          let returnAmount = Math.min(count * value, amount);
          changeDue -= returnAmount;
          changeDue = Number(changeDue.toFixed(2));
          changeArr.push([unit, returnAmount]);
        }
      }
  
      if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      return {status: "OPEN", change: changeArr};
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);