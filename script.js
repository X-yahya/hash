
class HashMap
{
    constructor(capacity = 16) 
    {
        this.capacity = capacity;
        this.table = new Array(capacity);
    }


    hash(key) 
    {
        let hashCode = 0 ; 
        const primeNumber  = 31 ;
        for(let i = 0 ; i < key.lenght ; ++i)
        {
            hashCode = primeNumber * hashCode + key.charCodeAt(i) ; 
        }  
        return hashCode % this.capacity  ;
    }
    resize()
    {
        const nCapacity = this.capacity*2 ; 
        const nTable = new Array(nCapacity) ; 


        for (let i = 0 ;  i < capacity ; ++i )
        {
            if(this.table[i])
            {
                for(let [key , value] of this.table[i])
                {
                    const index = this.hash(key)%nCapacity ; 
                    if(!nTable[index])
                {
                    nTable[index] = [] ; 
                }
                nTable[index].push([key,value]) ; 
                }
            }
        }
        this.capacity = nCapacity ; 
        this.table = nTable ; 
    }
    set(key , value)
    {
        const index =  this.hash(key) ; 
        if(!this.table[index])
        {
            this.table[index] = [] ; 
        }
        for(let pair of this.table[index])
        {
            if(pair[0]===key)
            {
            pair[1] = value  ; 
            return  ; 
            }
        }
        this.table[index].push([key,value]) ; 
        this.size++ ; 
        if(this.size/this.capacity > this.loadFactor)
        {
            this.resize() ; 
        }
    }
    get(key)
    {
        const index = this.hash(key)  ; 
        const bucket = this.table[index] ; 
        if(!bucket) return -1 ; 
        for(let pair of bucket)
    
        {
            if (pair[0]==key)
            {
                return pair[1] ; 
            }
        
        }
        return -1 ; 

    }

}

let hm1 = new HashMap()  ; 

hm1.set("apple" , "red") ; 
console.log(hm1.get("apple"))
console.log(hm1) ;