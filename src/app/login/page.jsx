import './_login.scss'

const LoginPage = () => {
    return (
        <div className='login'>
            <div className="lWrapper">
                <div className='lButton'>Sign in with Google </div>
                <div className='lButton'>Sign in with GitHub </div>
                <div className='lButton'>Sign in with Facebook </div>
            </div>
        </div>
    )
}

export default LoginPage