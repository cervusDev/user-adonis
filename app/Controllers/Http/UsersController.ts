import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
export default class UsersController {
  public async create({ request }: HttpContextContract) {
    const { name, username } = request.only(['name', 'username'])
    const createdUser = await User.create({
      name,
      username,
    })
    return createdUser
  }

  public async index() {
    const all = await User.all()

    return all
  }
}
