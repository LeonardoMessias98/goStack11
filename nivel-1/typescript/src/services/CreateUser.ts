interface TechObject {
  title: string
  experience: number
}

interface CreateUserData {
  name?: string
  email: string
  password: string
  age?: number
  techs: Array<string | TechObject>
}

export default function createUser ({name, age, email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    age
  }

  return user;
}