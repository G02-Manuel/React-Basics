
//Crear Otro componente para la iteracion de los usuarios, con la finalidad de evitar los re-reander
import { Users } from "../interfaces";

//interface
interface props {
    user: Users;
}

export const UserRow = ({ user }: props) => {

    const { avatar, first_name, last_name, email } = user;

    return (
        <tr>
            <td><img style={{ width: '55px' }} src={avatar} alt="Avatar" /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}