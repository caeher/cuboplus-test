/**
 * @file tech_test.js
 * @brief Cuboplus Tech Test
 * @version 1.0
 * @date 2024-09-15
 * 
 * @author Cristian Escalante
 */

// Section 1
const totalHalving = 32;
const blocksBetweenHalving = 210000;
const initialBlockReward = 50;
const rewardHalving = 0.5;

// Section 2
function calculateBlockReward(blockHeight) {
    let halving = Math.floor(blockHeight / blocksBetweenHalving);
    return initialBlockReward * Math.pow(rewardHalving, halving);
}

// Section 3
let totalSupply = 0;
let blockHeight = 0;
let blockReward = 0;
let percentage = 0;
for (let i = 0; i <= totalHalving; i++) {
    blockReward = calculateBlockReward(blockHeight);
    totalSupply += blockReward * blocksBetweenHalving;
    percentage = (totalSupply / 21000000) * 100;
    if (i != 0) console.log(`Halving ${i}:`); 
    console.log(`Total Bitcoin supply: ${totalSupply}`);
    console.log(`Block reward: ${blockReward} BTC (${blockReward * 100000000} SATS)`);
    console.log(`Percentage of total 21 million bitcoins mined: ${percentage}%`);
    blockHeight += blocksBetweenHalving;
}
