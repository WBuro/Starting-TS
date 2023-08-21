interface User {
    readonly dbId: number;
    email: string,
    userId: number,
    googleId?: string
    //startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string
    role
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}


const buro: User = { dbId:31, 
    email: 'buro@gmail.com', 
    userId:13, 
    role: 'ta', 
    githubToken:'githun', 
    
    startTrail: () => {
    return 'AAAAAA'
}, 
getCoupon: (name:'Buro10') =>{
    return 10
}}