console.clear();
const colors = require ('colors');
const prompt = require('prompt-sync')();

// Apresentação do nome do jogo / filme
  console.log(console.log(`
                            R o c k y  
                                         O   
                                              L u t a d o r `.cyan.bold));


 console.clear(prompt());                                           

console.log(`
EMddgDP52Jjvvr7rri71dESJsvLvLvvvYvLs1U1YssjuSSPPddMQBQZ2Pd1:..rZBBQgZqbPEbZEEEEbEEZdEPdqPKPKPqPqdDMMQQQDEK5Ls2MZdPdPdPPg
bRdDQqr... ....... ..uBgKqKPS2ujJus125uUUX55SKXqPZBDr.          .IdBQEPdqqqPPdPqKPqPPqKqXKSqKPqgd5svi:..      .BdbPPPPXg
qZqZ7 :7i...:.:::.:.  7QQggDgddPKIIUUu2u225UIIX5PQr                 JBgPPXKSKXXSqXKSK5S5XI5IKXd7:   ..:.::::.  BgqqXPXqE
SESDr..:ir.:.:::.:..   sQdPPqqqbXqSIjuuUu21Uj1Uqg2                   YBZKSIS2SIXSKSXSXIX5S2S5Pd.:RDEUJri::::   uBdXKXSSD
XbXK.:i.... ... .      UDSX5SISII11JjjujujUu1j2bv    rPJ  .::..       UBP5S2I1IU5IX5X5X5X5S5KEr:i..::...... :   dDPSX5SP
SEUSSX::iQv77.iXi.:.:uPE2I12uUu1ujjUu2juJU1UuUXs  . rBdgRBgQQQg1:.     igX221UuU12222U1UU5ISXZi.:.    :7 .bPBI  sQqqKXId
qP21MgQJBBZIgXEZPqEPPX2JjsJYJsusus111121UU21IUb7    :BD5v7qgqi:.:.      Q221UUUu112121215UIU5SDY.     2BK :2BB  ZBEqPXqD
5P151rL:YBb .D1u1U1I1Uj1JujuYJuUU2UI2XI55S2S2SSg:    QKL .bB. vr::     7D51222u2U225252SI5U5U5IEbPqdXqXgU:.iQBq .2gKSqKg
2XU2.77 iBZ :Z5U2UIUXI55SI52I2I5X5qXKSq5X5KSXSPZB  .7MMRgRRQ7 iuJi:.  .RPI55PbPXS12USUI2IU525UIUSKPKPXKPEii:iQB.  vdq5Sd
1XJIdQXrrvirKgS55SSXSXSKSKSS5X5qSqKqXqSK5KKPXqqdQS .QP5PZQPEs...::.:  RQPPbDEgZdK2uU11u1uI15UIUS252S255qP  :XgvbXZKP5SUd
UX1UXPBRQ7  .RdXX5X5KXKXKSXSKXqKqXKXqqPKPqPKPqdPZBB  iEbgDdq5. i:.:  UBMgDgEDdbKqS5U21I25IS5X5X5X55255X5PPZgP7i7irMKKIIK
UPUI2dQMQI.  rQgKKSqXqXKSqXqSPXPXPKPqPPbPdPPKPPdbZQBvr15PdSXj7iu:. 7BBggZgEZbbqbPPKqXPqdPbPdPb5X5SISIXSXXd15PR5sj.rZI51q
SbSIPDQgQJ:.:.:BgqPqqKPqPqPqPKPKPPPPPPEdDEZddbbPdPEDBQ1LU2bDPu7... 2BMgZDZZbDdZEZEgZggggDEZqq5X5XSK5XIX5qU5dggSYqs.1q1uX
5Z5XqgRQKYri7. :BRdEbDdgDgDgZZbZEZEZPPqPPbbggBQQDZEDgQDYIq2L:.   . 2BQggEgEDEgDggRgRgRggDDEEPbPbPbPZddEDZLSdDE2IU2.rRPqM
IbXSqdME2Jqui   :MdXqX5u111uISZEdqK5IUusL7riirJSQBBDPXKjIDg2ui.ii. .RBBBRggDRQBBBQBQBBBBBBBgQQBBBBBBBBBBPr2SDKS5Kv.:BQRB
ub5qSPbbPIIJ.    irJu1JjsJv7i::iv1IbMBQgPXjYr:  .::YvLj5IKgS:iSBu    .7KMBBQZPIUsY7vvsY1IdgBgP11j1s12S21ivJ1qZX5sr..BQEQ
1X2uUKqXPS1r.rj7K5QBQgDdEPPKdXKSXUUsYJdgMgDP5Lrii:iirir777sjr.2R:.::.    :1ri:ir77ri:..   :v77vvv77iii:..rqKPqXIr...BMDQ
j5YJY2qPP5L77ggRBQRE2IjUu21UuIIKPEIuJjSMZZDQMgS1sjvvriivvvrrrriv7svv77r7i::ii7vjJJYvi:.:5PZZ2UuUJJJJYuJL7IS1U2UY:. :QDPM
j2JYJuqXPqKPddQbEPK2I555U5KJKSSds77rv7LYUIIqRRRP5uJL7r7vujLrrrrY1LL7ri77vr7rrr7vJssrr:.1BZSvrr77vvYYuJ22IusvJsYri..rESIP
uqjUIXS1juYu5js2SPXPdZEdqPqbKKUJ. .r:rjjY1s25bQBgqsv7Ls11UsL7vj5u1YY777sYLrrr7r7rriii:.ii7YLJ2Iq2Uuuu2j1JL77rri7vu5PII1P
2KIU5SXKPPEPquvvYsuu52S55uY7ri:.. .XQdMDjubPPIdgQQRPUYJsuLsJ7:7SPXIuu77r777rri:::..      :XPq5KSSjjvvri:i:irY1XKPqK22u1X
uq1U25I55KSKSKS5uuJsvv77ri::.::rvU1qgMZgq15gEXIdEDYSRgK2juJ1r:iPPSUUYsvvrrrri:.:.. .......:r7777rr:i:irLs25S5S1UJujUuUuK
jIjsuJ1J1sjsjsujUI5I52I22U2UI5qPdqX15qZEDqZRdPPXdK71RQRK1JJsi.iXBRPsJYJv7ir:..:::::.:vK5IL7r7r77vvj15SqSKSSU2UI2IIIJuJ1S
Y2YusuYJYsLJsjsuuUu1s1j1u2U5UUu22Iu1j2IPPDgPXEdEPbZDZggbJsvr.isSQBg1vs77rii:.::::r::1DPdqqXPqqKqKPPgMRgQQQQMEDgQgQMZKPSM
jUJYjsusujjJuJusususujuJ1uU1UuUjusuJ1JusIqqIPbbbEZZPEEEPSjuYr:7dPdgPU7vYvi..:::.:..MBEqPEgMMQgQRQMQQQRQRQMRRQRQRQMQQQRQB
s5sjjuJuJuJ1JjYJJuJ11IU22IUIUI5KqEgMPKPZjI2XPEPX5dbEPZZggQdIY7:u5uLYvvvLr:.::::. .QBQQMRgQgRgMgRgRggDgDgDgDggggMgMgMgRgB
uUJjuJ1J1j1j1J1jU1Uu2U5IX5SXPdgDRgMRQgQBMYXKKSPPPPPdDDQQZ1J777rvq2J7vrrri::...: :BBRRMRDgDgdgDgZgDDZgEDDDDMgggDdZdDDgEEQ
L2LssJsuJusjJuu1uUu21215222SSPqdEbPEdDZgQdLuUqXPPPPZZMMP7irri:rqPqIUYYvr::.... :BBRMgMgMgMgZEMgMDgEEdZdZEDZgDgDgDgPdEDdQ
s1jJjJjLJLYvsYJs1uUuUJ2u212ujs5PZbdPPqbPEMSJ2uPKqKbqK17irJ5Y7.iDZUJJjLL7i::.. :QBgMDgDgDDEDgggMgggMEDbEbZdDZDDggMgDdgDZQ
Y1vYvYL1IKKPXK221uJujKbZDgDgPbdDdZEDEEPPqZD22SSqKSjYvYsXbd5J: :BMXri:rrrii:..rBBgMEZEZdDEZdEdDEDdggREZPddZEEEDgMgMDMDgdB
LuUISSdDQgRMMgRggdZPqPZdEEDEggMDDddPdPdPddgdsj55qX5suuS22svr. 7Pu71r:   ...  RBggDDEZbDdDbEdEPddEdEPPqdPdPEdZdDZDEZEgEEQ
SgdgDMDgdEdEEZZDZggDXKqPKPPdbDZgZEqEdEddPggQEqKKPDBBZQgDQBdr 7JjPr5QQZ7::7i::BQMZgDgZZPPPdqdbEPdPPPbPPPbPbPEdEdEdZPbPbqM
`);

console.clear(prompt());

// contextualização do jogo
console.log(`É próximo do dia de ação de graças... E Rocky Balboa foi convidado para fazer uma luta de exibição contra`);
console.log(`o grande campeão de Boxe: 'Apollo, O Doutrinador'. Essa pode ser sua única chance de progredir em sua car-`);
console.log(`reira de boxeador, se tornar um lutador famoso e bem sucedido. Sua missão é treinar Balboa para essa grande`)
console.log(`luta.`)

console.clear(prompt(`Digite ENTER para continuar.`));
//variável para guardar o valor pra validar o while
var playagain  = prompt(`Digite 's' para começar. `).toLowerCase();

//estrutura de repetição para manter o jogo ou jorgar novamente
while (playagain == 's' ) {

  //variáveis/ objeto para guardar o status do personagem
const Rocky = {
  name : 'Rocky Balboa',
  force: 1,
  resistance: 1,
  velocity : 1,
  coordenation: 1,
  energy: 100,
  points : 0,

  punch : function (){
    const punchpotency = this.force *  this.velocity 
    return punchpotency
  },

  retour : function () {
    const retourpotency =  this.coordenation *  this.energy
    return retourpotency
  }
}

//variáveis / objeto que guarda o status do adversário
   const Apollo = {
   name: 'Apollo Creed',
   force: (Math.floor(Math.random() * 8 + 30)),
   resistance : (Math.floor(Math.random() * 5 + 31)),
   velocity:(Math.floor(Math.random() * 7 + 31)),
   coordenation : (Math.floor(Math.random() * 6 + 27)),
   energy : (Math.floor(Math.random() * 6 + 51)),
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

// função para exibir o status de ambos os lutadores
function dualstatus (){

  console.log(` 
                                      ${Rocky.name.cyan}          ${Apollo.name.yellow}       
              >> Força            |       ${Rocky.force}                      ${Apollo.force}         
              >> Resistência      |       ${Rocky.resistance}                      ${Apollo.resistance}        
              >> Velocidade       |       ${Rocky.velocity}                      ${Apollo.velocity}           
              >> Coordenação      |       ${Rocky.coordenation}                      ${Apollo.coordenation}      
              >> Energia          |       ${Rocky.energy}                      ${Apollo.energy}                      

`)

return
}
//função para exibir ao usuário as alterações do status de acordo com a resposta ao prompt 'treino'

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
// variáveis para exibição do tempo ao usuário
  const partsday = ['manhã' , 'Tarde' , 'Noite']
const days = ['Domingo' , 'Segunda' , 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado']

    console.clear(prompt(`\n INSTRUÇÕES: Será sempre bom dosar treino e descanso. A energia do Rocky não pode
          cair pra abaixo de 50, pois entrará no ringue em desvatagem. \n
          Além disso, é recomendado uma boa distribuição de cada um dos treinos. `));

//Laços de repetição para controlar o tempo, representa o ciclo de treino
  for(i = 0; i < 1 ; i++){
    for(const day of days){
        for(const partyday of partsday) { {

 newstatus();
      
          console.log(`Hoje é ${day} de ${partyday}.`.green) 
  //opções de treinamento/ linha 148-158 (boa alternativa para resolver o 'prompt' duplicando)          
            console.log(`
       escolha o que vai fazer:
  
      [f] => |   Musculação    | +força        | 
      [r] => |    Sparring     | +resistência  |
      [v] => |     correr      | +velocidade   |
      [c] => |  Pular Corda    | +Coordenação  | 
      [e| => |    Descansar    | +Energia      |
      `);

      const train = prompt(``).toLowerCase();

      //condicionais que controlam o status do personagem de acordo com a resposta à variável 'train'
       if (Rocky.energy > 50) {
        if (train === 'f') {
          Rocky.force += 8 //é += 3, não ao contrário
          Rocky.energy -= 5
          console.clear(prompt(`Isso, seu soco ficará mais forte, você ganhou 8 de força.`))
      } else if (train === 'r') {
        Rocky.resistance += 8
        Rocky.energy -= 5
          console.clear(prompt('Você ganhou 8 de resistência. Agora você aguenta os golpes do adversário.'))
      } else if (train === 'v') {
        Rocky.velocity += 7
        Rocky.energy -= 4
          console.clear(prompt('Você ganhou 7 de energia. Agora você está mais rápido. Seu soco ficará potente e seu desvio mais rápido.'))
      } else if (train === 'c')  {
        Rocky.coordenation += 7
        Rocky.energy -= 4
         console.clear(prompt('Você ganhou 7 de coordenação. Assim você terá mais chances de se desviar dos golpes adversários.'))
      } else if (train == 'e') {
        Rocky.energy += 10
         console.clear(prompt(`boa escolha, treino sem descanso é um treino perdido. Você ganhou 10 de energia.`));
      } else { (train !== ('f' || 'r' || 'v' || 'c' || 'e')) 
         console.clear();
         console.log(prompt('Você optou por não treinar, seu personagem ficará despreparado para lutar! '.red));
         
          }
          
       } else { 
         while (Rocky.energy <= 50)  {
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

//função que altomatizará os golpes adversários
function golpes () {
  console.clear(prompt('pressione ENTER'));
   const go = ['Jab' , 'Cruzado' , 'recuando' , 'Uppercut']
     goadv  = [];
     goadv  = Math.floor(Math.random() * 3);
    
//futuramente fazer algo que conte o status do adversário e se ele nao tiver condições, o math random não retronar determinado número
// if (veladv > 3 && foradv > 4 && cord > 3) faz um Math.random para tentar dar um uppercut >>>> fica pra próxima kkk

//condicionais que controlarão o status tanto do personagem quanto do adversario
      if( goadv == 0 ) {
    Apollo.velocity -= 2
    Rocky.resistance -= 1
    Rocky.force -= 1
    Rocky.energy -= 3
    Apollo.energy -= 1
    Apollo.points += 3
      console.log(Apollo.name , 'lançou um' , go[goadv].cyan , 'contra você\n');

  } else if (goadv == 1) {
    Apollo.velocity -= 1
    Rocky.resistance -= 2
    Rocky.force -= 2
    Apollo.energy -= 2
    Rocky.energy -= 4
    Apollo.points += 5
      console.log(Apollo.name, 'lançou um' , go[goadv].cyan , 'contra você\n');

   } else if (goadv == 2)  {  
    Apollo.velocity -= 3
    Apollo.coordenation -= 2
    Apollo.energy -= 1
    Apollo.points += 2
      console.log(Apollo.name , 'está recuando e lhe dando espaço.\n');
   } else {(goadv == 3)
    if (Rocky.retour() < Apollo.punch()) {
    Apollo.velocity -= 3
    Apollo.force -= 1
    Rocky.energy -= 5
    Rocky.resistance -= 5
    Rocky.velocity -= 3
    Apollo.energy -= 2
    Apollo.points += 10
       console.log(Apollo.name , 'lançou um' ,go[goadv].cyan  , 'contra você.\n');
   } else {
    Apollo.velocity -= 2
    Apollo.force -= 1
    Rocky.energy -= 2
    Rocky.resistance -= 2
    Rocky.velocity -= 3
    Apollo.energy -= 2
    Apollo.points += 2
       console.log(Apollo.name , 'tentou lançar um' ,  go[goadv].cyan , 'contra você. Mas você conseguiu recuar.\n');  
  } 
}
  return
}
//funçaão que será usada para perguntar ao usuário como proceder em luta.
function combat() {

  console.clear(prompt('Pressione ENTER para continuar. '))

  console.log(`
      O que deseja fazer?
     [1] => Golpear      | +++                      
     [2] => Ser atingido | ++ 
     [3] => Recuar       | +                 
`);

   reaction = +prompt(``);//guardará a resposta e de acordo com as condicionais(linha 285 - 355)

  if (reaction == 1) {

    console.log(`
   Escolha o golpe que quer utilizar

 [J] - Jab       | +  3 pontos  | dano = 1 -força  &  1 -resistência
 [C] - Cruzado   | +  5 pontos  | dano = 2 -força  &  2 -resistência
 [U] - Uppercut  | + 10 pontos  | dano = 3 -força  &  3 -resistência   &  2 -velocidade
 `);

  typePunch = prompt(``).toUpperCase();

  if(typePunch == 'J') {
    Rocky.velocity -= 2
    Apollo.force -= 1
    Apollo.resistance -= 1
    Apollo.energy -= 2
    Rocky.energy -= 
    Rocky.points += 3
      console.log('Você lançou um Jab contra seu adversário. '.gray.bold);
 
 } else if (typePunch == 'C'){
    Rocky.velocity -= 1
    Rocky.forceadv -= 2
    Apollo.resistance -= 2
    Rocky.points += 5
      console.log('Você lançou um Cruzado contra o seu adversário. '.gray.bold);

 } else if (typePunch == 'U') {

  if (Rocky.punch > Apollo.retour) {
    Rocky.velocity -= 2
    Rocky.force -= 1
    Rocky.energy -= 2
    Apollo.force -= 4
    Apollo.resistance -= 4
    Apollo.velocity -= 1
    Apollo.energy -= 5
    Rocky.points += 10
      console.log('Você acertou um Uppercut contra seu adversário. '.gray.bold);

  } else {(Rocky.punch < Apollo.retour) 
   Rocky.velocity -= 2
   Rocky.force -= 1
   Rocky.energy -= 2
   Apollo.velocity -= 2
   Apollo.resistance -= 2
   console.log('O adversário conseguiu desviar do seu Uppercut'.gray.bold)
    }  
  }  

} else if (reaction == 2) {
   Rocky.resistance -= 3
   Rocky.force -= 1
   Rocky.points += 2

   Apollo.velocity -= 2
   Apollo.coordenation -= 1
   Apollo.points += 3
 
 } else if  (reaction == 3) {

   if (Rocky.retour() > Apollo.punch()) {
    Rocky.velocity -= 2
    Rocky.coordenation -= 1
    Apollo.force -= 2
    Rocky.points -= 1
    Apollo.points-= 2
    Rocky.energy += 1
      console.log('Você conseguiu desviar do golpe adversário.'.green);

 } else if  (Rocky.retour() < Apollo.punch()){
    console.log(Rocky.retour())
    console.log(Apollo.punch())
    Rocky.resistance -= 2
    Rocky.force -= 2
    Rocky.points += 1
    Apollo.points += 2
     console.log('Não foi possível, Você foi atingido.'.red);
     } 
   }  
     console.clear(prompt('press ENTER'));
     console.log('Balboa'.cyan , Rocky.points , 'X', 'Creed'.yellow , Apollo.points);
 return
   }

  function points(){
  
  if(Rocky.points > Apollo.points) {
    console.log(`${Rocky.name.cyan} venceu  de ${Apollo.name.yellow} por um placar de: ${Rocky.points} X ${Apollo.points} `);
    console.log(`Infelizmente você perdeu essa luta.`);
     return
} else if(Rocky.points < Apollo.points) {
    console.log(`${Apollo.name.yellow} venceu de ${Rocky.name.cyan}por um placar de: ${Apollo.points} X ${Rocky.points} `);
    console.log(`Sua vitória te fez um lutador notável do boxe.`);
     return
  }
}

const rounds = [ 1 , 2 , 3 , 4 , 5];

function luta(){

    console.clear(prompt(`Chegou o dia da grande luta. Você se prepapou para enfrentar um adversário potente. \n
     Cuidado!! Se sua energia ou sua resistência zerar, você será nocauteado! `));
     console.clear(prompt(`Boa sorte, o round 1 irá começar! `));
  
    for(const round of rounds){
      if(Rocky.energy < 1 || Rocky.resistance < 1){
        break
      } else if (Apollo.energy < 1 || Apollo.resistance < 1){
        break
      }
      for (i = 0 ; i < 5 ; i++){

     console.clear(prompt(`\n\n :::::::>>>>>> ROUND ${round} <<<<<<<<<<:::::::::      \n\n `.blue.bold )); // mostra o round até 5

    golpes(); //chama a função golpes
    combat(); //chama a função combat
    
      if (Rocky.energy < 1 || Rocky.resistance < 1){
      console.log(`${Rocky.name} foi nocauteado.\n`.red) //
      dualstatus();
      console.clear(prompt('Aperte ENTER para continuar. '))
      console.log(`Infelizmente você perdeu essa luta.`);
       break  //condição que, se for verdadeira, vai para o laço de repetiçaõ e declarar nocaute
    
  } else if (Apollo.energy < 1 || Apollo.resistance < 1){
      console.log(`Você nocauteou ${Apollo.name}\n`.green);//
      dualstatus();
      console.clear(prompt('Aperte ENTER para continuar. '));

      console.log(`Sua vitória te fez um lutador notável do boxe. `);
      break  //condição que, se for verdadeira, vai para o laço de repetiçaõ e declarar nocaute
  } 
     console.clear();

    dualstatus();}
    points(); // essa função ta sendo chamada, e eu queria que só fosse chamada quando os rounds acabassem
    //manti ela fora mas mesmo depois de um nocaute, ela era chamada
    } 
  }
   luta();
 
 console.log(`Quer jogar novamente? Digite [s] para jogar novamente.`);
 var playagain = prompt(``).toLowerCase();
}