import { Component } from '@angular/core';


@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {

  constructor(){}

  exerciseShowHide:boolean=true;   //erercises page show hide
  languageId:any="";               //choose programing id
  exerciseSideBar:boolean=false;    //sidebar show and hide
 
  menuExitBtnShowHide:boolean=false;
  

  showExercise(id:any, exerciseName:any){            //exercises language id get
    this.languageId=id;
    console.log(id);
  }
  courseExercisesShow(){           //exercises sidebar show 
   if(this.exerciseSideBar==false){
    this.exerciseSideBar=true;
    this.menuExitBtnShowHide=true;
   }
  
  }
  courseExercisesHide(){         //exercises sidebar hide
    this.exerciseSideBar=false;
      this.menuExitBtnShowHide=false;

  }


  

  programingExercises=[
    {id:1, img:"https://tse3.mm.bing.net/th?id=OIP.lxMbLFRw0sgOlOwjC62ySwHaKc&pid=Api&P=0&h=180",content:"HTML5 EXERCISES",exerciseName:"htmlExercises"},
    {id:2, img:"https://tse1.mm.bing.net/th?id=OIP.LAgpFhWtythAq3saUAwsewHaKY&pid=Api&P=0&h=180",content:"CSS3 EXERCISES" ,exerciseName:"cssExercises"},
    {id:3, img:"https://tse3.mm.bing.net/th?id=OIP.TXAlCbWqPSorP_CSfPu-zQHaF7&pid=Api&P=0&h=180",content:"BOOTSTRAP EXERCISES" ,exerciseName:"bootstrapExercises"},
    {id:4, img:"https://tse3.mm.bing.net/th?id=OIP.gA_JbpMuWmmz6VvfJvGmQwHaIB&pid=Api&P=0&h=180",content:"JAVASCRIPT EXERCISES" ,exerciseName:"javascriptExercises"},
    {id:5, img:"https://tse4.mm.bing.net/th?id=OIP.Ca8m7_pPKZlmP5bgC7UfCgHaH0&pid=Api&P=0&h=180",content:"ANGULAR EXERCISES" ,exerciseName:"angularExercises"},
    {id:6, img:"https://tse4.mm.bing.net/th?id=OIP.2Jr0xjizvFRI5o-4hJGSIAHaHa&pid=Api&P=0&h=180",content:"TYPESCRIPT EXERCISES" ,exerciseName:"typescriptExercises"},
    {id:7, img:"https://tse2.mm.bing.net/th?id=OIP.m3tfxdCR1IvzYdEEDVPwmQAAAA&pid=Api&P=0&h=180",content:"CORE JAVA EXERCISES" ,exerciseName:"corejavaExercises"},
    {id:8, img:"https://tse2.mm.bing.net/th?id=OIP.Xhn-ei8TjQPJAH6nrk0KhgHaDL&pid=Api&P=0&h=180",content:"ADVANCE JAVA EXERCISES" ,exerciseName:"advancejavaExercises"},
    {id:9, img:"https://tse3.mm.bing.net/th?id=OIP.WdsfOLMi-xg3DeBmn6Ev1gHaFV&pid=Api&P=0&h=180",content:"SPRINGBOOT EXERCISES" ,exerciseName:"springbootExercises"},
    {id:10, img:"https://tse2.mm.bing.net/th?id=OIP.cewFzhxjLmhaQw-femldfgHaHa&pid=Api&P=0&h=180",content:"MYSQL EXERCISES" ,exerciseName:"mysqlExercises"}
  ];

  languageNames=[
    {id:1, name:"HTML5 EXERCISES"},
    {id:2, name:"CSS3 EXERCISES"},
    {id:3, name:"BOOTSTRAP EXERCISES"},
    {id:4, name:"JAVA SCRIPT EXERCISES"},
    {id:5, name:"ANGULAR EXERCISES"},
    {id:6, name:"TYPESCRIPT EXERCISES"},
    {id:7, name:"CORE JAVA EXERCISES"},
    {id:8, name:"ADVANCE JAVA EXERCISES"},
    {id:9, name:"SPRINGBOOT EXERCISES"},
    {id:10, name:"MYSQL EXERCISES"}
  ]
  languageExercises:any=[
    {id:1, name:"htmlExercises"},
    {id:2, name:"cssExercises"},
    {id:3, name:"bootstrapExercises"},
    {id:4, name:"javascriptExercises"},
    {id:5, name:"angularExercises"},
    {id:6, name:"typescriptExercises"},
    {id:7, name:"corejavaExercises"},
    {id:8, name:"advancejavaExercises"},
    {id:9, name:"springbootExercises"},
    {id:10, name:"mysqlExercises"}
  ]

  htmlExercises=[
    {id:1,mainExercise:"HTML Basic",subExercise1:"exercise 1",subExercise2:"exercise 2" },
    {id:2,mainExercise:"HTML Elements",subExercise1:"exercise 1",subExercise2:"exercise 2" },
    {id:3,mainExercise:"HTML Attributes",subExercise1:"exercise 1",subExercise2:"exercise 2" },
    {id:4,mainExercise:"HTML Heading",subExercise1:"exercise 1",subExercise2:"exercise 2" }
  ]

  sideSubButtonId:any="";           //side navbar button click get  id
  sideSubButtonShowHide:boolean=true;
  headExerciseName:any="";           //head exercise name store
  subExerciseName:any="";            //sub exercise name store
  subExerciseId:any="";              //sub exercise id store
  sideNavSubButtonHideShow(id:any, exercise:any){           //side navbar sub button show and hide
    if(this.sideSubButtonShowHide==true){
     this.sideSubButtonId=id;
     this.sideSubButtonShowHide=false;
     this.headExerciseName=exercise;
     
     this.subExerciseName=""
     console.log(this.subExerciseName)
    }
    else{
      this.sideSubButtonShowHide=true;
    }
   }

   getSubButtonExerciseName(subExerice:any , id:any){
    this.subExerciseName=subExerice;
    this.subExerciseId=id;
   }

  //  ------------------------------exercises input values-------------------------------

  
  inputNgmodule:any={
    value1:"",
    value2:"",
    value3:"",
    value4:"",
    value5:"",
    value6:""
    
  }
  
  inputValuesGet:any={
    input1:"",
    input2:"",
    input3:"",
    input4:"",
    input5:"",
    input6:""
  }
 answerCorrect:boolean=false;
 answerNotcorrect:boolean=false;
  // basic html -------------------------
  // exercise1----------------------------

  basicHtmlExercise1(){
    this.inputValuesGet.input1="<";
    this.inputValuesGet.input2=">";
    this.inputValuesGet.input3="<";
    this.inputValuesGet.input4=">";
    console.log(this.inputNgmodule.value1);
    if(this.inputNgmodule.value1==this.inputValuesGet.input1 && this.inputNgmodule.value2==this.inputValuesGet.input2 && this.inputNgmodule.value3==this.inputValuesGet.input3 && this.inputNgmodule.value4==this.inputValuesGet.input4 ){
      alert("correct !");
      this.answerNotcorrect=true;
    }
    else{
      this.answerNotcorrect=true;
      alert("Not correct !");
    }

  }

  basicHtmlExercise2(){
    this.inputValuesGet.input1="<a";
    this.inputValuesGet.input2="</a>";
    console.log(this.inputValuesGet.input1);
    console.log(this.inputValuesGet.input2);
    
    if(this.inputNgmodule.value1==this.inputValuesGet.input1 && this.inputNgmodule.value2==this.inputValuesGet.input2){
alert("correct !")
    }
    else{
      alert("Not correct !");
    }

  }

  



}
