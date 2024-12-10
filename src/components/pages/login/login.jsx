import style from "./style.module.css";
function Login() {
    return (
        <main>
            <form className={style.form}>
                <input required type="text" />
                <input required type="password" />
                <button type="submit">Войти</button>
            </form>
        </main>
    )
}

export default Login