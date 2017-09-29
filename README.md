# Project 1: Olde Town Beat Down

### Introduction

**Bandits** are trying to steal your harvest. Luckily for you, milk isn't the only thing you deliver. Defend your crop and **deliver sweet justice**.

1. Play as a farmer, Johnny Wickerbottom.
2. Plant crops and earn gold to survive the winter.
3. As the crops grow, enemies appear. More crops, more enemies.

**Version 1:** Implement fight phase alone, with set enemies (no input from farm) per level

**Version 2:** Implement farm phase

##### Gameplay
The main challenge of this game is for the player to manage how many enemies the player want to engage for that level. Too many and the player will be overrun, too little and the player might run into gold problems for the next levels.


---
### Game Flow

##### Overall Flow
![Overall Flow](/assets/images/overallFlow.svg)

##### 1st Phase - Planting (to be implemented in version 2)
![Phase 1 Planting](/assets/images/plantingPhase.svg)


##### 2nd Phase - Defend (to be implemented in version 1)
![Phase 2 Fight](/assets/images/fightPhase.svg)
---

### Technical Assets

##### Player
```
Instance Properties {
  Current gold
  Current level
  Planted crops {
    Type
  }
}

Character {
  Health
  Current weapon
  Available weapons
}
```
##### Weapons
```
Weapons {
  Type
  Projectile behaviour
  Damage
}
```


##### Enemies
```
Enemy {
  Type
  Health
  Current Weapon
  Behaviour/Pathing
}
```

##### Crops
```
Properties {
  Attractiveness
  Gold cost to plant
  Gold cost after harvest
  Health
}

```

##### Levels

4 seasons, different gold required to survive
```
Version 1 {
  level 1: 3 enemies
  level 2: 5
  level 3: 7
  level 4: 3 + boss
}

Version 2 {
  Spring : 500 //gold required to pass
  Summer : 1000
  Autumn : 2000
  Winter : 3500
}
```
---
