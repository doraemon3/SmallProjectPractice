class Engine{
    constructor(words,type = 'nfa'){
        this.words = words;
        this.type = type;
        this.engine = method[type](words);
    }
    run(str){
        let engine = this.engine,
            state = [engine],
            count = {};
        this.words.forEach(item=>count[item] = 0);
        for (let c of str){
            let newState = [];
            state.forEach(item=>{
                if (item.loop){
                    newState.push(item);
                } 
                if (item.next && item.next[c]){
                    newState.push(item.next[c]);
                }
            });
            state = newState;
            state.forEach(item=>{
                item.accept && count[item.accept]++;
            })
        }
        console.log(count);
    }
}

const method = {nfa, dfa};

class Counter{
    constructor(){
        this.count = 0;
    }
    val(){
        return this.count++;
    }
}

function nfa(words){
    let seq = new Counter();
    let root = {
        ord: seq.val(),
        loop: true,
        accept: false,
        next:{},
        path:'',
    }
    words.forEach(item=>{
        let p = root;
        for (let c of item){
            if (!p.next[c]){
                //创建新的状态
                p.next[c] = {
                    ord: seq.val(),
                    loop: false,
                    accept: false,
                    next:{},
                    path:p.path + c,
                }
            }
            p = p.next[c];
        }
        p.accept = item;
    });
    console.log('状态数：'+ seq.count);
    return root;
}

function dfa(words){

}




let p2 = new Engine(['we','web','ebay','ywe'])
p2.run('webaywebay');
