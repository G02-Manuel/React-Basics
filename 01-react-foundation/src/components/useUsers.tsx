import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Users, ReqRespUsersList } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<Users[]> => {
    try {
        //Consume Service With Axios
        const { data } = await axios.get<ReqRespUsersList>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        console.log(error)
        return [];
    }
}

export const useUsers = () => {

    const [user, setUser] = useState<Users[]>([])
    const currentPageRef = useRef(1)

    useEffect(() => {

        loadUsers(currentPageRef.current)
            .then(users => setUser(users))
    }, [])

    const nextPage = async () => {
        currentPageRef.current++;
        const users = await loadUsers(currentPageRef.current)
        if (users.length > 0) {
            setUser(users)
        }
        else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current)
        setUser(users)
    }

    return {
        //return propertiess
        user,
        //return methods
        nextPage,
        prevPage,
    }
}
