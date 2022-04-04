// variáveis para armazenar as alteraçoes do status adversário
console.clear();
const prompt = require ('prompt-sync')();
const colors = require('colors');

//criar variáveis para armazenar o status do personagem 
let name = 'Rocky Balboa ';
let force = 1;
let resistance = 1;
let velocity = 1;
let coordenation = 1;
let energy = 80;
let points = 0;

//criar váriáveis para armazenar o status adversário
let nameadversary = '';
let forceadv = 1;
let resistanceadv = 1;
let velocityadv = 1;
let coordenationadv = 1;
let energyadv = 79;
let pointsadv = 0;

//
const Rocky ={
  punch : function (){
    const potencyB = force * velocidade
    return
  },
  Detour : function (){
  const potencyB= resistance * coordenation  
    return
  }
}

const Advsrys = {

  punchA : function (){
    const potencyA = forceadv * velocidadeadv
   return
  },
  DetourA : function (){
    const potencyA = resistanceadv * coordenationadv
  }
}

const partsday = ['manhã' , 'Tarde' , 'Noite'] // não deu
const days = ['Domingo' , 'Segunda' , 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado']

for(i = 0; i < 1 ; i++){
    for(const day of days){
        for(const partyday of partsday) { 
         
          console.log(`Hoje é ${day} de ${partyday}.`.green)

            // variáveis para armazenar as alteraçoes do status personagem, ciclo de treino
       function newstatus () {
    console.log(`
       STATUS : ${name}     
        Energia = ${energy}
          Força = ${force} 
     Velocidade = ${velocity}      
    Resistência = ${resistance}  
    Coordenação = ${coordenation}`.blue)
    return
   }

   newstatus();
      
     const train = prompt(`
       escolha o que vai fazer:
  
      [f] => |   Musculação    | +força        | 
      [r] => |    Sparring     | +resistência  |
      [v] => |     correr      | +velocidade   |
      [c] => |  Pular Corda    | +Coordenação  | 
      [e| => |    Descansar    | +Energia      |
      `).toLowerCase();
  
    // console.clear()
    
    if (energy > 0) {
      if (train === 'f') {
        force += 5 //é += 3, não ao contrário
        energy -= 8
        console.clear(prompt(`Isso, seu soco ficará mais forte, você ganhou 3 de força.`))
    } else if (train === 'r') {
      resistance = resistance += 5
        energy -= 8
        console.clear(prompt('Agora você aguenta os golpes do adversário.'))
    } else if (train === 'v') {
      velocity += 5
        energy -= 5
        console.clear(prompt('Agora você está mais rápido. Seu soco ficará potente e seu desvio mais rápido.'))
    } else if (train === 'c')  {
      coordenation += 5
       energy -= 5
       console.clear(prompt('Assim você terá mais chances de se desviar dos golpes adversários.'))
    } else if (train == 'e') {
       energy += 10
       console.clear(prompt(`boa escolha, treino sem descanso é um treino perdido. `));
    } else { (train !== ('f' || 'r' || 'v' || 'c' || 'e')) 
       console.clear();
       console.log(prompt('Você optou por não treinar, seu personagem ficará despreparado para lutar! '.red))
       ;
         //console.log(newstatus);
        }
        
      } else { 
       while (energy <= 5)  {
         console.log(`${name}, precisa descansar.`)
         const descanso = prompt(`descansar [e]`)
         if(descanso == 'e'){
          energy += 8
          console.clear();

            }
          }
        }      
      }          
    } 
  }

// alterações do status do adversário

  nameadversary = 'Apollo Creed' 
  forceadv = Math.floor(Math.random() * 5) + 20 //tomar cuidado pra não dar uma força maior que do meu personagem
  velocityadv = Math.floor(Math.random() * 5) + 20
  resistanceadv = Math.floor(Math.random() * 5) + 20
  coordenationadv = Math.floor(Math.random() * 5) + 20

 function newstatusadv() {
  console.log(`
     STATUS ${nameadversary} 
     
       Força = ${forceadv}
  Velocidade = ${velocityadv}
 resistência = ${resistanceadv}
 coordenação = ${coordenationadv}
`.yellow)
return
}

//perguntas que alteram o status do personagem
//ações para lutar
//está contabilizando, tem que colocar uns prompt e console.log para entender melhor os passos

function golpes (adversario) {
  console.clear(prompt('pressione ENTER'))
    
  const adversarios = [ 'Apollo Creed'.yellow , 'Clubber Lang'.green , 'Ivan Drago'.red ]
  const go = ['Jab' , 'Cruzado' , 'recuando' , 'tentar Upper']
   goadv  = [];
   goadv  = Math.floor(Math.random() * 3)
  
  //futuramente fazer algo que conte o status do adversário e se ele nao tiver condições, o math random não retronar determinado número
// if (veladv > 3 && foradv > 4 && cord > 3) faz um Math.random para tentar dar um uppercut
    if( goadv === 0) {
   velocityadv -= 2
   resistance -= 1
   force -= 1
   pointsadv += 3
   console.log(adversarios[adversario] , 'lançou um' , go[goadv].cyan , 'contra você');

  } else if (goadv === 1) {
  velocityadv -= 1
  resistance -= 2
  force -= 2
  pointsadv += 5
    console.log(adversarios[adversario] , 'lançou um' , go[goadv].cyan , 'contra você');

 } else { (goadv == 2)    
   velocityadv -= 3
   coordenationadv -= 2
   pointsadv += 2
    console.log(adversarios[adversario] , 'está recuando e lhe dando espaço.');
   }

   if (goadv == 3) {
   const derrubar = ['' , '' , '' , 'Uppercut' , '' , '']
   goderrubar = [];
   goderrubar = Math.floor(Math.random() * 6)

   if(goderrubar == 3 ) {
     velocityadv -= 2
     forceadv -= 1
     energy -= 4
     resistance -= 3
     velocity -=3
     pointsadv += 10
     console.log(adversarios[adversario] , 'lançou um' , derrubar[goderrubar])
  } else {
    console.log(prompt('enter'))
  }
}
   
/*} else if (goadv === 2) {
    
  velocityadv -= 2
  resistance -= 3
  force -= 3
  velocity -= 2
  pointsadv += 10
    console.log(adversarios[adversario] , 'lançou um' , go[goadv].cyan , 'contra você');*/

 console.log();
return 
};

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
   velocity -= 2
   forceadv -= 1
   resistanceadv -= 1
   points += 3
   console.log('Você lançou um Jab contra seu adversário. ')
  
  } else if (typePunch == 'C'){
    velocity -= 1
    forceadv -= 2
    resistanceadv -= 2
    points += 5
    console.log('Você lançou um Cruzado contra o seu adversário. ')
  } else {(typePunch == 'U')


  if (velocity * force > coordenationadv * resistanceadv ) {
    velocity -= 2
    force -= 1
    forceadv -= 3
    resistanceadv -= 3
    velocityadv -= 2
    points += 10
    console.log('Você acertou um Uppercut contra seu adversário. ')
  } else {(velocity * force < coordenationadv * resistanceadv )
    velocity -= 2
    force -= 1
    velocityadv -= 2
    resistanceadv -= 2
    console.log('O adversário conseguiu desviar do seu Uppercut')
  }
    
  }  
} else if (reaction == 2) {
  resistance -= 3
  force -= 1
  points += 2

  velocityadv -= 2
  coordenationadv -= 1
  pointsadv += 3
  
}else {(reaction == 3) 
  if(resistance * coordenation > forceadv * velocityadv) {
    velocity -= 2
    coordenation -= 1
    forceadv -= 2
    points -= 1
    pointsadv -= 2
    console.log('Você conseguiu desviar do golpe adversário.')
  } else { (resistance * coordenation < forceadv * velocityadv)
    resistance -= 2
    force -= 2
    points += 1
    pointsadv += 2
    console.log('Não foi possível, Você foi atingido.')
      } 
    }  
    console.clear(prompt('press ENTER'))
    console.log('Balboa'.blue , points , 'X', 'Creed'.cyan , pointsadv)
  return
}
  

function rounds(){
  for(i = 0 ; i < 5 ; i++) {

     golpes(0);
     combat(0);
   
    newstatus();
  newstatusadv();
  
      
    if(resistance > 1 && velocity > 1) {
    console.log();
    if(resistance < 1 && velocity < 1){
    console.log('Rocky foi nocauteado'.red)
       {break
    }
  } else {(resistanceadv < 1 && energyadv < 1) 
    console.log('Parabéns, você nocauteou seu adversário.'.green)   
       { break
        }
      }         
    }     
  }
}


 // ok

rounds();

/*if(resistance < 1 && velocity < 1){
  console.log('Rocky foi nocauteado'.red)
} else {(resistanceadv < 1 && energyadv < 1) 
      console.log('Parabéns, você nocauteou seu adversário.'.green)
    }*/ //para caso de nocaute


    /* if (Uppercut acertado) {
      você caiu
      else uppercut atingir ()
      adversario caiu 
    }



     */


//talvez colocar dentro da função new status, ou em algum lugar que seja aceita e guarde os valores das alterações
//se não dercerto, coloca dentro da condição cada um //
  