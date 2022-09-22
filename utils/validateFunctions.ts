


//+7 (911) 111-11-11 phone string example

const bannedPhoneNumbers = [
    '+7 (906) 263-51-97'
]

export const validateName = value => !/[0-9!"#$%&'()*+,.\/:;<>=?@\[\]{}\\^_`~]/.test(value.trim()) && value?.length >= 2  && value?.length <=30  || false
export const validatePhone = value =>  {

    return (value?.match(/\d+/g)?.join('')?.length === 11 && value[4] === '9')  && !bannedPhoneNumbers.includes(value) || false
}
export const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase().trim());
}
export const validateCompany =  value => value.length >= 3

export const validateOrder = value => /^[0-9]{2}[а-яёА-ЯЁ]{2}-[0-9]{6}$/.test(value.trim()) && value?.length === 11 || false