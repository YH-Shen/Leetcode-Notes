
///===============================================================================
/// 169. Majority Element
var majorityElement = function(nums) {
    // // Brute Force Counting ----- Time: O(n), Space: O(n)
        
    //     // get the length of the array and n/2
    //     let length = nums.length;
    //     // count the appearance of each element in the array
    //     let countTable = {};
    //     for (let i = 0; i < length; i++){
    //         countTable[nums[i]] = countTable[nums[i]] + 1 || 1;
    //         // Refactored
    //         // if (countTable[nums[i]] !== undefined) {
    //         //     countTable[nums[i]]++;
    //         // } else {
    //         //     countTable[nums[i]] = 1;
    //         // }
            
    //         // return the answer if occurance greater than n/2
    //         if (countTable[nums[i]] > length/2) return nums[i]; 
    //     }
    
        // // sort and pick mid element --- Time: O(nlogn), Space: O(n)
        // sortedNums = nums.sort();
        // maxElement = sortedNums[Math.floor(nums.length/2)];
        // return maxElement
        
    // Boyer-Moore Voting  --- Time O(n), Space: O(1)
        // let the different elements cancel each other
        // let the same element accumulate counts
        let count = 0;
        let candidate = 0;
        for (let num of nums){
            // if count is zero, to begin with and when elements cancel out
            // asign the new number as caniddate
            if (count === 0){
                candidate = num;
            };
            // add count if elements are the same, or if the candidate was just assigned
            count += (num === candidate)? 1: -1; 
    
        }
        return candidate;
    };
    //// ===================================================================