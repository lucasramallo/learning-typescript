import User from './models/User'
import Account from './models/Account'

const user = new User("Lucas", "13216694381");
const account = new Account("Corrente")


user.addAccount(account)

console.log(user)