const classA = [
    {
        name: 'Mayk',
        grade: 9.8
    },
    {
        name: 'Diego',
        grade: 10
    },
    {
        name: 'Fulano',
        grade: 2
    }
]

const classB = [
    {
        name: 'Cleiton',
        grade: 10
    },
    {
        name: 'Robson',
        grade: 3
    },
    {
        name: 'Siclano',
        grade: 2
    },
    {
        name: 'Novo Aluno',
        grade: 10
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, whichclass) {
    if (average > 5) {
        console.log(`${whichclass} average: ${average}. Congrats`)
    } else {
        console.log(`${whichclass} average: ${average}. Isn't good enough.`)
    }
}

function studentsFlunked(students) {
    for (let student of students) {
        checkStudentsFlunked(student)
        sendMessageStudentsFlunked(student)
    }
}

function checkStudentsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageStudentsFlunked(student) {
    if (student.flunked) {
        console.log(`${student.name} is flunked`)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunked(classA)
studentsFlunked(classB)