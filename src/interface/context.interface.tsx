import { Iuser } from "./user.interface";

export interface IAuthComponent {
    user:Iuser,
    loading:boolean,
    logout:() => void
}