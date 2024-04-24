let levelForm_1=document.querySelector(".levelForm_1")

let levelForm_2=document.querySelector(".levelForm_2")



// get modal Type 
let chosenModelType="Individually"

let allModalTypes=document.querySelectorAll(".ModelType")

for (let i = 0; i < allModalTypes.length; i++) {

    allModalTypes[i].addEventListener("click",function(e){

        console.log(e.target.value)

        chosenModelType=e.target.value
        
    })
    
    
}


// get car maker 
let chosenCarMaker="NISSAN"
let ChosenCarModel="JUKE"
let allCarModels=document.querySelectorAll(".carModels")

let allCarMakers=document.querySelectorAll(".carMakers")

for (let i = 0; i < allCarMakers.length; i++) {

    allCarMakers[i].addEventListener("click",function(e){

        console.log(e.target.value)

        chosenCarMaker=e.target.value


        checkTypesForCarMakers()

        

    }) 
    
}


let carModelsContainer=document.querySelector("#carModels")

function checkTypesForCarMakers()
{

    if(chosenCarMaker=="NISSAN")
    {
        ChosenCarModel="JUKE"
        
        carModelsContainer.innerHTML=`
        
        <option value="JUKE" class="carModels" onclick="getval(this)" selected>JUKE</option>
        <option value="PATROL" class="carModels" onclick="getval(this)">PATROL</option>
        <option value="PICK UP" class="carModels" onclick="getval(this)">PICK UP</option>
        <option value="SENTRA" class="carModels" onclick="getval(this)">SENTRA</option>
        
        
        `
    }
    else if(chosenCarMaker=="RENO")
    {
        ChosenCarModel="CAPTURE"
        
        carModelsContainer.innerHTML=`
        
        <option value="CAPTURE" class="carModels" onclick="getval(this)" selected>CAPTURE</option>
        <option value="DUSTER" class="carModels" onclick="getval(this)">DUSTER</option>
        <option value="KADJAR" class="carModels" onclick="getval(this)">KADJAR</option>
        <option value="LOGAN I" class="carModels" onclick="getval(this)">LOGAN I</option>
        
        
        `
    } 
    else if(chosenCarMaker=="HYUNDAI")
    {
        ChosenCarModel="ATOS"

        carModelsContainer.innerHTML=`
        
        <option value="ATOS" class="carModels" onclick="getval(this)" selected>ATOS</option>
        <option value="GETZ" class="carModels" onclick="getval(this)">GETZ</option>
        <option value="CRETA" class="carModels" onclick="getval(this)">CRETA</option>
        <option value="I10 GRAND" class="carModels" onclick="getval(this)">I10 GRAND</option>
        
        
        `
    } 
    else if(chosenCarMaker=="SKODA")
    {
        ChosenCarModel="PARID"

        carModelsContainer.innerHTML=`
        
        <option value="PARID" class="carModels" onclick="getval(this)" selected>PARID</option>
        <option value="ROOMSTER" class="carModels" onclick="getval(this)">ROOMSTER</option>
        <option value="FANTASIA" class="carModels" onclick="getval(this)">FANTASIA</option>
        <option value="KAROQ" class="carModels" onclick="getval(this)">KAROQ</option>
        
        
        `
    }     
    

}










// get car model 

function getval(val)
{
    console.log(val.value)

    ChosenCarModel=val.value
}


// function getCarModelsDuringChoose()
// {
//     for (let i = 0; i < allCarMakers.length; i++) {

//         allCarModels[i].addEventListener("click",function(e){
    
//             // console.log(e.target.value)
    
//             ChosenCarModel=e.target.value
    
//             console.log(ChosenCarModel)
//         })
    
//     }
    
// }

// getCarModelsDuringChoose()






// get made year
let chosenYearMade=2000
function yearsFrom2000to2024() {
    
    let cartoona=''
    for (let i = 2000; i<2025; i++) {
       
cartoona+=`

<option value="${i}" class="madeYear">${i}</option>

`
        
 }

    document.querySelector("#madeYear").innerHTML=cartoona
}

yearsFrom2000to2024()


let allYears=document.querySelectorAll(".madeYear")

for (let i = 0; i < allYears.length; i++) {

    allYears[i].addEventListener("click",function(e){

        console.log(e.target.value)

        chosenYearMade=e.target.value
    })
    
    
}


// submit level ( 1 ) of task

let submitLevel1=document.querySelector(".submitLevel1")


let levelOneValues

// on clicking submit level 1

submitLevel1.addEventListener("click",function(){



 levelOneValues={

    ModelTypeVal:chosenModelType,
    CarMakerVal:chosenCarMaker,
    CarModelVal:ChosenCarModel,
    YearMadeVal:chosenYearMade

}

console.log(levelOneValues)



// {


    
//     document.querySelector(".chosenCar").innerHTML=`<img src="imgs/NISSAN.jpg" class="carimg" alt="NISSAN">

//     `


// }
// else if(levelOneValues.CarMakerVal=="RENO")
// {
//     document.querySelector(".chosenCar").innerHTML=`<img src="imgs/SKODA.jpg" class="carimg" alt="SKODA">
//     `

// }
// else if(levelOneValues.CarMakerVal=="HYUNDAI")
// {
//     document.querySelector(".chosenCar").innerHTML=`<img src="imgs/HYUNDAI.jpg" class="carimg" alt="HYUNDAI">
//     `

// }
// else if(levelOneValues.CarMakerVal=="SKODA")
// {
//     document.querySelector(".chosenCar").innerHTML=`<img src="imgs/Reno.jpg" class="carimg" alt="Reno">
//     `
  
// }


// hide level 1 after submit

levelForm_1.classList.add("d-none")

// hide btn submitLevel1

submitLevel1.classList.add("d-none")



// show level 2
levelForm_2.classList.remove("d-none")

if(levelOneValues.CarMakerVal=="NISSAN")
    {
    
    
        
        document.querySelector(".chosenCar").innerHTML=`<img src="imgs/NISSAN.jpg" class="carimg" alt="NISSAN">
    
        `
    
    
    }
    else if(levelOneValues.CarMakerVal=="RENO")
    {
        document.querySelector(".chosenCar").innerHTML=`<img src="imgs/SKODA.jpg" class="carimg" alt="SKODA">
        `
    
    }
    else if(levelOneValues.CarMakerVal=="HYUNDAI")
    {
        document.querySelector(".chosenCar").innerHTML=`<img src="imgs/HYUNDAI.jpg" class="carimg" alt="HYUNDAI">
        `
    
    }
    else if(levelOneValues.CarMakerVal=="SKODA")
    {
        document.querySelector(".chosenCar").innerHTML=`<img src="imgs/Reno.jpg" class="carimg" alt="Reno">
        `
      
    }


// check If you are a SalesMan

checkIfSalesMan()


// check If you are a SalesMan

checkIfIndividually()


})






// ********************************************************* level 2

// move to level 2
let backToLevelOne=document.querySelector(".backToLevelOne")

backToLevelOne.addEventListener("click",function(){

 

    // show level one
    levelForm_1.classList.remove("d-none")
    submitLevel1.classList.remove("d-none")


    // hide level 2
    levelForm_2.classList.add("d-none")






})



// on submiting level 2

let level2Vals


    // ! array of requests

    let Alllevev2Requests=[]

    let AddNewPats=document.querySelector(".AddNewPats")

    let AlerAddNew=document.querySelector(".AlerAddNew")

    AddNewPats.addEventListener("click",function AddPartsMethod(){

        if(validateSparePartName()==true&&checkNumOfPieces()==true&&
        ((checkIfIndividually()==true&&validatechassisNumber()==true)||(checkIfSalesMan()==true&&validateSerialNumber()==true)||checkIfcompany()==true))
        {

        level2Vals={

            sparePartNameforApp:sparePartNameforApp,
            numofPiecesForApp:numofPiecesForApp,
            serialNumForApp:serialNumForApp,
            chassiNumForApp:chassiNumForApp,
            descriptionOfSparePartForApp:descriptionOfSparePartForApp,
            imgSrcForApp:imgSrcForApp
    
        }

        Alllevev2Requests.push(level2Vals)

        console.log(Alllevev2Requests)
        AlerAddNew.classList.add("d-none")


        }
        else
        {
            AlerAddNew.classList.remove("d-none")
        }
        sparePartInput.value=""
        numberOfPiecesInput.value=""
        serialNumInput.value=""
        chassisNumInput.value=""
        description.value=""

        document.querySelector("#readUrl").value=""

    })

let submitLevel2=document.querySelector(".submitLevel2")


let level2Alert=document.querySelector(".level2Alert")

submitLevel2.addEventListener("click",function(){

    getdescriptionOfTextArea()
    
    if(validateSparePartName()==true&&checkNumOfPieces()==true&&
    ((checkIfIndividually()==true&&validatechassisNumber()==true)||(checkIfSalesMan()==true&&validateSerialNumber()==true)||checkIfcompany()==true))
    {
        
    // hide level 2
    levelForm_2.classList.add("d-none")


    // show level 3
    levelForm_3.classList.remove("d-none")




    // add Final part
    let finalPart={
        sparePartNameforApp:sparePartNameforApp,
        numofPiecesForApp:numofPiecesForApp,
        serialNumForApp:serialNumForApp,
        chassiNumForApp:chassiNumForApp,
        descriptionOfSparePartForApp:descriptionOfSparePartForApp,
        imgSrcForApp:imgSrcForApp
    }
    Alllevev2Requests.push(finalPart)

    AlerAddNew.classList.add("d-none")


    // know num of req
    document.querySelector(".NumOfItemsOrderd").innerHTML=Alllevev2Requests.length
    console.log(Alllevev2Requests.length)

    console.log(Alllevev2Requests)

    
    // hide err data as u enter corrected data
    level2Alert.classList.add("d-none")

    // **********object of all level 2 data



    }
    else
    {
        level2Alert.classList.remove("d-none")
    }




    
})







// VALIDATION OF LEVEL 2 INPUTS
// (1)
let sparePartInput=document.querySelector("#sparePartInput")
let sparePartAlert=document.querySelector(".sparePartAlert")

// ! application value
let sparePartNameforApp

function validateSparePartName()
{
    let regex=/^[A-Z]/

    if(regex.test(sparePartInput.value))
    {
         sparePartNameforApp=sparePartInput.value
        
        sparePartInput.classList.add("is-valid")
        sparePartInput.classList.remove("is-invalid")
        sparePartAlert.classList.add("d-none")

        return true
    }
    else
    {
        sparePartInput.classList.remove("is-valid")
        sparePartInput.classList.add("is-invalid")
        sparePartAlert.classList.remove("d-none")
        return false
    }

}

// (2)

let numberOfPiecesInput=document.querySelector("#numberOfPiecesInput")
let numberOfPiecesAlertIndividually=document.querySelector(".numberOfPiecesAlertIndividually")
let numberOfPiecesAlertcompany=document.querySelector(".numberOfPiecesAlertcompany")
let numberOfPiecesAlertsalesassistant=document.querySelector(".numberOfPiecesAlertsalesassistant")

 // ! application value
let numofPiecesForApp

function  checkNumOfPieces() {
    

    let chosenModelType=levelOneValues.ModelTypeVal

    console.log(chosenModelType)

    if(chosenModelType=="Individually")
    {
        let regex=/^[1-9][0-9]?$|^100$/

        if(regex.test(numberOfPiecesInput.value))
        {
            numofPiecesForApp=numberOfPiecesInput.value

            console.log(numofPiecesForApp)
            
            numberOfPiecesInput.classList.add("is-valid")
            numberOfPiecesInput.classList.remove("is-invalid")


            numberOfPiecesAlertIndividually.classList.add("d-none")
            numberOfPiecesAlertcompany.classList.add("d-none")
            numberOfPiecesAlertsalesassistant.classList.add("d-none")

            return true
        }
        else
        {
            numberOfPiecesInput.classList.remove("is-valid")
            numberOfPiecesInput.classList.add("is-invalid")
            
            numberOfPiecesAlertIndividually.classList.remove("d-none")
            numberOfPiecesAlertcompany.classList.add("d-none")
            numberOfPiecesAlertsalesassistant.classList.add("d-none")

            return false
        }
    }
    else if(chosenModelType=="Company")
    {
        let regex=/^([1-7][0-9]|80)$/

        if(regex.test(numberOfPiecesInput.value))
        {

            numofPiecesForApp=numberOfPiecesInput.value

            console.log(numofPiecesForApp)
            
            numberOfPiecesInput.classList.add("is-valid")
            numberOfPiecesInput.classList.remove("is-invalid")

            numberOfPiecesAlertIndividually.classList.add("d-none")
            numberOfPiecesAlertcompany.classList.add("d-none")
            numberOfPiecesAlertsalesassistant.classList.add("d-none")

            return true
        }
        else
        {
            numberOfPiecesInput.classList.add("is-invalid")
            numberOfPiecesInput.classList.remove("is-valid")

            numberOfPiecesAlertIndividually.classList.add("d-none")
            numberOfPiecesAlertcompany.classList.remove("d-none")
            numberOfPiecesAlertsalesassistant.classList.add("d-none")

            return false
        }
    }
    else if(chosenModelType=="salesassistant")
    {
        let regex=/^[1-9][0-9]?$|^100$/

        if(regex.test(numberOfPiecesInput.value))
        {
            numofPiecesForApp=numberOfPiecesInput.value

            console.log(numofPiecesForApp)
            
            numberOfPiecesInput.classList.add("is-valid")
            numberOfPiecesInput.classList.remove("is-invalid")

            numberOfPiecesAlertIndividually.classList.add("d-none")
            numberOfPiecesAlertcompany.classList.add("d-none")
            numberOfPiecesAlertsalesassistant.classList.add("d-none")

            return true
        }
        else
        {
            numberOfPiecesInput.classList.add("is-invalid")
            numberOfPiecesInput.classList.remove("is-valid")

            numberOfPiecesAlertIndividually.classList.add("d-none")
            numberOfPiecesAlertcompany.classList.add("d-none")
            numberOfPiecesAlertsalesassistant.classList.remove("d-none")

            return false
        }
    }
}

// check if company
function checkIfcompany()
{
   if(levelOneValues.ModelTypeVal=="Company")
    {

        return true

    }
    else
    {

        return false
    }

}




// (3)
let serialNumberContainer=document.querySelector(".serialNumberContainer")



function checkIfSalesMan()
{
   if(levelOneValues.ModelTypeVal=="salesassistant")
    {
        
        serialNumberContainer.classList.remove("d-none")

        return true

    }
    else
    {
        serialNumberContainer.classList.add("d-none")

        return false
    }

}

let serialNumInput=document.querySelector("#serialNumInput")
let serialNumAlert=document.querySelector(".serialNumAlert")

 // ! application value
 let serialNumForApp="Not specified"
 
function validateSerialNumber()
{
    let regex=/^[0-9A-Z]{10}$/

    if(regex.test(serialNumInput.value))
    {
        serialNumForApp=serialNumInput.value

        serialNumInput.classList.add("is-valid")
        serialNumInput.classList.remove("is-invalid")

        serialNumAlert.classList.add("d-none")

        return true
    }
    else
    {
        serialNumInput.classList.remove("is-valid")
        serialNumInput.classList.add("is-invalid")

        serialNumAlert.classList.remove("d-none")

        return false
    }

}





// (4)
let chassisNumInputContainer=document.querySelector(".chassisNumInputContainer")

function checkIfIndividually()
{
   if(levelOneValues.ModelTypeVal=="Individually")
    {
        chassisNumInputContainer.classList.remove("d-none")

        return true
    }
    else
    {
        chassisNumInputContainer.classList.add("d-none")

        return false


    }
}

let chassisNumInput=document.querySelector("#chassisNumInput")
let chassisNumAlert=document.querySelector(".chassisNumAlert")

 // ! application value
 let chassiNumForApp="Not specified"

function validatechassisNumber()
{
    let regex=/^[0-9A-Z]{17}$/

    if(regex.test(chassisNumInput.value))
    {
        chassiNumForApp=chassisNumInput.value

        chassisNumInput.classList.add("is-valid")
        chassisNumInput.classList.remove("is-invalid")

        chassisNumAlert.classList.add("d-none")

        return true
    }
    else
    {
        chassisNumInput.classList.remove("is-valid")
        chassisNumInput.classList.add("is-invalid")

        chassisNumAlert.classList.remove("d-none")

        return false
    }

}

// (5) text area
 // ! application value
 let descriptionOfSparePartForApp="There is no description"

let description=document.querySelector("#description")

function  getdescriptionOfTextArea()
{
    if(description.value=="")
    {
        // There is no description
        description.value="There is no description"

        let ModelDescription=description.value

   

        descriptionOfSparePartForApp=ModelDescription
    
        console.log(ModelDescription)
    }
    else
    {
        let ModelDescription=description.value

   

        descriptionOfSparePartForApp=ModelDescription
    
        console.log(ModelDescription)
    }


}





// (6) for image upload

 // ! application value
 let imgSrcForApp

document.getElementById('readUrl').addEventListener('change', function(){
    if (this.files[0] ) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function(event) {
        // img result
        document.getElementById('uploadedImage').setAttribute('src', event.target.result);

        imgSrcForApp=event.target.result

        localStorage.setItem("imgSrcForApp",imgSrcForApp)

        document.getElementById('uploadedImage').style.display = 'block';

      });
    }
  });





//   ********************************************************* level 3

let levelForm_3=document.querySelector(".levelForm_3")

// back to Level 2

let backLevel2=document.querySelector(".backLevel2")

backLevel2.addEventListener("click",function(){

    levelForm_3.classList.add("d-none")

    levelForm_2.classList.remove("d-none")




})



// (1)

let customerNameInput=document.querySelector("#customerNameInput")
let customerNameAlert=document.querySelector(".customerNameAlert")

// ! application value
let customerNameForApp

function validateName() {
    
    let regex=/^[A-Z][a-zA-Z1-9 ]{1,15}$/

    if(regex.test(customerNameInput.value))
    {
        customerNameForApp=customerNameInput.value

        customerNameInput.classList.add("is-valid")
        customerNameInput.classList.remove("is-invalid")

        customerNameAlert.classList.add("d-none")
        return true
    }
    else
    {
        customerNameInput.classList.remove("is-valid")
        customerNameInput.classList.add("is-invalid")

        customerNameAlert.classList.remove("d-none")

        return false
    }
}


// (2)

let customerEmailInput=document.querySelector("#customerEmailInput")
let customerEmailAlert=document.querySelector(".customerEmailAlert")

// ! application value
let customerEmailForApp

function validateEmail() {
    
    let regex=/^[a-zA-Z].*(@gmail.com)$/i

    if(regex.test(customerEmailInput.value))
    {
        customerEmailForApp=customerEmailInput.value

        customerEmailInput.classList.add("is-valid")
        customerEmailInput.classList.remove("is-invalid")

        customerEmailAlert.classList.add("d-none")
        return true
    }
    else
    {
        customerEmailInput.classList.remove("is-valid")
        customerEmailInput.classList.add("is-invalid")

        customerEmailAlert.classList.remove("d-none")

        return false
    }
}

// (3) pass 1


let customerPasswordInput=document.querySelector("#customerPasswordInput")
let customerPasswordAlert=document.querySelector(".customerPasswordAlert")


// ! application value
let customerPasswordForApp

let passOneVal
function validatePass1() {
    
    let regex=/^.{3,}$/

    if(regex.test(customerPasswordInput.value))
    {
        customerPasswordForApp=customerPasswordInput.value

        passOneVal=customerPasswordInput.value

        customerPasswordInput.classList.add("is-valid")
        customerPasswordInput.classList.remove("is-invalid")

        customerPasswordAlert.classList.add("d-none")
        return true
    }
    else
    {
        customerPasswordInput.classList.remove("is-valid")
        customerPasswordInput.classList.add("is-invalid")

        customerPasswordAlert.classList.remove("d-none")

        return false
    }
}



// (4) pass 2

let RepasswordInput=document.querySelector("#RepasswordInput")
let RepasswordAlert=document.querySelector(".RepasswordAlert")


function validatePass2() {
    

    if(RepasswordInput.value==passOneVal)
    {

        RepasswordInput.classList.add("is-valid")
        RepasswordInput.classList.remove("is-invalid")

        RepasswordAlert.classList.add("d-none")

        return true
    }
    else
    {

        RepasswordInput.classList.remove("is-valid")
        RepasswordInput.classList.add("is-invalid")

        RepasswordAlert.classList.remove("d-none")

        return false
    }
}



// show password 
let myIcon = document.getElementById('icon');

let shows1=document.querySelector(".shows1")

shows1.onclick = function showPassword1 () {



  if (myIcon.classList.contains('fa-eye')) {

    myIcon.classList.toggle('fa-eye-slash');
    myIcon.classList.toggle('fa-eye');

    customerPasswordInput.setAttribute('type', 'text');



  } else {


    customerPasswordInput.setAttribute('type', 'password');

    myIcon.classList.toggle('fa-eye');
    myIcon.classList.toggle('fa-eye-slash');

  };
}



// show repassword
let myIcon2 = document.getElementById('icon2');

let shows2=document.querySelector(".shows2")

shows2.onclick = function showPassword1 () {



  if (myIcon2.classList.contains('fa-eye')) {

    myIcon2.classList.toggle('fa-eye-slash');
    myIcon2.classList.toggle('fa-eye');

    RepasswordInput.setAttribute('type', 'text');



  } else {


    RepasswordInput.setAttribute('type', 'password');

    myIcon2.classList.toggle('fa-eye');
    myIcon2.classList.toggle('fa-eye-slash');

  };
}


// (5) phone input

let CustomerPhoneInput=document.querySelector("#CustomerPhoneInput")
let CustomerPhoneAlert=document.querySelector(".CustomerPhoneAlert")

 // ! application value
let customerPhoneForApp

function validatePhone() {
    
    let regex=/^[0-9]{11}$/

    if(regex.test(CustomerPhoneInput.value))
    {
        customerPhoneForApp=CustomerPhoneInput.value

        CustomerPhoneInput.classList.add("is-valid")
        CustomerPhoneInput.classList.remove("is-invalid")

        CustomerPhoneAlert.classList.add("d-none")
        return true
    }
    else
    {
        CustomerPhoneInput.classList.remove("is-valid")
        CustomerPhoneInput.classList.add("is-invalid")

        CustomerPhoneAlert.classList.remove("d-none")

        return false
    }
}


let submitLevel3=document.querySelector(".submitLevel3")
let level3Alert=document.querySelector(".level3Alert")

let level3Vals

submitLevel3.addEventListener("click",function(){



    if(validateName()==true&&validateEmail()==true&&
    validatePass1()==true&&validatePass2()==true&&
    validatePhone()==true)
    {

    // hide level 3
    levelForm_3.classList.add("d-none")


    // show level 4
    levelForm_4.classList.remove("d-none")


    // hide alert as u enter correct data
    level3Alert.classList.add("d-none")


    // ************** object of level 3 data for app
     level3Vals={
        customerNameForApp:customerNameForApp,
        customerEmailForApp:customerEmailForApp,
        customerPasswordForApp:customerPasswordForApp,
        customerPhoneForApp:customerPhoneForApp


    }

    console.log(level3Vals)

    }
    else
    {
        level3Alert.classList.remove("d-none")

    }



    


})
// ********************************************** level 4
let levelForm_4=document.querySelector(".levelForm_4")

let backToLevel3=document.querySelector(".backToLevel3")

backToLevel3.addEventListener("click",function(){

    // hide level 4
    levelForm_4.classList.add("d-none")


    // show level 3
    levelForm_3.classList.remove("d-none")


})


// (1)

let chosenShippingType="myself"
let allShippingTypes=document.querySelectorAll(".ShippingType")

for (let i = 0; i < allShippingTypes.length; i++) {
  
    allShippingTypes[i].addEventListener("click",function(e){

        chosenShippingType=e.target.value
        console.log(chosenShippingType)
    })
    
}

// (2)
let fullNameInArabicInput=document.querySelector("#fullNameInArabicInput")
let nameArbicAlert=document.querySelector(".nameArbicAlert")

 
 // ! application value
let nameArapicForApp

function validateNameInArabic() {
    
    let regex=/^^[؀-ۿ]+/

    if(regex.test(fullNameInArabicInput.value))
    {
        nameArapicForApp=fullNameInArabicInput.value

        fullNameInArabicInput.classList.add("is-valid")
        fullNameInArabicInput.classList.remove("is-invalid")

        nameArbicAlert.classList.add("d-none")
        return true
    }
    else
    {
        fullNameInArabicInput.classList.remove("is-valid")
        fullNameInArabicInput.classList.add("is-invalid")

        nameArbicAlert.classList.remove("d-none")

        return false
    }
}
// (3)

let fullNameInEnglishInput=document.querySelector("#fullNameInEnglishInput")
let nameEnglishAlert=document.querySelector(".nameEnglishAlert")

 // ! application value
 let nameEnglishForApp
 
function validateNameInEnglish() {
    
    let regex=/^[A-Za-z\s\-.']+$/

    if(regex.test(fullNameInEnglishInput.value))
    {
        nameEnglishForApp=fullNameInEnglishInput.value

        fullNameInEnglishInput.classList.add("is-valid")
        fullNameInEnglishInput.classList.remove("is-invalid")

        nameEnglishAlert.classList.add("d-none")
        return true
    }
    else
    {
        fullNameInEnglishInput.classList.remove("is-valid")
        fullNameInEnglishInput.classList.add("is-invalid")

        nameEnglishAlert.classList.remove("d-none")

        return false
    }
}

// (4) country country_select

let chosenCountryCode="AF"
let Allcountry_select=document.querySelectorAll(".country_select option")

for (let i = 0; i < Allcountry_select.length; i++) {
  
    Allcountry_select[i].addEventListener("click",function(e){

        chosenCountryCode=e.target.value
        console.log(chosenCountryCode)
    })
    
}

// (5) City 

let CityInput=document.querySelector("#CityInput")
let CityAlert=document.querySelector(".CityAlert")

 // ! application value
 let CityForApp
 
function validateCity() {
    
    let regex=/^[A-Za-z\s\-.']+$/

    if(regex.test(CityInput.value))
    {
        CityForApp=CityInput.value

        CityInput.classList.add("is-valid")
        CityInput.classList.remove("is-invalid")

        CityAlert.classList.add("d-none")
        return true
    }
    else
    {
        CityInput.classList.remove("is-valid")
        CityInput.classList.add("is-invalid")

        CityAlert.classList.remove("d-none")

        return false
    }
}

// (6) Neighborhood 

let NeighborhoodInput=document.querySelector("#NeighborhoodInput")
let NeighborhoodAlert=document.querySelector(".NeighborhoodAlert")

 // ! application value
 let NeighborhoodForApp

function validateNeighborhood() {
    
    let regex=/^[A-Za-z\s\-.']+$/

    if(regex.test(NeighborhoodInput.value))
    {
        NeighborhoodForApp=NeighborhoodInput.value

        NeighborhoodInput.classList.add("is-valid")
        NeighborhoodInput.classList.remove("is-invalid")

        NeighborhoodAlert.classList.add("d-none")
        return true
    }
    else
    {
        NeighborhoodInput.classList.remove("is-valid")
        NeighborhoodInput.classList.add("is-invalid")

        NeighborhoodAlert.classList.remove("d-none")

        return false
    }
}

// (7) PO Box Number

let POBoxInput=document.querySelector("#POBoxInput")
let POBoxAlert=document.querySelector(".POBoxAlert")

 // ! application value
 let poBoxForApp

function validatePOBox() {
    
    let regex=/^\d{5}$/

    if(regex.test(POBoxInput.value))
    {
        poBoxForApp=POBoxInput.value

        POBoxInput.classList.add("is-valid")
        POBoxInput.classList.remove("is-invalid")

        POBoxAlert.classList.add("d-none")
        return true
    }
    else
    {
        POBoxInput.classList.remove("is-valid")
        POBoxInput.classList.add("is-invalid")

        POBoxAlert.classList.remove("d-none")

        return false
    }
}

// (8)



let description4=document.querySelector("#description4")
let description4Alert=document.querySelector(".description4Alert")

 // ! application value
 let Descrip4forApp

function getdescription4()
{
    if(description4.value!="")
    {
        Descrip4forApp=description4.value

        description4Alert.classList.add("d-none")
        
        return true
    }
    else
    {
        description4Alert.classList.remove("d-none")

        return false

    }
}

// (9)
let CustomerPhoneInput4=document.querySelector("#CustomerPhoneInput4")
let CustomerPhoneAlert4=document.querySelector(".CustomerPhoneAlert4")
 // ! application value
 let phoneDetailforApp

function validatePhone4() {
    
    let regex=/^[0-9]{11}$/

    if(regex.test(CustomerPhoneInput4.value))
    {
        phoneDetailforApp=CustomerPhoneInput4.value

        CustomerPhoneInput4.classList.add("is-valid")
        CustomerPhoneInput4.classList.remove("is-invalid")

        CustomerPhoneAlert4.classList.add("d-none")
        return true
    }
    else
    {
        CustomerPhoneInput4.classList.remove("is-valid")
        CustomerPhoneInput4.classList.add("is-invalid")

        CustomerPhoneAlert4.classList.remove("d-none")

        return false
    }
}


let submitLevel4=document.querySelector(".submitLevel4")
let level4Alert=document.querySelector(".level4Alert")

let level4Vals

submitLevel4.addEventListener("click",function(){

if(validateNameInArabic()==true&&validateNameInEnglish()==true&&
validateCity()==true&&validateNeighborhood()==true&&
validatePOBox()==true&&getdescription4()==true&&
validatePhone4()==true)
{


    // hide alert
    level4Alert.classList.add("d-none")

    // show all forms data from 1 to 4 in an application
    $("#exampleModals").modal("show");

    getAppData()

     // ******** object for level 4 values for app

      level4Vals={
        chosenShippingType:chosenShippingType,
        nameArapicForApp:nameArapicForApp,
        nameEnglishForApp:nameEnglishForApp,
        chosenCountryCode:chosenCountryCode,
        CityForApp:CityForApp,
        NeighborhoodForApp:NeighborhoodForApp,
        poBoxForApp:poBoxForApp,
        Descrip4forApp:Descrip4forApp,
        phoneDetailforApp:phoneDetailforApp



        
     }
     
     
     console.log(level4Vals)



}
else
{
    // show alery
    level4Alert.classList.remove("d-none")

    

}



})



// show all data in app

// level 1 in app

let appModelTypeLevel1=document.querySelector("#appModelTypeLevel1")

let CarMakerLevel1=document.querySelector("#CarMakerLevel1")

let CarModalLevel1=document.querySelector("#CarModalLevel1")

let madeYearLevel1=document.querySelector("#madeYearLevel1")


// level 2 in app

let sparePartNameApplevel2=document.querySelector("#sparePartNameApplevel2")

let piecesNumAppLevel2=document.querySelector("#piecesNumAppLevel2")

let serialNumAppLevel2=document.querySelector("#serialNumAppLevel2")

let chassisNumAppLevel2=document.querySelector("#chassisNumAppLevel2")

let SparePartDescrptionLevel2=document.querySelector("#SparePartDescrptionLevel2")

let appImgLevel2=document.querySelector(".appImgLevel2")


// level 3 in app
let appPersonName=document.querySelector("#appPersonName")

let appPersonEmail=document.querySelector("#appPersonEmail")

let appPersonPassword=document.querySelector("#appPersonPassword")

let appPersonPhone=document.querySelector("#appPersonPhone")


// level 4 in app
let ShippingTypeAppLevel4=document.querySelector("#ShippingTypeAppLevel4")

let fNameArabicAppLevel4=document.querySelector("#fNameArabicAppLevel4")

let fNameEnglishAppLevel4=document.querySelector("#fNameEnglishAppLevel4")

let CountryAppLevel4=document.querySelector("#CountryAppLevel4")

let CityAppLevel4=document.querySelector("#CityAppLevel4")

let NeighborhoodAppLevel4=document.querySelector("#NeighborhoodAppLevel4")

let BoxAppLevel4=document.querySelector("#BoxAppLevel4")

let DescriptionAppLevel4=document.querySelector("#DescriptionAppLevel4")

let phoneAppLevel4=document.querySelector("#phoneAppLevel4")



function getAppData()
{
    // level 1 values
    appModelTypeLevel1.value=levelOneValues.ModelTypeVal
    CarMakerLevel1.value=levelOneValues.CarMakerVal
    CarModalLevel1.value=levelOneValues.CarModelVal
    madeYearLevel1.value=levelOneValues.YearMadeVal

    // level 2 values




    console.log(Alllevev2Requests)


    document.querySelector(".NumOfItemsOrderd").innerHTML=Alllevev2Requests.length
    console.log(Alllevev2Requests.length)


    let cartoona=""

    for (let i = 0; i < Alllevev2Requests.length; i++) {
       
    cartoona+=`
    
    
    <div class="col-xl-6">
    <div class="reqsInApp">

    <h4 class="text-center mb-3 text-danger">Order( ${i} )</h5>
    <span class="d-block d-flex"> 

        <p class="First_p">spare part Name <span class="distance5">:</span></p>
        <p  class="second_p"  id="sparePartNameApplevel2">${Alllevev2Requests[i].sparePartNameforApp}</p>
        
        </span>

        <!-- 2 -->
        <span class="d-block d-flex"> 
        
            <p class="First_p">Number Of Pieces <span class="distance6">:</span></p>
            <p  class="second_p"  id="piecesNumAppLevel2">${Alllevev2Requests[i].numofPiecesForApp}</p>
            
        </span>

        <!-- 3 -->
        <span class="d-block d-flex"> 
        
            <p class="First_p">Parts serial Number <span class="distance7">:</span></p>
            <p  class="second_p"  id="serialNumAppLevel2">${Alllevev2Requests[i].serialNumForApp}</p>
            
        </span> 
        
        <!-- 4 -->
        <span class="d-block d-flex"> 
        
            <p class="First_p">Vehicle Chassis Number <span class="distance8">:</span></p>
            <p  class="second_p"  id="chassisNumAppLevel2">${Alllevev2Requests[i].chassiNumForApp}</p>
            
        </span>  
</div>
    
</div>

    
    `
        
    }
    document.querySelector(".level2container").innerHTML=cartoona














    // appImgLevel2.setAttribute("src",imgSrcForApp)
    // if(localStorage.getItem("imgSrcForApp")!=null)
    // {
    //     appImgLevel2.setAttribute("src",localStorage.getItem("imgSrcForApp"))

    // }


    // level 3 values
    appPersonName.innerHTML=customerNameForApp
    appPersonEmail.innerHTML=customerEmailForApp
    appPersonPassword.innerHTML=customerPasswordForApp
    appPersonPhone.innerHTML=customerPhoneForApp

    // level 4
    ShippingTypeAppLevel4.innerHTML=chosenShippingType
    fNameArabicAppLevel4.innerHTML=nameArapicForApp
    fNameEnglishAppLevel4.innerHTML=nameEnglishForApp
    CountryAppLevel4.innerHTML=chosenCountryCode
    CityAppLevel4.innerHTML=CityForApp
    NeighborhoodAppLevel4.innerHTML=NeighborhoodForApp
    BoxAppLevel4.innerHTML=poBoxForApp
    DescriptionAppLevel4.innerHTML=Descrip4forApp
    phoneAppLevel4.innerHTML=phoneDetailforApp





}   




// closing app
let closeApplication=document.querySelector(".closeApplication")

closeApplication.addEventListener("click",function(){

    location.reload();

    localStorage.removeItem("imgSrcForApp")

})







function clearAllInputs()
{
    // level 2
    sparePartInput.value=""
    numberOfPiecesInput.value=""
    serialNumInput.value=""
    chassisNumInput.value=""
    description.value=""

    document.querySelector("#readUrl").value=""

    // level 3
    customerNameInput.value=""
    customerEmailInput.value=""
    customerPasswordInput.value=""
    RepasswordInput.value=""
    CustomerPhoneInput.value=""


    // level 4
    fullNameInArabicInput.value=""

    fullNameInEnglishInput.value=""

    CityInput.value=""

    NeighborhoodInput.value=""

    POBoxInput.value=""

    CustomerPhoneInput4.value=""

    description4.value=""



    


}

// in reloading form
clearAllInputs()
// localStorage.removeItem("imgSrcForApp")

// **************************   we will save all recived data in the localStorage

let AppStoreData=[]

// submiting app 
let submitApp=document.querySelector("#submitApp")

// success level
let finalLevel=document.querySelector(".finalLevel")

submitApp.addEventListener("click",function(){


    // hide level 4
    levelForm_4.classList.add("d-none")
    
    $("#exampleModals").modal("hide");


    let AllLevelsData={
        objLevel1:levelOneValues,
        objLevel2:Alllevev2Requests,
        objLevel3:level3Vals,
        objLevel4:level4Vals,

    }
    
    finalLevel.classList.remove("d-none")

    AppStoreData.push(AllLevelsData)

    localStorage.setItem("AllLevelsData",JSON.stringify(AppStoreData))




    

})


// for phone flags 1

// 253 countries
const countries = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Aland Islands", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
    { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Bouvet Island", code: "BV", phone: 55 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Christmas Island", code: "CX", phone: 61 },
    { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Cote D'Ivoire", code: "CI", phone: 225 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curacao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "French Southern Territories", code: "TF", phone: 262 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
    { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
    { name: "Korea, Republic of", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 383 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
    { name: "Moldova, Republic of", code: "MD", phone: 373 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Netherlands Antilles", code: "AN", phone: 599 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Norfolk Island", code: "NF", phone: 672 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Pitcairn", code: "PN", phone: 64 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russian Federation", code: "RU", phone: 7 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "Saint Barthelemy", code: "BL", phone: 590 },
    { name: "Saint Helena", code: "SH", phone: 290 },
    { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
    { name: "Saint Lucia", code: "LC", phone: 1758 },
    { name: "Saint Martin", code: "MF", phone: 590 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Sao Tome and Principe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia and Montenegro", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "St Martin", code: "SX", phone: 721 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
    { name: "Swaziland", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Taiwan, Province of China", code: "TW", phone: 886 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Arab Emirates", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Viet Nam", code: "VN", phone: 84 },
    { name: "Virgin Islands, British", code: "VG", phone: 1284 },
    { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
    { name: "Wallis and Futuna", code: "WF", phone: 681 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 }
],

    select_box = document.querySelector('.options'),
    search_box = document.querySelector('.search-box'),
    input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon, phone_code);

    input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);


// for second phone input with flags

const countries2 = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Aland Islands", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
    { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Bouvet Island", code: "BV", phone: 55 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Christmas Island", code: "CX", phone: 61 },
    { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Cote D'Ivoire", code: "CI", phone: 225 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curacao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "French Southern Territories", code: "TF", phone: 262 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Heard Island and McDonald Islands", code: "HM", phone: 0 },
    { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
    { name: "Korea, Republic of", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 383 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    { name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389 },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 262 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
    { name: "Moldova, Republic of", code: "MD", phone: 373 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Netherlands Antilles", code: "AN", phone: 599 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Norfolk Island", code: "NF", phone: 672 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Pitcairn", code: "PN", phone: 64 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russian Federation", code: "RU", phone: 7 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "Saint Barthelemy", code: "BL", phone: 590 },
    { name: "Saint Helena", code: "SH", phone: 290 },
    { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
    { name: "Saint Lucia", code: "LC", phone: 1758 },
    { name: "Saint Martin", code: "MF", phone: 590 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Sao Tome and Principe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia and Montenegro", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "St Martin", code: "SX", phone: 721 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    { name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500 },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
    { name: "Swaziland", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Taiwan, Province of China", code: "TW", phone: 886 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Arab Emirates", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Viet Nam", code: "VN", phone: 84 },
    { name: "Virgin Islands, British", code: "VG", phone: 1284 },
    { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
    { name: "Wallis and Futuna", code: "WF", phone: 681 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 }
  ],
  
    select_box2 = document.querySelector('.options2'),
    search_box2 = document.querySelector('.search-box2'),
    input_box2 = document.querySelector('input[type="tel"]'),
    selected_option2 = document.querySelector('.selected-option2 div');
  
  let options2 = null;
  
  for (country of countries2) {
    const option = `
    <li class="option">
        <div>
            <span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span>
            <span class="country-name">${country.name}</span>
        </div>
        <strong>+${country.phone}</strong>
    </li> `;
  
    select_box2.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options2 = document.querySelectorAll('.option');
  }
  
  function selectOption2() {
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('strong').cloneNode(true);
  
    selected_option2.innerHTML = '';
    selected_option2.append(icon, phone_code);
  
    input_box2.value = phone_code.innerText;
  
    select_box2.classList.remove('active');
    selected_option2.classList.remove('active');
  
    search_box2.value = '';
    select_box2.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
  }
  
  function searchCountry2() {
    let search_query = search_box2.value.toLowerCase();
    for (option of options2) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
  }
  
  
  selected_option2.addEventListener('click', () => {
    select_box2.classList.toggle('active');
    selected_option2.classList.toggle('active');
  })
  
  options2.forEach(option => option.addEventListener('click', selectOption2));
  search_box2.addEventListener('input', searchCountry2);
  
  



  