import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeContentService } from 'src/app/dashboard-home-content/home-content.service';
import { ExerciseDataService } from 'src/app/exercise-api/exercise-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private homeContent: HomeContentService, private exerciseservice: ExerciseDataService) { }

  // -----main dashboard home content api get && show full details------------

  courseDetails: any = "";
  programingLanguage: any = "";
  ngOnInit(): void {
    //main content get api------
    this.homeContent.getHomecontent().subscribe(result => {
      this.courseDetails = result;
      console.log(this.courseDetails);
    });

    // show full details get api-------
    this.homeContent.getFullDetails().subscribe(result => {
      this.programingLanguage = result;
      console.log(result);
    });


  }

  //----show full details -------------------
  maincard: boolean = false;
  languageId: any = "";

  showFullDetails(id: any) {
   console.log(this.maincard);
    if (this.maincard == false) {
      this.maincard = true;
      this.languageId = id;
      console.log(this.languageId);
      for(let subValue of this.exSubValue){
        console.log(subValue);
        console.log(this.exSubValue)
        if(this.languageId === subValue){
          this.exerciseBtn = true;
          console.log(this.exerciseBtn);
          
        }
       else if(this.languageId !== subValue){
          this.exerciseBtn =false;
          console.log(this.exerciseBtn);
          console.log("else working");
          console.log(subValue);
        }

        else{
          this.exerciseBtn=true;
          console.log(this.exerciseBtn);
        }
      }

    }
    else {
      this.maincard = false;
      for(let subValue of this.exSubValue){
        console.log(this.exSubValue);
      if(this.languageId == subValue){
        this.exerciseBtn == false;
        console.log("if working");
        console.log(subValue);
        console.log(this.exerciseBtn);
        
      }
      else{
        this.exerciseBtn=true;
        console.log(this.exerciseBtn);
      }
    }
     
    }
  }

  //---------------exerices function-------------

  textareaShowHide: boolean = true;

  exerciseClick(exerciseId: any) {

    if (this.textareaShowHide == true && this.languageId == exerciseId) {
      this.textareaShowHide = false;
      console.log(exerciseId)

    }

  }
  //---------------exercises answer submit---------------

  exSubValue: any []= [];
  exerciseDataCheck: any = "";
  getExerciseData: any = "";
  cardShowHide: boolean = true;
  exerciseBtn: boolean = false;



  answerSubmit(id: any, exercise: any) {
    this.exerciseDataCheck = exercise.exercisedata;
    if (this.exerciseDataCheck != "") {
      this.textareaShowHide = true;
      this.cardShowHide = false;
      this.exSubValue .push(id) ;
      console.log(this.exerciseDataCheck);
      this.exerciseDataPosted(exercise);

    }
  }


  exerciseDataPosted(data: any) {
    this.exerciseservice.postExerciseData(data).subscribe(result => {
      console.log(result);

    });
    this.exerciseDataIdGet();
    this.exerciseDataGet();
  }

  //---exercise all data get--------------------

  lastId: any = "";
  exerciseDataIdGet() {
    this.exerciseservice.getExerciseDataAll().subscribe(results => {
      console.log(results);
      for (let result of results) {
        if (result.id > this.lastId) {
          this.lastId = result.id;
        }
      }

    });
    console.log(this.lastId);
  }
  //-----exercise single data id get---------------
  exerciseDataGet() {
    console.log(this.lastId)
    setTimeout(() => {
      this.exerciseservice.getExerciseData(this.lastId).subscribe(result => {
        this.getExerciseData = result;
        console.log(result);
        this.exerciseBtn = true;
      });
    }, 200);

  }







  // courseDetails:any = [
  //   {
  //     id: "1", header: "HTML5", image: "https://tse3.mm.bing.net/th?id=OIP.lxMbLFRw0sgOlOwjC62ySwHaKc&pid=Api&P=0&h=180", content: "HTML describes the structure of a Web page" +
  //       "HTML consists of a series of elements" +
  //       "HTML elements tell the browser how to display the content" +
  //       "HTML elements label pieces of content such as this is a heading, this is a paragraph, this is a link, etc.", footheader: "see full details"
  //   },
  //   {
  //     id: "2", header: "CSS3", img: "https://tse1.mm.bing.net/th?id=OIP.LAgpFhWtythAq3saUAwsewHaKY&pid=Api&P=0&h=180", content: "CSS describes how HTML elements are to be displayed on screen, paper, or in other media" +
  //       "CSS saves a lot of work. It can control the layout of multiple web pages all at once" +
  //       "External stylesheets are stored in CSS files", footheader: "see full details"
  //   },
  //   {
  //     id: "3", header: "BOOTSTRAP", img: "https://tse3.mm.bing.net/th?id=OIP.TXAlCbWqPSorP_CSfPu-zQHaF7&pid=Api&P=0&h=180", content: "Bootstrap 5 is the latest version of Bootstrap and the most popular HTML, CSS, and JavaScript framework for creating responsive websites. This version includes improved responsiveness, streamlined styling, and refined components." +
  //       "Bootstrap is completely free to download and use!", footheader: "see full details"
  //   },
  //   { id: "4", header: "JAVASCRIPT", img: "https://tse3.mm.bing.net/th?id=OIP.gA_JbpMuWmmz6VvfJvGmQwHaIB&pid=Api&P=0&h=180", content: "JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich. JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more!", footheader: "see full details" },
  //   { id: "5", header: "ANGULAR", img: "https://tse4.mm.bing.net/th?id=OIP.Ca8m7_pPKZlmP5bgC7UfCgHaH0&pid=Api&P=0&h=180", content: "Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.", footheader: "see full details" },
  //   { id: "6", header: "TYPESCRIPT", img: "https://tse4.mm.bing.net/th?id=OIP.2Jr0xjizvFRI5o-4hJGSIAHaHa&pid=Api&P=0&h=180", content: "TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match. For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not. TypeScript uses compile time type checking.", footheader: "see full details" },
  //   { id: "7", header: "CORE JAVA", img: "https://tse2.mm.bing.net/th?id=OIP.m3tfxdCR1IvzYdEEDVPwmQAAAA&pid=Api&P=0&h=180", content: "Core Java, also known as 'standard Java', forms the foundation of the Java programming language. It includes fundamental features such as primitive data types, operators, control statements, classes, objects, inheritance, exception handling, and more.", footheader: "see full details" },
  //   { id: "8", header: "ADVANCE JAVA", img: "https://tse2.mm.bing.net/th?id=OIP.Xhn-ei8TjQPJAH6nrk0KhgHaDL&pid=Api&P=0&h=180", content: "It is a part of Java programming language. It is an advanced technology or advance version of Java specially designed to develop web-based, network-centric or enterprise applications. It includes the concepts like Servlet, JSP, JDBC, RMI, Socket programming, etc. It is a specialization in specific domain.", footheader: "see full details" },
  //   { id: "9", header: "SPRINGBOOT", img: "https://tse3.mm.bing.net/th?id=OIP.WdsfOLMi-xg3DeBmn6Ev1gHaFV&pid=Api&P=0&h=180", content: "Java Spring Boot is an open-source tool that makes it easier to use Java-based frameworks to create microservices and web apps. For any definition of Spring Boot, the conversation has to start with Java—one of the most popular and widely used development languages and computing platforms for app development.", footheader: "see full details" },
  //   { id: "10", header: "MYSQL", img: "https://tse2.mm.bing.net/th?id=OIP.cewFzhxjLmhaQw-femldfgHaHa&pid=Api&P=0&h=180", content: "MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL). A database is a structured collection of data. It may be anything from a simple shopping list to a picture gallery or a place to hold the vast amounts of information in a corporate network.", footheader: "see full details" }
  // ];

  // programingLanguage: any = [
  // {
  //  " id": "1"," name": "HTML5", "img": "https://tse3.mm.bing.net/th?id=OIP.lxMbLFRw0sgOlOwjC62ySwHaKc&pid=Api&P=0&h=180", "introheader": "HTML5 | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //     " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "It has introduced new multimedia features which supports both audio and video controls by using <audio> and <video> tags.",
  //      feature2: "There are new graphics elements including vector graphics and tags.",
  //       feature3: "Enrich semantic content by including <header> <footer>, <article>, <section> and <figure> are added." ,
  //        feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.",
  //         feature5: "Geo-location services- It helps to locate the geographical location of a client.",
  //          feature6: "Web storage facility which provides web application methods to store data on the web browser.",
  //           feature7: "Uses SQL database to store data offline.",
  //            feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.",
  //             feature9: "Capable of handling incorrect syntax.",
  //             feature10: "Easy DOCTYPE declaration i.e., <!doctype html>",
  //              feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  // },

  // {
  //  "id": 2,
  //  "name": "CSS3",
  //   "image": "https://tse1.mm.bing.net/th?id=OIP.LAgpFhWtythAq3saUAwsewHaKY&pid=Api&P=0&h=180",
  //    "introheader":  "CSS3 | introduction", 
  //    "introduction": "INTRODUCTION: CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. Now let’s try to break the acronym.",
  //   "feature1": "First and foremost, It’s FREE.",
  //   "feature2": "It has several important prebuilt common elements as follows.",
  //   "feature3": "Base: Elements like <p>, <h1…h6>, topography etc. & Grids: Responsive grids.",
  //   "feature4": "Forms: Multi-columns, stacked forms, aligned forms, grouped inputs, etc.",
  //   "feature5": "Tables: Base tables with borders, stripping, etc. & Buttons: Button effects like focus, hover, active, etc.",
  //   "feature6": "Menus: Dropdowns, scrollable menus, vertical menus, responsive menus, etc.",
  //   "feature7": "It is ridiculously tiny as said above. Modules clocked at less than 4kb!",
  //   "feature8": "Perfect for beginners. easy, and intuitive. Just copy the stylesheet link from their website purecss.io and add it to your HTML doc.",
  //   "feature9": "The pure.css is designed with keeping responsive design in mind. So we get prebuilt responsive styles that stay the same on all platforms.",
  //   "feature10": "No dependency on JavaScript and its library. It also supports shadows and colors. A great alternative to Bootstrap.",
  //   "feature11": "At its core, it’s just a collection of different CSS modules that are responsive, tiny, and easy to use."
  // },


  //   {
  //    " id": "3"," name": "BOOTSTRAP", "img": "https://tse3.mm.bing.net/th?id=OIP.TXAlCbWqPSorP_CSfPu-zQHaF7&pid=Api&P=0&h=180", "introheader": "BOOTSTRAP | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "4"," name": "JAVASCRIPT", "img": "https://tse3.mm.bing.net/th?id=OIP.gA_JbpMuWmmz6VvfJvGmQwHaIB&pid=Api&P=0&h=180", "introheader": "JAVASCRIPT | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "5"," name": "ANGULAR", "img": "https://tse4.mm.bing.net/th?id=OIP.Ca8m7_pPKZlmP5bgC7UfCgHaH0&pid=Api&P=0&h=180", "introheader": "ANGULAR | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "6"," name": "TYPESCRIPT", "img": "https://tse4.mm.bing.net/th?id=OIP.2Jr0xjizvFRI5o-4hJGSIAHaHa&pid=Api&P=0&h=180", "introheader": "TYPESCRIPT | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "7"," name": "CORE JAVA", "img": "https://tse2.mm.bing.net/th?id=OIP.m3tfxdCR1IvzYdEEDVPwmQAAAA&pid=Api&P=0&h=180", "introheader": "CORE JAVA | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "8"," name": "ADVANCE JAVA", "img": "https://tse2.mm.bing.net/th?id=OIP.Xhn-ei8TjQPJAH6nrk0KhgHaDL&pid=Api&P=0&h=180", "introheader": "ADVANCE JAVA | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "9"," name": "SPRINGBOOT", "img": "https://tse3.mm.bing.net/th?id=OIP.WdsfOLMi-xg3DeBmn6Ev1gHaFV&pid=Api&P=0&h=180", "introheader": "SPRINGBOOT | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },


  //   {
  //    " id": "10"," name": "MYSQL", "img": "https://tse2.mm.bing.net/th?id=OIP.cewFzhxjLmhaQw-femldfgHaHa&pid=Api&P=0&h=180", "introheader": "MYSQL | introduction", "introduction": "INTRODUCTION: HTML stands for Hyper Text Markup Language. It is used to design web pages using a markup language. HTML is an abbreviation of Hypertext and Markup language. Hypertext defines the link between the web pages. The markup language is used to define the text document within the tag which defines the structure of web pages. HTML 5" +
  //       " is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces (API) and Document Object Model (DOM). ", feature1: "First and foremost, It’s FREE.", feature2: "It has several important prebuilt common elements as follows. ", feature3: "Enrich semantic content by including <header> <footer>, <article>, <section>" +
  //         "and <figure> are added.", feature4: "Drag and Drop- The user can grab an object and drag it further dropping it to a new location.", feature5: "Geo-location services- It helps to locate the geographical location of a client.", feature6: "Web storage facility which provides web application methods to store data on the web browser.", feature7: "Uses SQL database to store data offline.", feature8: "Allows drawing various shapes like triangle, rectangle, circle, etc.", feature9: "Capable of handling incorrect syntax.",
  //     feature10: "Easy DOCTYPE declaration i.e., <!doctype html>", feature11: "Easy character encoding i.e., <meta charset=”UTF-8″>"
  //   },

  // ];




}
