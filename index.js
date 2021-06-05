function introduction (name) {
    return `Hi, my name is ${name}.`
}
console.log(introduction('Josh'));

function introductionWithLanguageOptional (name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};
console.log(introductionWithLanguageOptional('Gracie', 'JavaScript'));

function introductionWithLanguageOptional (name, language = 'JavaScript'){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
};
console.log(introductionWithLanguageOptional('Gracie'));

function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage('Josh', 'Ember.js'));