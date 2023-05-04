function formatDate(date) {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
}

function maskCardNumber(cardNumber) {
    const lastDigits = cardNumber.slice(-4);
    const numberDigits = cardNumber.length - 4 ;
    const hiddenDigits = "*".repeat(cardNumber.length - 4);
    return `${hiddenDigits}${lastDigits}`;
}

const formatAdress = ({ buildingNumber, streetName, city, country}) =>{
    return `Rua ${streetName}, ${buildingNumber}, ${city} - ${country}  `
  }

export { formatDate, maskCardNumber, formatAdress };