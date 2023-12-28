#!/usr/bin/env node

import inquirer from  "inquirer"

let input=await inquirer.prompt
(
   [
      {
         type:'number',
         name:'Firstnumber',
         message:'Enter your first number:'
      },
      {
         type:'number',
         name:'Secondnumber',
         message:'Enter your second number:'
      },
      {
         type:'list',
         name:'operator',
         message:'Select any one operator',
         choices:['Additon', 'Subration' ,'Multiplacation','Division']
      }
  ]
)

if(input.operator==='Additon' )
{
   console.log(`${input.Firstnumber} + ${input.Secondnumber} = ${input.Firstnumber + input.Secondnumber }`);
}
else if(input.operator==='Subration' )
{
   console.log(`${input.Firstnumber} - ${input.Secondnumber} = ${input.Firstnumber - input.Secondnumber }`);
}

else if(input.operator==='Multiplacation' )
{
   console.log(`${input.Firstnumber} x ${input.Secondnumber} = ${input.Firstnumber * input.Secondnumber }`);
}

else if(input.operator==='Division' )
{
   console.log(`${input.Firstnumber} / ${input.Secondnumber} = ${input.Firstnumber / input.Secondnumber }`);
}
