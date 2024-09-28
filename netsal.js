//creates salary calculator function
   function salaryCalculator(){
    //get values for basic salary and benefits
    let basicSalary = prompt('Input basicSalary');
    let benefits = prompt('Input benefits');
    
    //converts non integer to integer
    basicSalary = parseInt(basicSalary);
    benefits = parseInt(benefits);

    //calculates PAYE
    let PAYE;
    if(basicSalary <= 24000){
        PAYE = (basicSalary + benefits) * 0.1 ;
    }
    if(basicSalary >=24001 && basicSalary <= 32333 ){
        PAYE = (basicSalary + benefits) * 0.25 ;
    }
    if(basicSalary >=32334 && basicSalary <=500000){
        PAYE = (basicSalary + benefits) * 0.30 ;
    }
    if(basicSalary >=500001 && basicSalary <=800000){
        PAYE = (basicSalary + benefits) * 0.325 ;
    }
    if(basicSalary >800001){
        PAYE = (basicSalary + benefits) * 0.35 ;
        
    }
    
   
    //calculates Gross salary
    let grossPay = basicSalary + benefits;
    
    //calculates NHIF
    let NHIF
    if(grossPay <5999){
        NHIF = 150 ;
    }
    if(grossPay >=6000 && grossPay <=7999){
        NHIF = 300 ;
    }
    if(grossPay >=8000 && grossPay <=11999){
        NHIF = 400 ;
    }
    if(grossPay >=12000 && grossPay <=14999){
        NHIF = 500 ;
    }
    if(grossPay >=15000 && grossPay <=19999){
        NHIF = 600 ;
    }
    if(grossPay >=20000 && grossPay <=24999){
        NHIF = 750 ;
    }
    if(grossPay >=25000 && grossPay <=29999){
        NHIF = 850 ;
    }
    if(grossPay >=30000 && grossPay <=34999){
        NHIF = 900 ;}

    if(grossPay >=6000 && grossPay <=7999){
        NHIF = 950 ;
    }
    if(grossPay >=40000 && grossPay <=44999){
        NHIF = 1000 ;
    }
    if(grossPay >=45000 && grossPay <=49999){
        NHIF = 1100 ;
    }
    if(grossPay >=50000 && grossPay <=59999){
        NHIF = 1200 ;
    }
    if(grossPay >=60000 && grossPay <=69999){
        NHIF = 1300 ;
    }
    if(grossPay >=70000 && grossPay <=79999){
        NHIF = 1400 ;
    }
    if(grossPay >=80000 && grossPay <=89999){
        NHIF = 1500 ;
    }
    if(grossPay >=90000 && grossPay <=99999){
        NHIF = 1600 ;
    }
    if(grossPay >=100000 ){
        NHIF = 1700 ;
    }
    
    
    //calculates NSSF
    let NSSF = (basicSalary) * 0.6
             
    //calculates net salary
     let netSalary = grossPay - PAYE - NHIF - NSSF
    return netSalary

}
 //returns calculated value
        console.log (salaryCalculator());