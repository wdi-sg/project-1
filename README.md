### Project Name (Cash Crops)

## Overview
You are a cash crop farmer. Your objective is to farm a crop, hope for a good harvest and make a nice profit. The higher the profit the better. 

Throughout the game, you will pick the 

* type of crop to farm
* level of farming equipment to buy
* level of fertilizer to buy
* level of pest control to buy

Usually, the higher the cost you pay, the greater the corresponding returns (you get better harvest yields).


After making the above 4 decisions, the game will generate a type of harvest based on probability. The types of harvests are:
* Famine(10% chance)
* Poor(20% chance)
* Normal(40% chance)
* Good(20% chance)
* Bountiful(10% chance)

The higher the level of harvests, the better your harvest yields. Harvest yield is measured in bushels.

Your Total Harvest Yield is determined by the type of harvest you get and the level of farming equipment/fertilizer/pest-control you choose to buy.
Total harvest yield is measured in bushels.

The price per bushel of crop you plant will be determined by the crop you choose to farm and the type of harvest you get.
Usually the more expensive the crop seeds cost to buy, the greater the price per bushel you can sell them for.
Also, the worse the type of harvest, the higher the price you can sell per bushel.(Shortages drive up prices);

Your total revenue will be the price per bushel of your chosen crop multiplied by the total harvest yield. Your profit will be the revenue less the cost you spend buying stuff.

Your objective is to maximize profit, AND END THE GAME WITH MORE CASH THEN YOU STARTED OUT WITH. 


## Game Logic
#typeOfHarvest()
Determines the type of harvest (Famine,Poor, Normal ,Good, Bountiful)

#equipmentType()
Calculates the effect that the chosen equipment has on harvest yield

#fertilizerType()
Calculates the effect that the chosen fertilizer has on harvest yield

#pestControlType()
Calculates the effect that the chosen pest control has on harvest yield

## Future upgrades
Play for additional seasons, so you can use your newly accquired wealth to grow it further
