const skills = {
    logiciels: [
        { name: 'Webstorm', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webstorm/webstorm-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'mongodb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'},
        { name: 'node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'},
    ],
    languages: [
        { name: 'HTML 5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS 3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'SASS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
        { name: 'React Router', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg' },
        { name: 'Typescript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
    ]
};

export default function Skills() {
    return (
        <div className="skills-container">
            <h2 className="skills-title">Mes compétences</h2>

            <div className="skills-grid">
                <div className="skills-category">
                    <h3 className="category-title">Logiciels</h3>
                    <div className="skills-icons">
                        {skills.logiciels.map((skill, idx) => (
                            <div key={idx} className="skill-icon">
                                <div className="skill-icon-box">
                                    <img src={skill.logo} alt={skill.name} className="skill-icon-img" />
                                </div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-category">
                    <h3 className="category-title">Technologies Web</h3>
                    <div className="skills-icons">
                        {skills.languages.map((skill, idx) => (
                            <div key={idx} className="skill-icon">
                                <div className="skill-icon-box">
                                    <img src={skill.logo} alt={skill.name} className="skill-icon-img" />
                                </div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}