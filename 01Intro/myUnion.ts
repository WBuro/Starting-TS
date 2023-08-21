let score: number | string =33

score = 44

score = '31'


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let Buro: User | Admin = { name: 'Buro', id:3169}

Buro = {username: 'BuroW', id:3169}

const data: number[] = [1,2,3]
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = ["1", "2", "3"]