var nft_obj = {};

function formatted_string(pad, str) {
  return (pad+str).slice(-pad.length);
}

// for(var i=1;i<73;i++) {
//   nft_obj[Object.keys(nft_obj).length+1] = {
//     "name": "Royale Rarities - Queen of Queens (Origins Series)",
//     "description": `Origins Series (#${formatted_string("000", i)} of 72)`,
//     "image": `https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen${formatted_string("00", i)}.jpg`,
//     "external_url": "",
//     "attributes": [
//     ]
//   }
// }


const obj0 = {
    "name": "Nobita",
    "description": "He is very lazy, poor in academics but kind",
    "image": "https://secure-waters-79114.herokuapp.com/images/nobita.jpg",
    "external_url": "",
    "attributes": [
    ]
}
nft_obj["0"] = obj0;
const obj1 = {
    "name": "Sizuka",
    "description": "She is very beautiful, loving and innocent",
    "image": "https://secure-waters-79114.herokuapp.com/images/sizuka.jpg",
    "external_url": "",
    "attributes": [
    ]
}
nft_obj["1"] = obj1;
const obj2 = {
    "name": "Gian",
    "description": "He is rude, fatty and annoying",
    "image": "https://secure-waters-79114.herokuapp.com/images/gian.jpg",
    "external_url": "",
    "attributes": [
    ]
}
nft_obj["2"] = obj2;
const obj3 = {
    "name": "Dekisugi",
    "description": "He is very intelligent.",
    "image": "https://secure-waters-79114.herokuapp.com/images/dekisugi.jpg",
    "external_url": "",
    "attributes": [
    ]
}
nft_obj["3"] = obj3;
const obj4 = {
    "name": "Suneo",
    "description": "He is very rich.",
    "image": "https://secure-waters-79114.herokuapp.com/images/suneo.jpg",
    "external_url": "",
    "attributes": [
    ]
}
nft_obj["4"] = obj4;
console.log(nft_obj)
module.exports = nft_obj;
// = {
  
//   "1": {
//     "name": "Royale Rarities - Queen of Queens (Origins Series)",
//     "description": "Origins Series (#001 of 36)",
//     "image": "https://s3.amazonaws.com/royale.finance/queen/royaleNFT-queen01.jpg",
//     "external_url": "",
//     "attributes": [
//     ]
//   }
  
// }