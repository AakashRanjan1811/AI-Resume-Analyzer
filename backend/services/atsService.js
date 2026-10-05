const calculateATS = (resumeText) => {

    const skills = [

        'react',
        'node',
        'mongodb',
        'express',
        'javascript',
        'tailwind',
        'docker',
        'aws',
        'git',
    ]

    let score = 0

    skills.forEach((skill) => {

        if (

            resumeText
                .toLowerCase()
                .includes(skill)
        ) {

            score += 10
        }
    })

    return Math.min(score, 100)
}

export default calculateATS