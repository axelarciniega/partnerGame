const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

let heroesGold = 0 
let bossReward = 100


const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1
}

update()


function attack({health}){
    let totalDamage = 0
    heroes.forEach(hero =>  {
        if(hero.damage && hero.health> 0 ){
            totalDamage += hero.damage
        }
        boss.health -= totalDamage
        console.log(totalDamage)
    })
    levelBoss()
    killBoss()
}

function bossAttack(){
    heroes.forEach(hero => {
        hero.health -= 5
    } )
    console.log(heroes)
    heroHealth()
}

setInterval(bossAttack, 5000)

function levelBoss(){
    if(boss.health <= 0 ){
        boss.health = 0
        boss.level++
        boss.maxHealth += 50
        boss.health = boss.maxHealth
        heroesGold+= bossReward
        bossReward+= 50
    }
    update()
}

function heroHealth(){
heroes.forEach(hero => {
    hero.health == 0
    if(hero.health == 0){
        window.alert(`${hero.name} got sssssspankedd!`)
    }
})
}

function levelUp(heroName){
    heroes.forEach(hero => {
        if(heroName == hero.name){
            hero.damage++
        }
    })
}

function heal(heroName){
    heroes.forEach(hero => {
        if(heroName == hero.name && heroesGold >= 5 ){
            hero.health++
            heroesGold-=5
        }  
    })
    update()
}



function killBoss(){
    if(boss.level == 3){
        window.alert('You dominated the SSSSnakeee!🐍')
    }
    
}


function update(){
    let bossLevelElem = document.getElementById("bossLevel").innerText = `Level: ${boss.level}`
    let heroGoldElem = document.getElementById('heroGold').innerText = `Gold: ${heroesGold}`
}
