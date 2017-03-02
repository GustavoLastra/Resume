//Googlemap's apikey AIzaSyDhWWNW_45q9qMr8Ft8c4SmJVEB66pLCyQ


// Varianles used to concatenate attributes of the objects
var projectHtml = '';
var workHtml = '';
var educationHtml = '';
var langageHtml = '';

// Objects with the display function
/*
1. bio
2. work
3. project
4. education
5. language
*/
var bio = {
  "name" : HTMLheaderName.replace("%data%","Gustavo Lastra"),
  "role" : HTMLheaderRole.replace("%data%","Frontend Developer"),
  "contacts" : {
    "mobile" : HTMLmobile.replace("%data%","+49 1742 813 345"),
    "email" : HTMLemail.replace("%data%","Gustavo.LastraC@gmail.com"),
    "gitlab" : HTMLgitlab.replace("%data%","@GustavoLastra"),
    "location" : HTMLlocation.replace("%data%","Ilmenau"),
    "github" : HTMLgithub.replace("%data%","GustavoLastra")
  },
  //"blog" : HTMLblog.replace("%data%","Frontend Developer" ),
  "bioPic" : HTMLbioPic.replace("%data%","./images/gus.jpg") ,
  "welcomeMsg" : HTMLwelcomeMsg.replace("%data%","Welcome to my resume") ,
  "skills" : [
    {
      "rocking": HTMLskills.replace("%data%","rocking"),
    },
    {
      "saving the universe": HTMLskills.replace("%data%","saving the universe")
    }
  ],
  displayBio : function(){
    $("#header").prepend(bio.role);
    $("#header").prepend(bio.name);
    for(index in bio.contacts){
      $("#topContacts").append(bio.contacts[index]);
    }
    $("#header").append(bio.bioPic);
    $("#header").append(bio.welcomeMsg);
    $("#header").append(HTMLskillsStart);
      $.each(bio.skills, function (index) {
          $.each(bio.skills[index], function (key, val) {
              $("#skills-h3").append(val);
          });
      });
    }
};

var work = {
  //"workStart" : HTMLworkStart,
  "works" : [
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","BE EXCELLENT").replace("#", "http://www.bee.io"),
      //"workEmployerLink" : HTMLworkEmployer.replace("#","http://www.bee.io" ),
      "workEmployerandTitle" : HTMLworkTitle.replace("%data%","Junior Front-End Developer E-Commerce" ),
      "workDates" : HTMLworkDates.replace("%data%","20 March - Actual" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Jena, Germany" ),
      "Descrption1" : HTMLworkDescription.replace("%data%","Application development and implementation, as well as technical reviews in post-launch phase for our custom software solutions based on the Salesforce Commerce Cloud platform." ),
      "Descrption3" : HTMLworkDescription.replace("%data%","Proactive monitoring and improvement of existing solutions" )
    },
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ).replace("#","http://www.criser.com.mx/index.php?lang=es"),
      "workEmployerandTitle" : HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : HTMLworkDates.replace("%data%","May 2014 - July 2014" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      "workDescription" : HTMLworkDescription.replace("%data%","Planned and implemented the methodology “Lean Manufacturing” used in industrial processes."),
      "Descrption1" : HTMLworkDescription.replace("%data%","Improved the efficiency of process execution in two departments." ),
      "Descrption3" : HTMLworkDescription.replace("%data%","Proactive m 3.-Improved working quality of each worker involved in the project, considering their safety, productivity and ergonomic." )
    },
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ).replace("#","http://www.criser.com.mx/index.php?lang=es"),
      "workEmployerandTitle" : HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : HTMLworkDates.replace("%data%","June 2013 - August 2013" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      "workDescription" : HTMLworkDescription.replace("%data%","Gave attention and technical support to the employee of the company" ),
      "Descrption1" : HTMLworkDescription.replace("%data%","Managed, installed and formatted the operative system and the working tools (Microsoft Office, Windows, Ubuntu)." ),
      "Descrption3" : HTMLworkDescription.replace("%data%","Verified the legality of the used software of the company" )
    }
  ],

  displayWork : function (){
    $.each(work.works, function (job) {
        $.each(work.works[job], function (key, val) {
            workHtml+= val;
        });
        workHtml+="<br>";
    });
    $("#workExperience").append(workHtml);
  }

};

var project = {
  //"projectStart" : HTMLprojectStart,
  "projects" : [
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Portafolio" ),
      "projectDates" : HTMLprojectDates.replace("%data%","December 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Shows my portafolio of projects" ),
      "projectImage" : HTMLprojectImage.replace("%data%","./images/portafolio.png" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Cars" ),
      "projectDates" : HTMLprojectDates.replace("%data%","February 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Javascript Game" ),
      "projectImage" : HTMLprojectImage.replace("%data%","./images/cars.jpg" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Resume" ),
      "projectDates" : HTMLprojectDates.replace("%data%","February - Actual" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Shows my Curriculum Vitae" ),
      "projectImage" : HTMLprojectImage.replace("%data%","./images/curriculum.png" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Watson" ),
      "projectDates" : HTMLprojectDates.replace("%data%","January 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","IBM Watson ALchemylanguage application" ),
      "projectImage" : HTMLprojectImage.replace("%data%","./images/watson2.png" )
    }
  ],
  displayProject : function(){
    $.each(project.projects, function (index) {
       projectHtml+= '<div class="col-xs-4">';
        $.each(project.projects[index], function (key, val) {
            projectHtml+= val;
        });
        projectHtml+='</div>';
    });
    $("#entry").append(projectHtml);
  }


};

var education = {
  //"schoolStart" : HTMLschoolStart,
  //"onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
  "schools" : [
    {
      "schoolName" : HTMLschoolName.replace("%data%","Udacity").replace("#","https://www.udacity.com"),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Nanodegree-Program, Front-End Web Developement" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","October 2016 - September 2018" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","USA" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Frontend Developer" )
    },
    {
      "schoolName" : HTMLschoolName.replace("%data%","Technische Universität Ilmenau").replace("#", "https://www.tu-ilmenau.de"),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Master's Degree, Media Tecnology" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","November 2016 - November 2017" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","Germany" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Media Technology" )
    },
    {
      "schoolName" : HTMLschoolName.replace("%data%","Instituto Tecnológico y de Estudios Superiores de Monterrey" ).replace("#","https://tec.mx"),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Bachelor's Degree, Electronic and Computer Engineering" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","August 2010 - July 2015" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","Mexico" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Electronic and Computer Engineering" )
    }
  ],
  //
  "onlineClasses" :[
    {
      "onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : HTMLonlineTitle.replace("%data%","HTML, CSS and JavaScript" ).replace("#","https://www.coursera.org"),
      "onlineSchool" : HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : HTMLonlineDates.replace("%data%","September 2016" ),
      //"onlineURL": HTMLonlineURL.replace("#", ).replace("%data%", education.online[edu].url);
      "onlineURL" : HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/VFNFP827ELM3"),
    },
    {
      //"onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : HTMLonlineTitle.replace("%data%","Java for Android" ).replace("#","https://www.coursera.org"),
      "onlineSchool" : HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : HTMLonlineDates.replace("%data%","Juny 2016" ),
      "onlineURL" : HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/WEEERRKH9F85" )
    },
    {
      //"onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : HTMLonlineTitle.replace("%data%","Android App Components: Intents, Activities, and Broadcast Receivers" ).replace("#","https://www.coursera.org"),
      "onlineSchool" : HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : HTMLonlineDates.replace("%data%","October 2016" ),
      "onlineURL" : HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/CPTGP2UCH9W6" )
    }
  ],
  displaySchool : function(){
    $.each(education.schools, function (Institution) {
        $.each(education.schools[Institution], function (key, val) {
            educationHtml+= val;
        });
    });
    $.each(education.onlineClasses, function (Institution) {
        $.each(education.onlineClasses[Institution], function (key, val) {
            educationHtml+= val;
        });
    });
    $("#education").append(educationHtml);
  }

};

var language = {
  "languages" : [
    {
      "language" : HTMLlaguage.replace("%data%","English" ),
      "Certification" : HTMLlanguageCertification.replace("%data%","Toefle IBT" ),
      "level" : HTMLlanguageLevel.replace("%data%","Full professional proficiency (C1)" ),
      "date" : HTMLlanguageDate.replace("%data%","June 2015" )
    },
    {
      "language" : HTMLlaguage.replace("%data%","German" ),
      "Certification" : HTMLlanguageCertification.replace("%data%","TestDaf" ),
      "level" : HTMLlanguageLevel.replace("%data%","Full professional proficiency (C1)" ),
      "date" : HTMLlanguageDate.replace("%data%","August 2016" )
    },
    {
      "language" : HTMLlaguage.replace("%data%","Spanish" ),
      //"Certification" : HTMLlanguageCertification.replace("%data%","Coursera" ),
      "level" : HTMLlanguageLevel.replace("%data%","Native proficiency" ),
      //"date" : HTMLlanguageDate.replace("%data%","Coursera" )
    }
  ],

  displayLanguage : function (){
    $.each(language.languages, function (l) {
        $.each(language.languages[l], function (key, val) {
            langageHtml+= val;
        });
        langageHtml+="<br>";
    });
    $("#language").append(langageHtml);
  }
}

//Call to Display functions from objects
work.displayWork();
project.displayProject();
language.displayLanguage();
education.displaySchool();
bio.displayBio();

// append() to #mapDiv
 $("#mapDiv").append(googleMap);
