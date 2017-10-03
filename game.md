# Project #1: [GAME NAME]

## Overview
*[GAME NAME]* is a first-person-shooter game that tests your reflexes and judgement. Juggle between identifying foes from allies as well as inventory management in the form of ammos and grenades.

#### How to play
Use your mouse to aim and shoot. Shooting enemies will damage them, some enemies require more shots to kill. Failure to kill them before they disappear will reduce your health.
*Grenades* damage all visible enemies.
Shooting *allies* cause you to lose a health.
Shoot *ammo boxes* or *med packs* to refill your supplies and health.

#### Controls
*Mouse Left Click*: **Shoot** (damage targeted enemy)<br>
*Mouse Right Click*: **Grenade** (damage all enemies)

#### Conditions for victory:
Survive for *two* minutes

#### Conditions for failure:
Lose all your health

## Technical Documentation
* Game Logic Flow-Chart
* Coding Theory
* Future Updates
* Current Issues (To-Fix List)
* Working On

#### Game Logic Flow-Chart
<img src="assets/img/flowchart.jpeg">

#### Coding Theory
This game has only one victory and one failure condition.
Enemies/allies/tools will spawn via a setInterval function.
Different enemies have different spawn rates.
They will be created via a constructor function with the following format:
```
enemy{
  life: 1, // default enemies have 1 health
  effectOnAmmo: 0, // ammo boxes +10
  effectOnHealth: 0, // health packs +1
  timeToRemoval: 5 // value reduces with each second
  // on reaching 0, enemy damages player and disappears
}
```
On shooting utilities, function will iterate object key and value to determine effect on player stats.
Enemies deal damage to player on expiry.

#### Future Possible Updates
* Scoring function
* More enemy types
* Combo function
* Pause button
* <s>Set events i.e. spawn 5 hard enemies at the same time</s>
* Text popups at game screen, 'Miss!' etc.

#### Misc Issues
* No max health
* Using grenade on 5 allies and 1 healthpack will result in gameover. Though 5health - 5 + 1 = 1 health

#### To Do List
1. <s>Linking spawn html to JS</s>
2. <s>Targeting this.enemy on click to derive key/value</s>
3. <s>Enemies dealing effect/damage to player on expiry</s>
4. <s>Add gunshot audio on click</s>
5. <s>setInterval checker for player/enemy health</s>
6. <s>setInterval spawner for different enemy types</s>
6. <s>Adjust setInterval to adjust game difficulty</s>
7. Adjust spawn locations
8. Css stuff
9. <s>Grenade audio</s>
10. Text notification on miss etc.
11. Enemies zoom to player (transition effect) when they expire
