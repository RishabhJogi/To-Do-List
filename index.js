let task_list = []
let itemIndex;



function renderTable() {
    document.getElementById("table-body").innerHTML = task_list.map((item, index) => {
        return `
            <tr id="table-row-${index}" class="">
                <th scope="row">${index + 1}</th>
                <td>${item.taskName}</td>
                <td>${item.taskDesc}</td>
                <td>${item.dateCreated.toLocaleString()}</td>
                <td>
                    <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#updateModal" onclick="update_task(${index})">
                        Edit
                    </button>

                    <button class="btn btn-danger" onclick="delete_task(${index})">Delete</button>


                    <button type="button" class="btn btn-warning" data-bs-toggle="modal"
                        data-bs-target="#Modal_view" onclick="view_task(${index})" >
                        View
                    </button>
                </td>
            </tr>`;
    }).join("");  // join to remove commas
}


function update_task(index) {
    console.log(task_list[index]);
    let task = task_list[index];

    document.getElementById("updateTaskName").value = task.taskName;
    document.getElementById("updateValueTextarea").value = task.taskDesc

    itemIndex = index;
}

function save_task() {
    console.log(itemIndex);
    let task = task_list[itemIndex]
    const updatedDate = new Date();

    const updateName = document.getElementById("updateTaskName").value
    const updatedDesc = document.getElementById("updateValueTextarea").value

    task.taskName = updateName
    task.taskDesc = updatedDesc;
    task.dateCreated = updatedDate;

    renderTable();

}

function view_task(index) {
    let task = task_list[index]
    document.getElementById("view-desc").innerText = task.taskDesc;

}
function delete_task(index){

    task_list.splice(0,1);

    renderTable();

}

function add_task() {
    let task_name = document.getElementById("add_task").value;
    let task_description = document.getElementById("add_desc").value;
    const currentDate = new Date();

    let add_task_obj = {
        taskName: task_name,
        taskDesc: task_description,
        dateCreated: currentDate,
    };

    task_list.push(add_task_obj);
    console.log(task_list);

    document.getElementById("add_task").value = '';
    document.getElementById("add_desc").value = '';

    renderTable();  // refresh table after adding
}



