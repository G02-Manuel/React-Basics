import { UserRow } from "./UserRow";
import { useUsers } from "./useUsers";

export const UserPages = () => {

    const {user, prevPage, nextPage} = useUsers()

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map(user => (
                            <UserRow key={user.id} user={user} />
                        ))
                    }
                </tbody>
            </table>
            <div>
                <button onClick={prevPage}>Prev</button>
                &nbsp;
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    )
}
