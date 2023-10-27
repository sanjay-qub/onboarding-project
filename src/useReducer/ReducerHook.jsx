

    const reducer = (count, action) => {
        switch (action.type) {
          case "INC":
            // Increment the count by 1
            return count + 1;
          case "DEC":
            // Decrement the count by 1, but ensure it never goes below 0
            return count > 0 ? count - 1 : 0;
          default:
            // For any other action type, return the current count
            return count;
        }
      };
      
  export default reducer;
  