export class User{
  constructor(
    public email:string, 
    public name:string, 
    private password: string){}
  
  matches(another:User):boolean{
    return another !== undefined && another.email === this.email && another.password === this.password
  }
}

export const users = {
  "cicrano@gmail.com": new User('cicrano@gmail.com','Cicrano','cicrano123'),
  "beltrano@gmail.com": new User('beltrano@gmail.com','Beltrano','beltrano321')
}