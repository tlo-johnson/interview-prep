// Returns the valuesue of maximum profit
function knapSackRec(maxWeight, weights, values, index,dp)
{
	
	// Base condition
	if (index < 0 || maxWeight == 0)
		return 0;
		
	if (dp[index][maxWeight] != -1)
		return dp[index][maxWeight];
	
	if (weights[index - 1] > maxWeight)
	
		// Store the valuesue of function call
		// stack in table before return
		return dp[index][maxWeight] = knapSackRec(maxWeight, weights, values,
									index - 1, dp);
									
	else
	
		// Return valuesue of table after storing
		return dp[index][maxWeight] = Math.max((values[index - 1] +
							knapSackRec(maxWeight - weights[index - 1], weights,
										values, index - 1, dp)),
							knapSackRec(maxWeight, weights, values,
										index - 1, dp));		
}

function knapSack(maxWeight, weights,values)
{
	// Declare the dp table dynamically
	// Intializing dp tables(row and cols) with -1 below
	var dp = new Array(values.length).fill(-1).map(el => new Array(maxWeight+1).fill(-1);
	return knapSackRec(maxWeight, weights, values, values.length - 1, dp);
}


var values= [ 60, 100, 120 ];
	var weights = [ 10, 20, 30 ];
	var maxWeight = 50;
	
	document.write(knapSack(maxWeight, weights, values));

// This code is contributed by akshitsaxenaa09.
