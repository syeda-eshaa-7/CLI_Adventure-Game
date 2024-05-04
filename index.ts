#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.green("******************* Wellcome To The Dungoen ************"));
// Enimes interface
let maxHelth:number = 75;
let enimAttacDameg:number = 35;
// player interface
let playerhelth:number = 100;
 let playersAttacDameg:number =  35;
 let helthPosionHeal:number = 30;
 let healPosionAmount:number = 50 // %persentage
 let runing:boolean = true
   
       let player:any = await inquirer.prompt(
           [
               {
                   name : "name",
                   message : "Enter Your Name",
                   type : "input"
                }
            ]
        )
        let enimes= await inquirer.prompt(
      [
          {
              name :"allenimes",
              message : "Select The Enimee You Want To Fight",
              type : "list",
              choices:["Zombie","Skeleton","Assasin",]
          }
      ]
    )
while (true) {
    let fight = await inquirer.prompt(
        [
            {
                name : "select",
                type : "list",
                choices : ["Attack","Drink posion","Run"]
    
            }
        ]
    )
    
        if (enimes.allenimes == "Zombie"){ 
        if (fight.select == "Attack") {
            let num = Math.floor(Math.random()* 2) 
            if (num > 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                 let playerFule  =Math.floor( Math.random()*playerhelth - playersAttacDameg )
                 console.log(chalk.bold.red(`${player.name} fuel is ${playerFule}`));
                 console.log(chalk.bold.green(`${enimes.allenimes} fuel is ${maxHelth}`));
                 if(playerFule <= 0){
                    console.log(chalk.bold.italic.red(`You lose The Game ${player.name}`));
                    process.exit()  
                }
            } else if (num <= 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                let enimeFule =Math.floor( Math.random()*maxHelth - enimAttacDameg )
                console.log(chalk.bold.red(`${enimes.allenimes} fuel is ${enimeFule}`));
                console.log(chalk.bold.green(`${player.name} fuel is ${playerhelth}`));

                if(enimeFule <= 0){
                    console.log(chalk.bold.italic.green(`Congratulation ${player.name} You Are The Winner`));
                    process.exit()  
                }
            
            } }
            
            
            if ( fight.select == "Drink posion"){
                helthPosionHeal
                console.log(chalk.bold.green(`${player.name} your fuel has been incresed to ${playerhelth}%`));   
                
            }
            if ( fight.select == "Run"){
                console.log(chalk.bold.italic.red(`OOPS... You Loose The Game `));
                process.exit()
            } }
        if (enimes.allenimes == "Skeleton"){ 
        if (fight.select == "Attack") {
            let num = Math.floor(Math.random()* 2) 
            if (num > 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                 let playerFule  =Math.floor( Math.random()*playerhelth - playersAttacDameg )
                 console.log(chalk.bold.red(`${player.name} fuel is ${playerFule}`));
                 console.log(chalk.bold.green(`${enimes.allenimes} fuel is ${maxHelth}`));
                 if(playerFule <= 0){
                    console.log(chalk.bold.italic.red(`You lose The Game ${player.name}`));
                    process.exit()  
                }
            } else if (num <= 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                let enimeFule =Math.floor( Math.random()*maxHelth - enimAttacDameg )
                console.log(chalk.bold.red(`${enimes.allenimes} fuel is ${enimeFule}`));
                console.log(chalk.bold.green(`${player.name} fuel is ${playerhelth}`));

                if(enimeFule <= 0){
                    console.log(chalk.bold.italic.green(`Congratulation ${player.name} You Are The Winner`));
                    process.exit()  
                }
            
            } }
            
            
            if ( fight.select == "Drink posion"){
                helthPosionHeal
                console.log(chalk.bold.green(`${player.name} your fuel has been incresed to ${playerhelth}%`));   
                
            }
            if ( fight.select == "Run"){
                console.log(chalk.bold.italic.red(`OOPS... You Loose The Game `));
                process.exit()
            } }
        if (enimes.allenimes == "Assasin"){ 
        if (fight.select == "Attack") {
            let num = Math.floor(Math.random()* 2) 
            if (num > 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                 let playerFule  =Math.floor( Math.random()*playerhelth - playersAttacDameg )
                 console.log(chalk.bold.red(`${player.name} fuel is ${playerFule}`));
                 console.log(chalk.bold.green(`${enimes.allenimes} fuel is ${maxHelth}`));
                 if(playerFule <= 0){
                    console.log(chalk.bold.italic.red(`You lose The Game ${player.name}`));
                    process.exit()  
                }
            } else if (num <= 0){
                console.log( `${chalk.bold.green(player.name)} VS ${chalk.red.bold(enimes.allenimes)}`)
                let enimeFule =Math.floor( Math.random()*maxHelth - enimAttacDameg )
                console.log(chalk.bold.red(`${enimes.allenimes} fuel is ${enimeFule}`));
                console.log(chalk.bold.green(`${player.name} fuel is ${playerhelth}`));

                if(enimeFule <= 0){
                    console.log(chalk.bold.italic.green(`Congratulation ${player.name} You Are The Winner`));
                    process.exit()  
                }
            
            } }
            
            
            if ( fight.select == "Drink posion"){
                helthPosionHeal
                console.log(chalk.bold.green(`${player.name} your fuel has been incresed to ${playerhelth}%`));   
                
            }
            if ( fight.select == "Run"){
                console.log(chalk.bold.italic.red(`OOPS... You Loose The Game `));
                process.exit()
            } }
        }