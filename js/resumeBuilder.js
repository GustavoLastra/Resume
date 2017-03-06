//Googlemap's apikey AIzaSyDhWWNW_45q9qMr8Ft8c4SmJVEB66pLCyQ
//@autor: Gustavo Antonio Lastra Colorado
//@date : 06.03.2017
// Objects with the display function
/*
1. bio
2. work
3. project
4. education
5. language
*/
var bio = {
  "name" : "Gustavo Lastra",
  "role" : "Frontend Developer",
  "contacts" : {
    "mobile" : "+49 1742 813 345",
    "email" : "Gustavo.LastraC@gmail.com",
    "gitlab" : "@GustavoLastra",
    "location" : "Ilmenau",
    "github" : "GustavoLastra"
  },
  "bioPic" : "./images/gus.jpg",
  "welcomeMsg" : "Welcome to my resume",
  "skills" : {
      "skillOne": "rocking",
      "skillTwo": "saving the universe"
  },
  displayBio : function() {
    var fHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var fHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
    var fBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
    var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
    var fMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fGitlab = HTMLgitlab.replace("%data%", bio.contacts.gitlab);
    var fLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var fGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fSkillOne = HTMLskills.replace("%data%", bio.skills.skillOne);
    var fSkillTwo = HTMLskills.replace("%data%", bio.skills.skillTwo);
    var fContacts = [fMobile,fEmail,fGitlab,fLocation,fGithub];
    var fSkills = [fSkillOne,fSkillTwo];
    $("#header").prepend(fHeaderRole);
    $("#header").prepend(fHeaderName);
    $("#header").append(fBioPic);
    $("#header").append(fWelcomeMsg);
    $("#header").append(HTMLskillsStart);

    for (index in fContacts) {
      $("#topContacts").append(fContacts[index]);
    }

    for (index in fSkills) {
      $("#skills-h3").append(fSkills[index]);
    }
  }
};

var work = {
  "works" : [
    {
      "workEmployer" : "BE EXCELLENT",
      "workEmployerLink" : "http://www.bee.io",
      "workEmployerandTitle" : "Junior Front-End Developer E-Commerce",
      "workDates" : "20 March - Actual",
      "workLocation" : "Jena, Germany",
      "workDescriptionOne" : "Application development and implementation, as well as technical reviews in post-launch phase for our custom software solutions based on the Salesforce Commerce Cloud platform.",
      "workDescriptionTwo" : "Proactive monitoring and improvement of existing solutions"
    },
    {
      "workEmployer" : "Criser S.A de C.V.",
      "workEmployerLink" : "http://www.criser.com.mx/index.php?lang=es",
      "workEmployerandTitle" : "Technical support of information technology",
      "workDates" : "May 2014 - July 2014",
      "workLocation" : "Monterrey, Mexico",
      "workDescriptionOne" : "Planned and implemented the methodology “Lean Manufacturing” used in industrial processes.",
      "workDescriptionTwo" : "Improved the efficiency of process execution in two departments.",
    },
    {
      "workEmployer" : "Criser S.A de C.V.",
      "workEmployerLink" : "http://www.criser.com.mx/index.php?lang=es",
      "workEmployerandTitle" : "Technical support of information technology",
      "workDates" : "June 2013 - August 2013",
      "workLocation" : "Monterrey, Mexico",
      "workDescriptionOne" : "Gave attention and technical support to the employee of the company.",
      "workDescriptionTwo" : "Managed, installed and formatted the operative system and the working tools (Microsoft Office, Windows, Ubuntu).",
    }
  ],

  displayWork : function (){

    for (index in work.works){
      var fEmplyerAndLink = HTMLworkEmployer.replace("%data%", work.works[index].workEmployer).replace("#", work.works[index].workEmployerLink );
      var fWorkTitle = HTMLworkTitle.replace("%data%", work.works[index].workEmployerandTitle );
      var fWorkDates = HTMLworkDates.replace("%data%",work.works[index].workDates);
      var fWorkLocation = HTMLworkLocation.replace("%data%",work.works[index].workLocation);
      var fWorkDescriptionOne = HTMLworkDescription.replace("%data%",work.works[index].workDescriptionOne);
      var fWorkDescriptionTwo = HTMLworkDescription.replace("%data%",work.works[index].workDescriptionTwo);
      var fWorks = [fEmplyerAndLink + fWorkTitle,fWorkDates,fWorkLocation,fWorkDescriptionOne, fWorkDescriptionTwo, "<br>"];
      for (index in fWorks){
        $("#workExperience").append(fWorks[index]);
      }
    }
  }
};

var project = {
  "projects" : [
    {
      "projectTitle" : "Portafolio",
      "projectLink" : "https://github.com/GustavoLastra/Portafolio",
      "projectDates" : "December 2016",
      "projectDescription" : "Shows my portafolio of projects",
      "projectImage" : "./images/portafolio.png"
    },
    {
      "projectTitle" : "Cars",
      "projectLink" : "https://github.com/GustavoLastra/Cars",
      "projectDates" : "February 2016",
      "projectDescription" : "Javascript Game",
      "projectImage" : "./images/cars.jpg"
    },
    {
      "projectTitle" : "Resume",
      "projectLink" : "https://github.com/GustavoLastra/frontend-nanodegree-resume",
      "projectDates" : "February - Actual",
      "projectDescription" : "Shows my Curriculum Vitae",
      "projectImage" : "./images/curriculum.png"
    },
    {
      "projectTitle" : "Watson",
      "projectLink" : "https://github.com/GustavoLastra/WatsonNode",
      "projectDates" : "January 2016",
      "projectDescription" : "IBM Watson ALchemylanguage application",
      "projectImage" : "./images/watson2.png"
    }
  ],
  displayProject : function(){
    for(index in project.projects){
      var fProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[index].projectTitle).replace("#", project.projects[index].projectLink );
      var fProjectDates = HTMLprojectDates.replace("%data%",project.projects[index].projectDates );
      var fProjectDescription = HTMLprojectDescription.replace("%data%",project.projects[index].projectDescription );
      var fProjectImage = HTMLprojectImage.replace("%data%",project.projects[index].projectImage );
      var fProjects = '<div class="col-xs-4">' + fProjectTitle + fProjectDates + fProjectDescription + fProjectImage + '</div>';
        $("#entry").append(fProjects);
    }
  }


};

var education = {
  "schools" : [
    {
      "schoolName" : "Udacity",
      "schoolLink" : "https://www.udacity.com",
      "schoolDegree" : "Nanodegree-Program, Front-End Web Developement",
      "schoolDates" : "October 2016 - September 2018",
      "schoolLocation" : "USA"
    },
    {
      "schoolName" : "Technische Universität Ilmenau",
      "schoolLink" : "https://www.tu-ilmenau.de",
      "schoolDegree" : "Master's Degree, Media Tecnology",
      "schoolDates" : "November 2016 - November 2017",
      "schoolLocation" : "Germany"
    },
    {
      "schoolName" : "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      "schoolLink" : "https://tec.mx",
      "schoolDegree" : "Bachelor's Degree, Electronic and Computer Engineering",
      "schoolDates" : "August 2010 - July 2015",
      "schoolLocation" : "Mexico",
    }
  ],
  "onlineClasses" :[
    {
      "onlineTitle" : "HTML, CSS and JavaScript",
      "schoolLink" : "https://www.coursera.org",
      "onlineSchool" : "Coursera",
      "onlineDates" : "September 2016",
      "onlineURL" : "License",
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/VFNFP827ELM3"
    },
    {
      "onlineTitle" : "Java for Android",
      "schoolLink" : "https://www.coursera.org",
      "onlineSchool" : "Coursera",
      "onlineDates" : "Juny 2016",
      "onlineURL" : "License",
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/WEEERRKH9F85"
    },
    {
      "onlineTitle" : "Android App Components: Intents, Activities, and Broadcast Receivers",
      "schoolLink" :  "https://www.coursera.org",
      "onlineSchool" : "Coursera",
      "onlineDates" : "October 2016",
      "onlineURL" : "License",
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/CPTGP2UCH9W6"
    }
  ],
  displaySchool : function(){
    for (index in education.schools) {
      var fSchoolNameLink = HTMLschoolName.replace("%data%",education.schools[index].schoolName).replace("#",education.schools[index].schoolLink);
      var fSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[index].schoolDegree );
      var fSchoolDates = HTMLschoolDates.replace("%data%",education.schools[index].schoolDates );
      var fSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[index].schoolLocation );
      var fSchools = fSchoolNameLink + fSchoolDegree + fSchoolDates + fSchoolLocation;
      $("#education").append(fSchools);
    }

    $("#education").append(HTMLonlineClasses);
    for (index in education.onlineClasses) {
      var fOnlineTitleLink = HTMLonlineTitle.replace("%data%", education.onlineClasses[index].onlineTitle ).replace("#", education.onlineClasses[index].schoolLink);
      var fOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[index].onlineSchool );
      var fOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[index].onlineDates );
      var fOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[index].onlineURL).replace("#", education.onlineClasses[index].onlineURLLink);
      var fOnlineSchools = fOnlineTitleLink + fOnlineSchool + fOnlineDates + fOnlineURL;
      $("#education").append(fOnlineSchools);
    }
  }
};

var language = {
  "languages" : [
    {
      "language" : "English",
      "Certification" : "Toefle IBT",
      "level" : "Full professional proficiency (C1)",
      "date" : "June 2015"
    },
    {
      "language" : "German",
      "Certification" : "TestDaf",
      "level" : "Full professional proficiency (C1)",
      "date" : "August 2016"
    },
    {
      "language" : "Spanish",
      "Certification" : "",
      "level" : "Native proficiency",
      "date" : ""
    }
  ],

  displayLanguage : function (){
    for (index in language.languages) {
      var fLanguage = HTMLlaguage.replace("%data%", language.languages[index].language);
      var fLanguageCertification = HTMLlanguageCertification.replace("%data%", language.languages[index].Certification);
      var fLanguageLevel = HTMLlanguageLevel.replace("%data%", language.languages[index].level);
      var fLanguageDate = HTMLlanguageDate.replace("%data%", language.languages[index].date);
      var fLanguages = fLanguage + fLanguageCertification + fLanguageLevel + fLanguageDate + "<br>";
      $("#language").append(fLanguages);
    }
  }
}

//Call to Display functions from objects
bio.displayBio();
work.displayWork();
project.displayProject();
language.displayLanguage();
education.displaySchool();

// append() to #mapDiv
 $("#mapDiv").append(googleMap);
