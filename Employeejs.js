console.log("Hello TO Js Code...! ");

//UC1 = EMPLOYEE PRESENT ABSENT
const IS_ABSENT = 0
let employCheck = Math.floor(Math.random() * 10) % 2;
if (employCheck == IS_ABSENT)
{
    console.log("Employee is Present");
}
else
{
    console.log("Employee is Absent")
}