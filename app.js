/**
 * get element
 */
const student_submit = document.getElementById('student_submit');
const shahadt_st = document.getElementById('shahadt_st');
const vora  = document.querySelector('.vora');

student_submit.addEventListener('submit', function(e){
    e.preventDefault();

    let name = student_submit.querySelector('input[placeholder="Name"]');
    let roll = student_submit.querySelector('input[placeholder="Roll Number"]');
    let student_class = student_submit.querySelector('input[placeholder="Class Name"]');
    let photo = student_submit.querySelector('input[placeholder="Your Photo"]');
    let gender = student_submit.querySelector('input[type="radio"]:checked');
    let ban = student_submit.querySelector('input[placeholder="Bangla"]');
    let en = student_submit.querySelector('input[placeholder="English"]');
    let math = student_submit.querySelector('input[placeholder="Math"]');
    let sci = student_submit.querySelector('input[placeholder="Science"]');
    let ss = student_submit.querySelector('input[placeholder="social Science"]');
    let rel = student_submit.querySelector('input[placeholder="Relaigion"]');

    if(name.value == '' || roll.value =='' || student_class.value == '' || photo.value == '' || gender.value == '' || ban.value == '' || en == '' || math.value == '' || sci.value == '' || ss.value == '' || rel.value == '' ){
        vora.style.display='block';
    }else{
        
        let student_data = [];
        if(dataGet('ruselt_data')){
            student_data = dataGet('ruselt_data');
        }

        student_data.push({
            name          :   name.value,
            roll          :   roll.value,
            student_class :   student_class.value,
            photo         :   photo.value,
            gender        :   gender.value,
            ban           :   ban.value,
            en            :   en.value,
            math          :   math.value,
            sci           :   sci.value,
            rel           :   rel.value
        });

        dataSend('ruselt_data', student_data);


            student_submit.querySelector('input[placeholder="Name"]').value = '';
            student_submit.querySelector('input[placeholder="Roll Number"]').value = '';
            student_submit.querySelector('input[placeholder="Class Name"]').value = '';
            student_submit.querySelector('input[placeholder="Your Photo"]').value = '';
            student_submit.querySelector('input[type="radio"]');
            student_submit.querySelector('input[placeholder="Bangla"]').value = '';
            student_submit.querySelector('input[placeholder="English"]').value = '';
            student_submit.querySelector('input[placeholder="Math"]').value = '';
            student_submit.querySelector('input[placeholder="Science"]').value = '';
            student_submit.querySelector('input[placeholder="social Science"]').value = '';
            student_submit.querySelector('input[placeholder="Relaigion"]').value = '';
    }
    allstudentdata();
});

allstudentdata();
function allstudentdata(){

    let all_data = dataGet('ruselt_data') ? dataGet('ruselt_data') : [] ;
    
    let data = '';
    all_data.map((student, index) => {

        data += `
        
        <tr>
            <td>1</td>
            <td>${student.name}</td>
            <td>${student.roll}</td>
            <td>${student.student_class}</td>
            <td>${student.gender}</td>
            <td>A+</td>
            <td>4.00</td>
            <td> <img style="width:30px;object-fit:cover;" src="${student.photo}"></td>
            <td>
            <button class="btn btn-info btn-sm">View</button>
            <button onclick= "deletestudent(${index})" class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>

        `;
    }); 

    shahadt_st.innerHTML = data;
};

/**
 * student delete funtion
 */

function deletestudent(id){

    let store_data = dataGet('ruselt_data');
    store_data.splice(id,1);
    dataSend('ruselt_data', store_data);
    allstudentdata();

};