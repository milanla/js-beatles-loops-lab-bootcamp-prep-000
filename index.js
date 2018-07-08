function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for (let i=0; i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  const shoutedFacts = []
  
  let i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`) 
    i+++
  }
  
  return shoutedFacts
}