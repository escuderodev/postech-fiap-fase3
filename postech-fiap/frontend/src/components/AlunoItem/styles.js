import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    content: {
        flex: 1,
        marginLeft: 16,
        padding: 15,
        backgroundColor: "#e5bf3c",
        borderRadius: 10
    },
    id: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    createdAt: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#6F4E37",
        marginBottom: 16,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#e5bf3c',
        width: '80',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});