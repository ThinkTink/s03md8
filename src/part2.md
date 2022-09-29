## Part 2

What would be the time and space complexity of the algorithm used to format the data in part 1? 
Please expand on why your approach to formatting the data is the best for this endpoint. 

**Answer**:
- The runtime complexity to format the data in part 1 would be O(n) where n is equal to the length of the transactions between the two given dates. 

- This is the best approach because it doesn't require re-formatting of the data based on `orderBy` param. It will only format the data once based on the `orderBy` param input since the key needed for the hashmap is calculated when we loop through the data at `const date = getDate(transaction.date, orderByParam); ` and that operation is O(1) since it doesn't depend on the transactions length. 
