/* up to 145000 is 0%
    145001 - 250000 is 2%
    250001 - 325000 is 5%
    325001 - 750000 is 10%
    over 750000 is 12%

    first time buyers get an extra relief so they pay 0% up to 175000
    */

    class TaxBand {
        constructor(lowerBound, percentage){
            this.lowerBound = lowerBound;
            this.percentage = percentage;
        }
    }
    
    const arrayOfTaxBands = [
        new TaxBand(750001, 0.12),
        new TaxBand(325001, 0.1),
        new TaxBand(250001, 0.05),
        new TaxBand(145001, 0.02), 
    ]

    function lbtt(salePrice){
        let taxToPay = 0;

        for(let i=0; i<arrayOfTaxBands.length; i++){
            if(salePrice > arrayOfTaxBands[i].lowerBound){
                taxToPay += Math.round((salePrice - arrayOfTaxBands[i].lowerBound)*arrayOfTaxBands[i].percentage);
                salePrice = arrayOfTaxBands[i].lowerBound;
            }
        }
        
        return taxToPay;
    }

    console.log(lbtt(200000));

module.exports = lbtt;



