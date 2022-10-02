function verifyBody(data){
    if(!data?.logo){
        return {
            success: false,
            msg: "logo is missing"
        }
    }

    if(!data?.name){
        return {
            success: false,
            msg: "name is missing"
        }
    }

    if(!data?.address1){
        return {
            success: false,
            msg: "address1 is missing"
        }
    }

    if(!data?.address2){
        return {
            success: false,
            msg: "address2 is missing"
        }
    }

    if(!data?.orderId){
        return {
            success: false,
            msg: "orderId is missing"
        }
    }

    if(!data?.customerName){
        return {
            success: false,
            msg: "customerName is missing"
        }
    }

    if(!data?.paymentTerms){
        return {
            success: false,
            msg: "paymentTerms is missing"
        }
    }

    if(!data?.date){
        return {
            success: false,
            msg: "date is missing"
        }
    }

    if(!data?.items){
        return {
            success: false,
            msg: "items is missing"
        }
    }

    for(let i = 0; i < data.items.length; i++){
        if(!data.items[i]?.name){
            return {
                success: false,
                msg: `items.${i}.name is missing`
            }
        }

        if(!data.items[i]?.qty){
            return {
                success: false,
                msg: `items.${i}.qty is missing`
            }
        }

        if(typeof data.items[i].qty !== "number"){
            return {
                success: false,
                msg: `items.${i}.qty is needs to be number`
            }
        }

        if(!data.items[i]?.rate){
            return {
                success: false,
                msg: `items.${i}.rate is missing`
            }
        }

        if(isNaN(parseFloat(data.items[i].rate))){
            return {
                success: false,
                msg: `items.${i}.rate is not a valid number`
            }
        }

        if(!data.items[i]?.amount){
            return {
                success: false,
                msg: `items.${i}.amount is missing`
            }
        }

        if(isNaN(parseFloat(data.items[i].amount))){
            return {
                success: false,
                msg: `items.${i}.amount is not a valid number`
            }
        }
    }

    if(!data?.total){
        return {
            success: false,
            msg: `total is missing`
        }
    }

    if(isNaN(parseFloat(data?.total))){
        return {
            success: false,
            msg: `total is not a valid number`
        }
    }

    if(!data?.balanceDue){
        return {
            success: false,
            msg: `balanceDue is missing`
        }
    }

    if(isNaN(parseFloat(data?.balanceDue))){
        return {
            success: false,
            msg: `balanceDue is not a valid number`
        }
    }

    if(!data?.notes){
        return {
            success: false,
            msg: "notes is missing"
        }
    }

    if(!data?.terms){
        return {
            success: false,
            msg: "terms is missing"
        }
    }

    return {
        success: true
    }
}

module.exports = {
    verifyBody
}