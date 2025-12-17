export default function Home() {
    return (
        <main className="home">
            <section className="hero">
                <h1 className="title">
                    Passionné par les nouvelles technologies, j'ai choisi de me reconvertir
                    professionnellement après 6 ans chez McDonald's pour suivre ma passion
                    pour la programmation.
                </h1>

                <p className="description">
                    Avant même de commencer ma formation, je m'intéressais déjà au développement
                    et j'avais exploré quelques bases en Python, bien que de manière très limitée.
                </p>

                <p className="description">
                    Afin de me développer dans le domaine du développement web, j'ai intégré
                    la formation certifiante intégrateur web niveau Bac +2 d'OpenClassrooms
                    au cours de laquelle j'ai acquis des compétences solides en HTML, CSS, SASS,
                    JavaScript et React.
                </p>

                <p className="description">
                    Je suis très enthousiaste à l'idée de découvrir de nouvelles opportunités
                    et développer de nouvelles compétences dans le domaine du développement web.
                    J'ai choisi de travailler avec React Router car je comprends mieux ce qui
                    se passe avec JavaScript.
                </p>
            </section>

            <div className="separator"></div>

            <section className="methods">
                <h2>Méthodes</h2>
                <ul>
                    <li>Mobile First</li>
                    <li>Responsive Design</li>
                    <li>Accessibilité</li>
                    <li>SEO</li>
                </ul>
            </section>

            <div className="separator"></div>

            <section className="tools-table">
                <h2>Outils & Technologies</h2>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Logiciels</th>
                            <th>Langages / Frameworks</th>
                            <th>Outils</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>VS Code</td>
                            <td>HTML5</td>
                            <td>Git</td>
                        </tr>
                        <tr>
                            <td>Figma</td>
                            <td>CSS3</td>
                            <td>GitHub</td>
                        </tr>
                        <tr>
                            <td>Postman</td>
                            <td>JavaScript</td>
                            <td>Terminal</td>
                        </tr>
                        <tr>
                            <td>Slack</td>
                            <td>React</td>
                            <td>DevTools</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Redux</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>React Router</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>SASS</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}