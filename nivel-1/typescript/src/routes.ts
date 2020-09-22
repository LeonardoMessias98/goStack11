import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email:'messiasleonardo@gmail.com',
    password: '123456',
    name: 'Leonardo',
    age: 21,
    techs: [
      'ReactJs',
      'React Native',
      'Redux',
      'Typescript',
      { title: 'Javascripto', experience: 100}
    ]
  })

  return response.json(user);
}