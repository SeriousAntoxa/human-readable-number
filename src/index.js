module.exports = function toReadable (number) {
  
    let numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let numbers2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    number = number + ''

    if (number.length === 1) {
        return numbers1[+number]
    }

    if (number.length === 2) {
        
        if (+number[0] === 1) {
            return numbers1[+number]
        }
        
        if (+number[1] === 0) {
            return `${numbers2[+number[0]-2]}`
        } else {
            return `${numbers2[+number[0]-2]} ${numbers1[+number[1]]}`
        }
    }

    if (number.length === 3) {

        if (+number[1] === 1) {
            return `${numbers1[+number[0]]} hundred ${numbers1[+(number[1]+number[2])]}`
        } 
        
        if (+number[1] === 0 && +number[2] === 0) {
            return `${numbers1[+number[0]]} hundred`
        } else if (+number[1] === 0) {
            return `${numbers1[+number[0]]} hundred ${numbers1[+number[2]]}`
        } else if (+number[2] === 0) {
            return `${numbers1[+number[0]]} hundred ${numbers2[+number[1]-2]}`
        } else {
            return `${numbers1[+number[0]]} hundred ${numbers2[+number[1]-2]} ${numbers1[+number[2]]}`
        }
    }
    
}
