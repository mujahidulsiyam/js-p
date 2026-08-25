// mini project 
let student = [
    {id:101,name:"Rahim",age:20,depertment:"CSE"},
    {id:102,name:"Kahim",age:22,depertment:"EEE"},
    {id:103,name:"Nahim",age:22,depertment:"EEE"},
];

function addStudent(name,age,depertment){
    let newId = student.length>0?student[student.length-1].id+1:101;
    let newStudent = {
        id : newId,
        name:name,
        age:age,
        depertment:depertment,
    }
    student.push(newStudent);
    console.log("Srudent added successfully ");
}

function getAll(){
    for (let stu of student){
        console.log(stu);
    }
}

function findStudent(id){
    let  foundstdnt = null;
    for (let stu of student){
       if(stu.id == id){
        foundstdnt=stu;
        break;
       }
    }
    if(foundstdnt){
        console.log("Found student",foundstdnt);
    }
    else{
        console.log("Error 404");
    }
}

// findStudent(101);

function deleteStudent(Id){
    let targetStdnt = -1
    for(let i = 0; i<student.length;i++){
        if(student[i].id== Id){
            targetStdnt = i;
            // console.log(targetStdnt);
            break;
        }}
        if(targetStdnt!=-1){
            let deletedStd = student.splice(targetStdnt,1)
            console.log(`deleted ${deletedStd[0].name},
                id:${targetStdnt} deletd`);
    }
        else{
            console.log("Error 404");
    }


}
// deleteStudent(103);