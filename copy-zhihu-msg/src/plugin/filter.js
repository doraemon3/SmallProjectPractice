const filter = {};
filter.textToHtml = function(text){
    return text.replace(/\n/g,'<br/>');
}
module.exports = filter;