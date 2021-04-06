
var Web3 = require('web3')
    

exports.try = (req, res, next) => {

    
    async function Get_param() {
        const id_chain = await web3js.eth.net.getId()
        const blockNum = await window.web3.eth.getBlockNumber()
        res.status(201).json({id:id_chain, blockNum:blockNum})
        
    }
    
    
};