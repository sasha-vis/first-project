function logicalOperatorsTask() {
    // for (let i = 0; i < 3; i += 1) {
    //     let newStudent = prompt('Введите имя нового студента!');
    //     if (newStudent) {
    //       newStudent = newStudent.trim();
    //       alert(`Добро пожаловать, ${newStudent}!`)
    //     }
    // }

    // let i = 0
    // while (i < 3) {
    //     let newStudent = prompt('Введите имя нового студента!');
    //     if (newStudent) {
    //       newStudent = newStudent.trim();
    //       alert(`Добро пожаловать, ${newStudent}!`)
    //     }

    //     i += 1
    // }

    let i = 0
    do {
        let newStudent = prompt('Введите имя нового студента!');
        if (newStudent) {
          newStudent = newStudent.trim();
          alert(`Добро пожаловать, ${newStudent}!`)
        }

        i += 1
    } while (i < 3)
}

function logicalOperatorsTask2() {
    let sum = 0
    for (let i = 0; i <= 100; i++) {
        sum += i
    }
    alert(sum)
}