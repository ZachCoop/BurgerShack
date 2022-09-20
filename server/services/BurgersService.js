import { BurgerDB } from "../db/BurgerDB.js"
import { BadRequest } from "../utils/Errors.js"



class BurgersService {
  async removeBurger(burgerId) {
    const burger = await this.getBurgerById(burgerId)
    BurgerDB.burgers.splice(BurgerDB.burgers.indexOf(burger), 1)
  }
  getBurgerById(burgerId) {
    const burger = BurgerDB.burgers.find(b => b.id == burgerId)
    if (!burger) {
      throw new BadRequest('Invalid Id')
    }
  }
  createBurger(formData) {
    formData.id = Math.floor(Math.random() * 10000)
    BurgerDB.burgers.push(formData)
    return formData
  }
  async getBurgers() {
    const res = BurgerDB
    return res.burgers
  }
}


export const burgersService = new BurgersService()