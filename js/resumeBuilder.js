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
  "name" : "Gustavo Lastra", //HTMLheaderName.replace("%data%","Gustavo Lastra"),
  "role" : "Frontend Developer",//HTMLheaderRole.replace("%data%","Frontend Developer"),
  "contacts" : {
    "mobile" : "+49 1742 813 345", //HTMLmobile.replace("%data%","+49 1742 813 345"),
    "email" : "Gustavo.LastraC@gmail.com", //HTMLemail.replace("%data%","Gustavo.LastraC@gmail.com"),
    "gitlab" : "@GustavoLastra", //HTMLgitlab.replace("%data%","@GustavoLastra"),
    "location" : "Ilmenau", //HTMLlocation.replace("%data%","Ilmenau"),
    "github" : "GustavoLastra" //HTMLgithub.replace("%data%","GustavoLastra")
  },
  //"blog" : HTMLblog.replace("%data%","Frontend Developer" ),
  "bioPic" : "./images/gus.jpg", //HTMLbioPic.replace("%data%","./images/gus.jpg") ,
  "welcomeMsg" : "Welcome to my resume", //HTMLwelcomeMsg.replace("%data%","Welcome to my resume") ,
  "skills" : {
      "skillOne": "rocking", //HTMLskills.replace("%data%","rocking"),
      "skillTwo": "saving the universe" //HTMLskills.replace("%data%","saving the universe")
  },


  displayBio : function(){
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

    for (index in fContacts){
      $("#topContacts").append(fContacts[index]);
    }

    for (index in fSkills){
      $("#skills-h3").append(fSkills[index]);
    }
  }
};

var work = {
  //"workStart" : HTMLworkStart,
  "works" : [
    {
      "workEmployer" : "BE EXCELLENT",//HTMLworkEmployer.replace("%data%","BE EXCELLENT").replace("#", "http://www.bee.io"),
      "workEmployerLink" : "http://www.bee.io", //HTMLworkEmployer.replace("#","http://www.bee.io" ),
      "workEmployerandTitle" : "Junior Front-End Developer E-Commerce", //HTMLworkTitle.replace("%data%","Junior Front-End Developer E-Commerce" ),
      "workDates" : "20 March - Actual", //HTMLworkDates.replace("%data%","20 March - Actual" ),
      "workLocation" : "Jena, Germany", //HTMLworkLocation.replace("%data%","Jena, Germany" ),
      "workDescriptionOne" : "Application development and implementation, as well as technical reviews in post-launch phase for our custom software solutions based on the Salesforce Commerce Cloud platform.", //HTMLworkDescription.replace("%data%","Application development and implementation, as well as technical reviews in post-launch phase for our custom software solutions based on the Salesforce Commerce Cloud platform." ),
      "workDescriptionTwo" : "Proactive monitoring and improvement of existing solutions" //HTMLworkDescription.replace("%data%","Proactive monitoring and improvement of existing solutions" )
    },
    {
      "workEmployer" : "Criser S.A de C.V.", //HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ).replace("#","http://www.criser.com.mx/index.php?lang=es"),
      "workEmployerLink" : "http://www.criser.com.mx/index.php?lang=es",
      "workEmployerandTitle" : "Technical support of information technology", //HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : "May 2014 - July 2014", //HTMLworkDates.replace("%data%","May 2014 - July 2014" ),
      "workLocation" : "Monterrey, Mexico", //HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      "workDescriptionOne" : "Planned and implemented the methodology “Lean Manufacturing” used in industrial processes.", //HTMLworkDescription.replace("%data%","Planned and implemented the methodology “Lean Manufacturing” used in industrial processes."),
      "workDescriptionTwo" : "Improved the efficiency of process execution in two departments.", //HTMLworkDescription.replace("%data%","Improved the efficiency of process execution in two departments." ),
      //"Descrption3" : "Proactive m 3.-Improved working quality of each worker involved in the project, considering their safety, productivity and ergonomic." //HTMLworkDescription.replace("%data%","Proactive m 3.-Improved working quality of each worker involved in the project, considering their safety, productivity and ergonomic." )
    },
    {
      "workEmployer" : "Criser S.A de C.V.", //HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ).replace("#","http://www.criser.com.mx/index.php?lang=es"),
      "workEmployerLink" : "http://www.criser.com.mx/index.php?lang=es",
      "workEmployerandTitle" : "Technical support of information technology", //HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : "June 2013 - August 2013", //HTMLworkDates.replace("%data%","June 2013 - August 2013" ),
      "workLocation" : "Monterrey, Mexico", //HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      "workDescriptionOne" : "Gave attention and technical support to the employee of the company.", //HTMLworkDescription.replace("%data%","Gave attention and technical support to the employee of the company" ),
      "workDescriptionTwo" : "Managed, installed and formatted the operative system and the working tools (Microsoft Office, Windows, Ubuntu).", //HTMLworkDescription.replace("%data%","Managed, installed and formatted the operative system and the working tools (Microsoft Office, Windows, Ubuntu)." ),
      //"Descrption3" : "Verified the legality of the used software of the company" //HTMLworkDescription.replace("%data%","Verified the legality of the used software of the company" )
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
      //$("#topContacts").append(work.works[index]);
    }

    /*$.each(work.works, function (job) {
        $.each(work.works[job], function (key, val) {
            workHtml+= val;
        });
        workHtml+="<br>";
    });
    $("#workExperience").append(workHtml);*/
  }

};

var project = {
  //"projectStart" : HTMLprojectStart,
  "projects" : [
    {
      "projectTitle" : "Portafolio", //HTMLprojectTitle.replace("%data%","Portafolio" ),
      "projectDates" : "December 2016", //HTMLprojectDates.replace("%data%","December 2016" ),
      "projectDescription" : "Shows my portafolio of projects", //HTMLprojectDescription.replace("%data%","Shows my portafolio of projects" ),
      "projectImage" : "./images/portafolio.png" //HTMLprojectImage.replace("%data%","./images/portafolio.png" )
    },
    {
      "projectTitle" : "Cars", //HTMLprojectTitle.replace("%data%","Cars" ),
      "projectDates" : "February 2016", //HTMLprojectDates.replace("%data%","February 2016" ),
      "projectDescription" : "Javascript Game", //HTMLprojectDescription.replace("%data%","Javascript Game" ),
      "projectImage" : "./images/cars.jpg" //HTMLprojectImage.replace("%data%","./images/cars.jpg" )
    },
    {
      "projectTitle" : "Resume", //HTMLprojectTitle.replace("%data%","Resume" ),
      "projectDates" : "February - Actual", //HTMLprojectDates.replace("%data%","February - Actual" ),
      "projectDescription" : "Shows my Curriculum Vitae", //HTMLprojectDescription.replace("%data%","Shows my Curriculum Vitae" ),
      "projectImage" : "./images/curriculum.png" //HTMLprojectImage.replace("%data%","./images/curriculum.png" )
    },
    {
      "projectTitle" : "Watson", //HTMLprojectTitle.replace("%data%","Watson" ),
      "projectDates" : "January 2016", //HTMLprojectDates.replace("%data%","January 2016" ),
      "projectDescription" : "IBM Watson ALchemylanguage application", //HTMLprojectDescription.replace("%data%","IBM Watson ALchemylanguage application" ),
      "projectImage" : "./images/watson2.png" //HTMLprojectImage.replace("%data%","./images/watson2.png" )
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
      "schoolName" : "Udacity", //HTMLschoolName.replace("%data%","Udacity").replace("#","https://www.udacity.com"),
      "schoolLink" : "https://www.udacity.com",
      "schoolDegree" : "Nanodegree-Program, Front-End Web Developement", //HTMLschoolDegree.replace("%data%","Nanodegree-Program, Front-End Web Developement" ),
      "schoolDates" : "October 2016 - September 2018", //HTMLschoolDates.replace("%data%","October 2016 - September 2018" ),
      "schoolLocation" : "USA" //HTMLschoolLocation.replace("%data%","USA" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Frontend Developer" )
    },
    {
      "schoolName" : "Technische Universität Ilmenau", //HTMLschoolName.replace("%data%","Technische Universität Ilmenau").replace("#", "https://www.tu-ilmenau.de"),
      "schoolLink" : "https://www.tu-ilmenau.de",
      "schoolDegree" : "Master's Degree, Media Tecnology", //HTMLschoolDegree.replace("%data%","Master's Degree, Media Tecnology" ),
      "schoolDates" : "November 2016 - November 2017", //HTMLschoolDates.replace("%data%","November 2016 - November 2017" ),
      "schoolLocation" : "Germany" //HTMLschoolLocation.replace("%data%","Germany" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Media Technology" )
    },
    {
      "schoolName" : "Instituto Tecnológico y de Estudios Superiores de Monterrey", //HTMLschoolName.replace("%data%","Instituto Tecnológico y de Estudios Superiores de Monterrey" ).replace("#","https://tec.mx"),
      "schoolLink" : "https://tec.mx",
      "schoolDegree" : "Bachelor's Degree, Electronic and Computer Engineering", //HTMLschoolDegree.replace("%data%","Bachelor's Degree, Electronic and Computer Engineering" ),
      "schoolDates" : "August 2010 - July 2015", //HTMLschoolDates.replace("%data%","August 2010 - July 2015" ),
      "schoolLocation" : "Mexico", //HTMLschoolLocation.replace("%data%","Mexico" ),
      //"schoolMajor" : HTMLschoolMajor.replace("%data%","Electronic and Computer Engineering" )
    }
  ],
  //
  "onlineClasses" :[
    {
      "onlineClasses" : "Frontend Developer", //HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : "HTML, CSS and JavaScript", //HTMLonlineTitle.replace("%data%","HTML, CSS and JavaScript" ).replace("#","https://www.coursera.org"),
      "schoolLink" : "https://www.coursera.org",
      "onlineSchool" : "Coursera", //HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : "September 2016", //HTMLonlineDates.replace("%data%","September 2016" ),
      //"onlineURL": HTMLonlineURL.replace("#", ).replace("%data%", education.online[edu].url);
      "onlineURL" : "License", //HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/VFNFP827ELM3"),
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/VFNFP827ELM3"
    },
    {
      //"onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : "Java for Android", //HTMLonlineTitle.replace("%data%","Java for Android" ).replace("#","https://www.coursera.org"),
      "schoolLink" : "https://www.coursera.org",
      "onlineSchool" : "Coursera", //HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : "Juny 2016", //HTMLonlineDates.replace("%data%","Juny 2016" ),
      "onlineURL" : "License", //HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/WEEERRKH9F85" ),
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/WEEERRKH9F85"
    },
    {
      //"onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : "Android App Components: Intents, Activities, and Broadcast Receivers", //HTMLonlineTitle.replace("%data%","Android App Components: Intents, Activities, and Broadcast Receivers" ).replace("#","https://www.coursera.org"),
      "schoolLink" :  "https://www.coursera.org",
      "onlineSchool" : "Coursera", //HTMLonlineSchool.replace("%data%","Coursera" ),
      "onlineDates" : "October 2016", //HTMLonlineDates.replace("%data%","October 2016" ),
      "onlineURL" : "License", //HTMLonlineURL.replace("%data%","License").replace("#","https://www.coursera.org/account/accomplishments/verify/CPTGP2UCH9W6" ),
      "onlineURLLink" : "https://www.coursera.org/account/accomplishments/verify/CPTGP2UCH9W6"
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
      "language" : "English", //HTMLlaguage.replace("%data%","English" ),
      "Certification" : "Toefle IBT", //HTMLlanguageCertification.replace("%data%","Toefle IBT" ),
      "level" : "Full professional proficiency (C1)", //HTMLlanguageLevel.replace("%data%","Full professional proficiency (C1)" ),
      "date" : "June 2015" //HTMLlanguageDate.replace("%data%","June 2015" )
    },
    {
      "language" : "German", //HTMLlaguage.replace("%data%","German" ),
      "Certification" : "TestDaf", //HTMLlanguageCertification.replace("%data%","TestDaf" ),
      "level" : "Full professional proficiency (C1)", //HTMLlanguageLevel.replace("%data%","Full professional proficiency (C1)" ),
      "date" : "August 2016" //HTMLlanguageDate.replace("%data%","August 2016" )
    },
    {
      "language" : "Spanish", //HTMLlaguage.replace("%data%","Spanish" ),
      //"Certification" : HTMLlanguageCertification.replace("%data%","Coursera" ),
      "level" : "Native proficiency" //HTMLlanguageLevel.replace("%data%","Native proficiency" ),
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
