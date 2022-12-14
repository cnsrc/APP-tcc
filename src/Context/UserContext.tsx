import AsyncStorage from '@react-native-async-storage/async-storage';
import { isLoaded } from 'expo-font';
import {createContext, ReactNode, useState, useEffect} from 'react'
interface UserProps  {
    id: string;
    name: string;
    email: string;
    password: string;
    kinship: string;
    childName: string;
    childBirth ?: string;
    gender?: 'M' | 'F';
    createdDate: Date;
}

interface UserContextType {
    userIsLoged: boolean,
    changeUserStatusLogin: () => void, 
    createNewUser: (user: UserProps) => void,
    user: UserProps | undefined,
    appIsLoading: boolean,
}

export const UserContext = createContext({}as UserContextType)

interface UserContextProviderProps {
    children: ReactNode,

}


export function UserContextProvider (props:UserContextProviderProps){
    const [userIsLoged, setUserIsloged] = useState (false)
    const [user, setUser] = useState<UserProps>()
    const [appIsLoading, setAppIsLoading] = useState (false)


    function changeUserStatusLogin(){

        if(userIsLoged === true){
            setUserIsloged(false)
        }
        else{
            setUserIsloged(true)
        }
    }

    async function getSaveDatas(){
        setAppIsLoading(true)

        try {
            const dataKey = '@saudebaby'
            const userResponse = await AsyncStorage.getItem(`${dataKey}/user`)
            if(userResponse){
                const storage = JSON.parse(userResponse)
                setUser(storage)
    
            }
    
            const isLoggedResponse = await AsyncStorage.getItem(`${dataKey}/isLogged`)
            if(isLoggedResponse){
                const storage = JSON.parse(isLoggedResponse)
                setUserIsloged(true)
            }
        } catch (error) {
            console.warn(error)    
        }

        setAppIsLoading(false)

    }

    async function createNewUser(user: UserProps){
        const dataKey = '@saudebaby'
        setUser(user)
        
        changeUserStatusLogin()
       try{
            const userFormated= JSON.stringify(user)
            const userIsLogedFormated = JSON.stringify(userIsLoged)
            await AsyncStorage.setItem(`${dataKey}/user`, userFormated)
            await AsyncStorage.setItem(`${dataKey}/isLogged`,userIsLogedFormated)
            
        }
        catch(error){
            console.warn(error)
        }
      
        
    }

    useEffect(() => { 
        getSaveDatas()
        //AsyncStorage.clear()
    }, [])

    return(
        <UserContext.Provider value={
            {
                changeUserStatusLogin,
                userIsLoged,
                createNewUser,
                user,
                appIsLoading
            }
        }
        > 
            {props.children}
        </UserContext.Provider>
    )
}