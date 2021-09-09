let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000 
}, {
    id: 3,
    salary: 2000
}];



const getEmpleado = async (id)=>{
    return new Promise ((resolve,reject)=>{
        let empleado = employees.find(x => x.id === id)
        if (empleado){
            setTimeout(()=>{resolve(empleado)}, 2000);
        } else {
            reject('error')
        }           
        })
}



const getSalario = async (obj)=>{
    return new Promise ((resolve, reject)=>{
        
        let id = obj.id

        if (salaries.find(x => x.id === id) != null) {
            let salario = salaries.find(x => x.id === id).salary
            resolve(salario)
        } else {
            reject('salary not found')
        }
    })
}



async function printData (id) {
    try {
    const employee = await getEmpleado(id) 
    console.log(employee.name)
    const salary = await getSalario(employee)
    console.log(salary);
    } catch (err){
        console.log(err)
    }
}

printData(1)
