import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../pages/Welcome'
import { LogIn } from '../pages/Login'
import { DiscipliniesList } from '../pages/ListDisciplinie'
import { DisciplineForm } from '../pages/DisciplineForm'
import { ListAluno } from '../pages/ListAluno'
import { ListProfessor } from '../pages/ListProfessor'
import { ListUser } from '../pages/ListUser'
import { SingUp } from '../pages/SingUp'


const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="LogIn"
                component={LogIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DiscipliniesList"
                component={DiscipliniesList}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="DisciplineForm"
                component={DisciplineForm}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ListAluno"
                component={ListAluno}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ListProfessor"
                component={ListProfessor}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ListUser"
                component={ListUser}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SingUp"
                component={SingUp}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}