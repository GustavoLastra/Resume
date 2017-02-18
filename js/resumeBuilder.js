/*
This is empty on purpose! Your code to build the resume will go here.
 */
// var fName= HTMLheaderName.replace("%data%","Gustavo Antonio Lastra Colorado" );
 //var fRole= HTMLheaderRole.replace("%data%","Frontend Developer" );

var bio = {
  "name" : HTMLheaderName.replace("%data%","Gustavo Antonio Lastra Colorado" ),
  "role" : HTMLheaderRole.replace("%data%","Frontend Developer" ),
  //"contact" : HTMLcontactGeneric.replace("%data%","Frontend Developer" ),
  "mobile" : HTMLmobile.replace("%data%","+49 1742 813 345" ),
  "email" : HTMLemail.replace("%data%","Gustavo.LastraC@gmail.com" ),
  "gitlab" : HTMLgitlab.replace("%data%","@GustavoLastra" ),
  "github" : HTMLgithub.replace("%data%","GustavoLastra" ),
  //"blog" : HTMLblog.replace("%data%","Frontend Developer" ),
  "location" : HTMLlocation.replace("%data%","Ilmenau" ),
  "bioPic" : HTMLbioPic.replace("%data%","../images/gus.jpg" ),
  "welcomeMsg" : HTMLwelcomeMsg.replace("%data%","Welcome to my resume" ),
  "skillsStart" : HTMLskillsStart,
  "skills" : HTMLskills.replace("%data%","skills" ),
};

var work = {
  "workStart" : HTMLworkStart,
  "works" : [
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","BE EXCELLENT" ),
      "workTitle" : HTMLworkTitle.replace("%data%","Junior Front-End Developer E-Commerce" ),
      "workDates" : HTMLworkDates.replace("%data%","20 March - Actual" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Jena, Germany" ),
      //"workDescription" : HTMLworkDescription.replace("%data%","Frontend Developer" )
    },
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ),
      "workTitle" : HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : HTMLworkDates.replace("%data%","May 2014 - July 2014" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      //"workDescription" : HTMLworkDescription.replace("%data%","Frontend Developer" )
    },
    {
      "workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ),
      "workTitle" : HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : HTMLworkDates.replace("%data%","June 2013 - August 2013" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      //"workDescription" : HTMLworkDescription.replace("%data%","Frontend Developer" )
    }
  ]

};

var project = {
  "projectStart" : HTMLprojectStart,
  "projects" : [
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Portafolio" ),
      "projectDates" : HTMLprojectDates.replace("%data%","December 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Webpage, which shows my portafolio of projects" )
      //"projectImage" : HTMLprojectImage.replace("%data%","../images/gus.jpg" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Cars" ),
      "projectDates" : HTMLprojectDates.replace("%data%","February 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Webpage with a game" )
      //"projectImage" : HTMLprojectImage.replace("%data%","../images/gus.jpg" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Resume" ),
      "projectDates" : HTMLprojectDates.replace("%data%","February - Actual" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","Webpage, which shows my Curriculum Vitae" )
      //"projectImage" : HTMLprojectImage.replace("%data%","../images/gus.jpg" )
    },
    {
      "projectTitle" : HTMLprojectTitle.replace("%data%","Watson" ),
      "projectDates" : HTMLprojectDates.replace("%data%","January 2016" ),
      "projectDescription" : HTMLprojectDescription.replace("%data%","IBM Watson ALchemylanguage application" )
      //"projectImage" : HTMLprojectImage.replace("%data%","../images/gus.jpg" )
    }
  ]
};

var education = {
  "schoolStart" : HTMLschoolStart,
  "schools" : [
    {
      "schoolName" : HTMLschoolName.replace("%data%","Udacity" ),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Nanodegree-Program" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","October 2016 - September 2018" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","USA" ),
      "schoolMajor" : HTMLschoolMajor.replace("%data%","Frontend Developer" )
    },
    {
      "schoolName" : HTMLschoolName.replace("%data%","Technische Universität Ilmenau" ),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Master of science" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","November 2016 - November 2017" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","Germany" ),
      "schoolMajor" : HTMLschoolMajor.replace("%data%","Media Technology" )
    },
    {
      "schoolName" : HTMLschoolName.replace("%data%","Instituto Tecnológico y de Estudios Superiores de Monterrey" ),
      "schoolDegree" : HTMLschoolDegree.replace("%data%","Bachelor of science" ),
      "schoolDates" : HTMLschoolDates.replace("%data%","August 2010 - July 2015" ),
      "schoolLocation" : HTMLschoolLocation.replace("%data%","Mexico" ),
      "schoolMajor" : HTMLschoolMajor.replace("%data%","Electronic and Computer Engineering" )
    }/*,
    {
      "onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : HTMLonlineTitle.replace("%data%","Frontend Developer" ),
      "onlineSchool" : HTMLonlineSchool.replace("%data%","Frontend Developer" ),
      "onlineDates" : HTMLonlineDates.replace("%data%","Frontend Developer" ),
      "onlineURL" : HTMLonlineURL.replace("%data%","Frontend Developer" )
    }*/
  ]
};


//$("#header").prepend(fName);
//$("#header").append(fRole);
$("#workExperience").append(work.workStart);
$("#education").append(education.schoolStart);
$("#projects").append(project.projects);
//$("#topContacts").append(bio.each());
var data = {
  "programs": [
      { "name":"zonealarm",
        "price":"500" },
      { "name":"kaspersky",
        "price":"200" }
    ]
  };

/*$.each(data.programs, function (i) {
    $.each(data.programs[i], function (key, val) {
        alert(key + val);
    });
});*/
$.each(work.works, function (job) {
    $.each(work.works[job], function (key, val) {
        //alert(key + val);
        $("#workExperience").append(val);
    });
});

$.each(project.projects, function (index) {
    $.each(project.projects[index], function (key, val) {
        //alert(key + val);
        $("#projects").append(val);
    });
});
$.each(education.schools, function (Institution) {
    $.each(education.schools[Institution], function (key, val) {
        //alert(key + val);
        $("#education").append(val);
    });
});





/*for(job in work.works){
  $("#workExperience").append(work.works[job].workEmployer);
  $("#workExperience").append(work.works[job].workTitle);
  $("#workExperience").append(work.works[job].workDates);
  $("#workExperience").append(work.works[job].workLocation);
}*/


  $("#topContacts").append(bio.name);
  $("#topContacts").append(bio.role);
  $("#topContacts").append(bio.mobile);
  $("#topContacts").append(bio.gitlab);
  $("#topContacts").append(bio.github);
  $("#topContacts").append(bio.location);
  $("#topContacts").append(bio.bioPic);
  $("#topContacts").append(bio.welcomeMsg);


 //internationalizeButton
 //googleMap

  //$("#header").prepend(fName);
  //$("#header").append(fRole);
