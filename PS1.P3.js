const func =(string1, decoFunc)=> decoFunc(string1)

//first experssion 
const experssion1 = func("supercalifragilisticexpialidocious", (str1) => { return str1.toLowerCase().split(/(?=c)/g)} )

//second expression
const experssion2 = func("supercalifragilisticexpialidocious", (str1) => { 
    const newStr = str1.replace(/a/g, "A");
    count = 0;
    for (let i=0; i<str1.length; i++){
        if(str1[i] ==='a'){
            count++;
        }
    }
    return { originalString: str1, modifiedString: str1.replace(/a/g, "A"), numberReplaced: str1.split("a").length-1, length: str1.length };
})
module.exports = { func }