import styles from './NavBar.module.css'

function NavBar() {

    const data = new Date
    const today = data.getDate()
    const week = data.getUTCDay()
    const month = data.getMonth()

    const days = ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const dayName = days[week-1]
    const monthName= months[month]


    return (

        <nav className={styles.navBar}>
            <h1>Meu Dia</h1>
            <p>{dayName} , {today} de {monthName} </p>

        </nav>

    )
}

export default NavBar