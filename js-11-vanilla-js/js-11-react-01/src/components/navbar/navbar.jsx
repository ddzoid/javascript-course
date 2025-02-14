
export const Navbar = () => {

        const cohort = 50;

        const navbarJsx = (
        <nav>
            {/* Se imprime el numero de cohorte */}
            <h2>Cohorte </h2>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Contacto</li>
            </ul>
    </nav>
    );

    return navbarJsx;
}

// Los parentesis no son necesarios pero ayuda a que sea legible
// export { Navbar };