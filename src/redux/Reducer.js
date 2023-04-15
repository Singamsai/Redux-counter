const initialdata = {
    name:'singam',
    number:0,
    setnumber:"",
}

const Reducer = (storedata=initialdata, action)=>{  
     if(action.type === 'count'){
        return{         
            number: action.number,
            setnumber: action.setnumber
        }
    }
    return storedata;
}



export default Reducer