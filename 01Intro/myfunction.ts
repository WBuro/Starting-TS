/* function addTwo(numb: number):number {
    //return numb + 2
    return 5
}

function getUpper(value:string) {
    return value.toUpperCase()
}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}

loginUser('B','b@e')

addTwo(5)
getUpper("aaa")
 */
/* function getValue(myVal:number):boolean {
    if (myVal > 5) {
        return true
    }
    return '200 OK'
} */

const heroes = [ 'Joker' , 'Batman ' , 'Superman']


//Object


/* heroes.map((hero):string => {
    return `hero is ${hero}`
})

const User = {
    name: 'Buro',
    email: 'buro@gmail.com',
    isActive: true
}

function createUser({name:string, isPaid: boolean}){}

createUser({name: 'Buro', isPaid: false, email:'buro@gmail.com'})

function createCourse():{name:string, price:number}{
    return {name: 'reactjs',price:399}
} */

/* type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User):User{
    return {name:'', email: '', isActive: true}
}

createUser({name:'', email: '', isActive: true}) */

type User = {
    readonly _id:string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: '1478',
    name: 'h',
    email: 'buro@gmail.com',
    isActive: false
}
 //myUser._id = '1478'
    type cardNumber = {
        cardNumber: string
    }

    type cardDate = {
        cardDate: string
    }

    type cardDetails = cardNumber & cardDate & {
        cvv: number
    }

export{}