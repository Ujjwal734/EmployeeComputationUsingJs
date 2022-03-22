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

//UC2 :- Calculating Wages
const Is_Part_Time =1;
const Is_Full_Time =2;
const Part_Time_Hours =4;
const Full_Time_Hours =8;
const Wage_Per_Hour = 20;
{
    let employeHrs = 0;
    let employCheck = Math.floor(Math.random()*10)% 3;
    switch (employCheck)
    {
        case Is_Part_Time:
            console.log("Employee is For Part Time :- ")
            employeHrs = Part_Time_Hours;
            break;
        case Is_Full_Time:
            console.log("Employee is For Full Time")
            employeHrs = Full_Time_Hours;
            break;
        default:
            console.log("Employee is Absent :-");
            employeHrs = 0; 
    }
    let employeeWage = employeHrs * Wage_Per_Hour;
    console.log("Employee Wage :- " + employeeWage);
}
//UC3_Using Function
const Is_Part_Times =1;
const Is_Full_Times =2;
const Part_Time_Hour =4;
const Full_Time_Hour =8;
const Wage_Per_Hours = 20;
let emphr = 0;
function getWorkingHrs(employCheck)
{
    switch (employCheck)
    {
        case Is_Part_Times:
            console.log("Employee is For Part Time :- ")
            return Part_Time_Hour;
        case Is_Full_Times:
            console.log("Employee is For Full Time")
            return Full_Time_Hour;
        default:
            console.log("Employee is Absent :-");
            return 0; 
    }
}
emphr += getWorkingHrs(employCheck);
let empWage = emphr * Wage_Per_Hours;
console.log("Employee Wage :- " + empWage);