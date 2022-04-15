import {Navigate} from 'react-router-dom';

const SignInPage = ({user}) => {
    return (
        (user && user.loggedIn) ? (
            <Navigate to='/'/>
        ) : (
            <div className="form">
                <form onSubmit={() => {
                    localStorage.setItem('user', JSON.stringify({loggedIn: true}))
                }}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="user-name" required/>
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" required/>
                    </div>
                    <div className="button-container">
                        <button className='signin-button'>Sign In</button>
                    </div>
                </form>
            </div>)
    )
}

export default SignInPage;
