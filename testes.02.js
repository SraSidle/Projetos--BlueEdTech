console.clear();
const colors = require ('colors');
const prompt = require('prompt-sync')();




const Rocky = {
  name : 'Rocky Balboa',
  force: 1,
  resistance: 1,
  velocity : 1,
  coordenation: 1,
  energy: 80,
  points : 0,

  punch : function (){
    const punchpotency = this.force * this.velocity
    return punchpotency
  },

  retour : function () {
    const retourpotency = this.cordenation * this.energy
    return retourpotency
  }
}
   const Apollo = {
   name: 'Apollo',
   force: (Math.floor(Math.random() * 6 + 20)),
   resistance : (Math.floor(Math.random() * 5 + 20)),
   velocity:(Math.floor(Math.random() * 6 + 20)),
   coordenation : (Math.floor(Math.random() * 6 + 20)),
   energy : (Math.floor(Math.random() * 6 + 20)),
   points : 0,

   punch : function (){
   const Apunchpotency = this.force * this.velocity 
   return Apunchpotency
  },

  retour : function () {
    const Aretourpotency = this.cordenation * this.energy
    return Aretourpotency
  }
}

function dualstatus (){

  console.log(` 
                                   ${Rocky.name.blue}          ${Apollo.name.yellow}       
              >> Força            |       ${Rocky.force}                   ${Apollo.force}         
              >> Resistência      |       ${Rocky.resistance}                   ${Apollo.resistance}        
              >> Velocidade       |       ${Rocky.velocity}                   ${Apollo.velocity}           
              >> Coordenação      |       ${Rocky.coordenation}                   ${Apollo.coordenation}      
              >> Energia          |       ${Rocky.energy}                  ${Apollo.energy}                      

`)

return
}

function newstatus(){
  console.log(`STATUS : ${Rocky.name}     
     Energia = ${Rocky.energy}
       Força = ${Rocky.force} 
  Velocidade = ${Rocky.velocity}      
 Resistência = ${Rocky.resistance}  
 Coordenação = ${Rocky.coordenation}
`.blue)
return
}

  const partsday = ['manhã' , 'Tarde' , 'Noite'] // não deu
const days = ['Domingo' , 'Segunda' , 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado']

  for(i = 0; i < 1 ; i++){
    for(const day of days){
        for(const partyday of partsday) { {

 newstatus();
      
          console.log(`Hoje é ${day} de ${partyday}.`.green) 
            
            const train = prompt(`
       escolha o que vai fazer:
  
      [f] => |   Musculação    | +força        | 
      [r] => |    Sparring     | +resistência  |
      [v] => |     correr      | +velocidade   |
      [c] => |  Pular Corda    | +Coordenação  | 
      [e| => |    Descansar    | +Energia      |
      `).toLowerCase();

       if (Rocky.energy > 6) {
        if (train === 'f') {
          Rocky.force += 5 //é += 3, não ao contrário
          Rocky.energy -= 8
          console.clear(prompt(`Isso, seu soco ficará mais forte, você ganhou 3 de força.`))
      } else if (train === 'r') {
        Rocky.resistance += 5
        Rocky.energy -= 8
          console.clear(prompt('Agora você aguenta os golpes do adversário.'))
      } else if (train === 'v') {
        Rocky.velocity += 5
        Rocky.energy -= 5
          console.clear(prompt('Agora você está mais rápido. Seu soco ficará potente e seu desvio mais rápido.'))
      } else if (train === 'c')  {
        Rocky.coordenation += 5
        Rocky.energy -= 5
         console.clear(prompt('Assim você terá mais chances de se desviar dos golpes adversários.'))
      } else if (train == 'e') {
        Rocky.energy += 10
         console.clear(prompt(`boa escolha, treino sem descanso é um treino perdido. `));
      } else { (train !== ('f' || 'r' || 'v' || 'c' || 'e')) 
         console.clear();
         console.log(prompt('Você optou por não treinar, seu personagem ficará despreparado para lutar! '.red))
         ;
           //console.log(newstatus);
          }
          
       } else { 
         while (Rocky.energy <= 5)  {
          console.log(`${Rocky.name}, precisa descansar.`)
           const descanso = prompt(`descansar [e]`)
             if(descanso == 'e'){
              Rocky.energy += 8
              console.clear();
            }
          }
        }
      }
    }
  }
  }
function golpes () {
  console.clear(prompt('pressione ENTER'))
  const go = ['Jab' , 'Cruzado' , 'recuando' , 'tentar Upper']
   goadv  = [];
   goadv  = Math.floor(Math.random() * 3)
    
  //futuramente fazer algo que conte o status do adversário e se ele nao tiver condições, o math random não retronar determinado número
// if (veladv > 3 && foradv > 4 && cord > 3) faz um Math.random para tentar dar um uppercut
    if( goadv === 0) {
    Apollo.velocity -= 2
   Rocky.resistance -= 1
   Rocky.force -= 1
   Apollo.points += 3
   console.log(Apollo.name , 'lançou um' , go[goadv].cyan , 'contra você');

  } else if (goadv === 1) {
    Apollo.velocity -= 1
  Rocky.resistance -= 2
  Rocky.force -= 2
  Apollo.points += 5
    console.log(Apollo.name, 'lançou um' , go[goadv].cyan , 'contra você');

 } else { (goadv == 2)    
  Apollo.velocity -= 3
  Apollo.coordenation -= 2
  Apollo.points += 2
    console.log(Apollo.name , 'está recuando e lhe dando espaço.');
   }

   if (goadv == 3) {
   const derrubar = ['' , '' , '' , 'Uppercut' , '' , '']
   goderrubar = [];
   goderrubar = Math.floor(Math.random() * 6)

   if(goderrubar == 3 ) {
     Apollo.velocity -= 2
     Apollo.force -= 1
     Rocky.energy -= 4
     Rocky.resistance -= 3
     Rocky.velocity -=3
     Apollo.points += 10
     console.log(Apollo.name , 'lançou um' , derrubar[goderrubar])
  } else {
    console.log(prompt('enter'))
    }
  }
  console.log();
  return
}

function combat() {

  reaction = +prompt(`
O que deseja fazer?
 [1] => Golpear +++                      
 [2] => Ser atingido ++ 
 [3] => Recuar +                 
`);

if (reaction == 1) {

   typePunch = prompt(`
   Escolha o golpe que quer utilizar

 [J] - Jab       | +  3 pontos  | dano = 1 -força  &  1 -resistência
 [C] - Cruzado   | +  5 pontos  | dano = 2 -força  &  2 -resistência
 [U] - Uppercut  | + 10 pontos  | dano = 3 -força  &  3 -resistência & 2 -velocidade
 `).toUpperCase();

      if(typePunch == 'J') {
        Rocky.velocity -= 2
       Apollo.force -= 1
       Apollo.resistance -= 1
       Rocky.points += 3
  console.log('Você lançou um Jab contra seu adversário. ')
 
 } else if (typePunch == 'C'){
  Rocky.velocity -= 1
  Rocky.forceadv -= 2
  Apollo.resistance -= 2
   Rocky.points += 5
   console.log('Você lançou um Cruzado contra o seu adversário. ')
 } else {(typePunch == 'U')


 if (Rocky.punch > Apollo.retour) {
   Rocky.velocity -= 2
   Rocky.force -= 1
   Apollo.force -= 3
   Apollo.resistance -= 3
   Apollo.velocity -= 2
   Rocky.points += 10
   console.log('Você acertou um Uppercut contra seu adversário. ')
 } else {(Rocky.punch < Apollo.retour) 
  Rocky.velocity -= 2
  Rocky.force -= 1
  Apollo.velocity -= 2
  Apollo.resistance -= 2
   console.log('O adversário conseguiu desviar do seu Uppercut')
 }
   
 }  
} else if (reaction == 2) {
  Rocky.resistance -= 3
  Rocky.force -= 1
  Rocky.points += 2

  Apollo.velocity -= 2
  Apollo.coordenation -= 1
  Apollo.points += 3
 
}else {(reaction == 3) 
 if(Rocky.retour > Apollo.punch) {
  Rocky.velocity -= 2
  Rocky.coordenation -= 1
  Apollo.force -= 2
   Rocky.points -= 1
   Apollo.points-= 2
   console.log('Você conseguiu desviar do golpe adversário.')
 } else { (Rocky.retour < Apollo.punch)
  Rocky.resistance -= 2
  Rocky.force -= 2
  Rocky.points += 1
  Apollo.points += 2
   console.log('Não foi possível, Você foi atingido.')
     } 
   }  
   console.clear(prompt('press ENTER'))
   console.log('Balboa'.blue , Rocky.points , 'X', 'Creed'.cyan , Apollo.points)
 return
}

function nocaute(){
  if (Rocky.resistance < 1 && Rocky.force < 1){
    console.log(`${Rocky.name} foi nocauteado.`.red)
} else {(Apollo.resistance < 1 && Apollo.force < 1)
    console.log(`${Apollo.name} , foi nocauteado`)
}

function luta(){
  for (i = 0 ; i < 5 ; i++){
    golpes()
    combat()
    dualstatus()
    //variavel que conta os rounds
    //variavel que declara o vencedor por pontuação, caso acima 
    //fazer a variável de queda, se consegue levantar ou não
    //variável de nocaute nos dois casos
    }
  } 
  luta()
}
