/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  let curr={};
  for(let i=0; i<transactions.length; i++){
    if(curr[transactions[i].category]) curr[transactions[i].category] += transactions[i].price;
    else curr[transactions[i].category] = transactions[i].price;
  }

  let keys=Object.keys(curr);
  let ans=[];
  for(let i=0; i<keys.length; i++){
    let obj={
      "category": keys[i],
      "totalSpent": curr[keys[i]]
    };

    ans.push(obj);
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
