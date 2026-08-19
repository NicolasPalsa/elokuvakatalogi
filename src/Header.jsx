import { useContext } from 'react'

function Header({ UserContext, handleChangeUsername }) {

    const user = useContext(UserContext)

    return (
        <>
            <h1>Tervetuloa, {user}!</h1>
            <button onClick={handleChangeUsername}>Change username</button>
        </>
    )
}

export default Header