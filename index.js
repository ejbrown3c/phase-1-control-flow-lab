//if the feet is between 0-400: 'This one is on me!'
//if the feet is over 2000 feet: 'I will gladly take your thirty bucks.'
//if the feet is over 2500 feet: 'No can do.'

function scuberGreetingForFeet(feet){
if ( feet <= 400 ) {
  return ('This one is on me!');
}
else if ( feet <= 2499 ) {
  return ('I will gladly take your thirty bucks.');
}
else if ( feet >= 2500 ) {
  return ('No can do.');
}
}


//if the city is NYC: 'Ok, sounds good.'
//if the city is not NYC: 'No go.'

function ternaryCheckCity(city) {
if ( city == 'NYC') {
 return ('Ok, sounds good.'); 
}
else if (city !== 'NYC') {
  return ('No go.');
}
}



function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return ('Thank you so much.');
      break;
    case 'not as generous':
      return ('Thank you.');
      break;
    default:
        return ( 'Bye.');
  }
}