import React, {useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";
import commonStyles from "../../p1-main/m1-ui/u1-app/App.module.css";
type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const setNameCallback = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value: newName} = e.currentTarget;
        setError("");
        setName(newName);
    };

    const addUser = (): void => {
        const decimalsStartMatch = decimalsStarCheck(name);

        if (name.trim() && !decimalsStartMatch) {
            setError(``);
            addUserCallback(name);
            setModalOpen(true);
            alert(`Приветствую, пользователь ${name}`);
        } else {
            setError(`ERROR: invalid name!!!`);
            setName("");
        }
    };

    const decimalsStarCheck = (name: string): boolean => {
        const regexp = /(^\d+)|(^\s)/g;
        const match = regexp.test(name);
        return match;
    }

    const totalUsers = users.length;

    return (
        <div className={commonStyles.hw3Wrapper}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        </div>
    );
}

export default GreetingContainer;