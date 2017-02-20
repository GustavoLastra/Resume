/*
This is empty on purpose! Your code to build the resume will go here.
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
  ]
};

var work = {
  "workStart" : HTMLworkStart,
  "works" : [
    {
      //"workEmployer" : ,
      "workEmployerandTitle" : HTMLworkEmployer.replace("%data%","BE EXCELLENT" )+ HTMLworkTitle.replace("%data%","Junior Front-End Developer E-Commerce" ),
      "workDates" : HTMLworkDates.replace("%data%","20 March - Actual" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Jena, Germany" ),
      //"workDescription" : HTMLworkDescription.replace("%data%","Frontend Developer" )
    },
    {
      //"workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ),
      "workEmployerandTitle" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ) + HTMLworkTitle.replace("%data%","Technical support of information technology" ),
      "workDates" : HTMLworkDates.replace("%data%","May 2014 - July 2014" ),
      "workLocation" : HTMLworkLocation.replace("%data%","Monterrey, Mexico" ),
      //"workDescription" : HTMLworkDescription.replace("%data%","Frontend Developer" )
    },
    {
      //"workEmployer" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ),
      "workEmployerandTitle" : HTMLworkEmployer.replace("%data%","Criser S.A de C.V." ) + HTMLworkTitle.replace("%data%","Technical support of information technology" ),
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
    },
    {
      "onlineClasses" : HTMLonlineClasses.replace("%data%","Frontend Developer" ),
      "onlineTitle" : HTMLonlineTitle.replace("%data%","Frontend Developer" ),
      "onlineSchool" : HTMLonlineSchool.replace("%data%","Frontend Developer" ),
      "onlineDates" : HTMLonlineDates.replace("%data%","Frontend Developer" ),
      "onlineURL" : HTMLonlineURL.replace("%data%","Frontend Developer" )
    }
  ]
};

$("#workExperience").append(work.workStart);
$("#education").append(education.schoolStart);
$("#projects").append(project.projectStart);
//$("#topContacts").append(bio.each());
var data = {
  "programs": [
      { "name":"zonealarm",
        "price":"500" },
      { "name":"kaspersky",
        "price":"200" }
    ]
  };

$.each(work.works, function (job) {
    $.each(work.works[job], function (key, val) {
        //alert(key + val);
        $(".work-entry").append(val);
    });
});

$.each(project.projects, function (index) {
    $.each(project.projects[index], function (key, val) {
        //alert(key + val);
        $(".project-entry").append(val);
        //$(".project-entry").prepend(val);
    });
});
$.each(education.schools, function (Institution) {
    $.each(education.schools[Institution], function (key, val) {
        //alert(key + val);
        $(".education-entry").append(val);
    });
});





/*for(job in work.works){
  $("#workExperience").append(work.works[job].workEmployer);
  $("#workExperience").append(work.works[job].workTitle);
  $("#workExperience").append(work.works[job].workDates);
  $("#workExperience").append(work.works[job].workLocation);
}*/




  /*$.each(bio.contacts, function (index) {
      $.each(bio.contacts[index], function (key, val) {
          //alert(key + val);
          var fmobile =HTMLmobile.replace("%data%",bio.contacts.mobile);
          var femail =HTMLemail.replace("%data%",bio.contacts.email);
          var fgitlab =HTMLgitlab.replace("%data%",bio.contacts.gitlab);
          var fgithub =HTMLgithub.replace("%data%",bio.contacts.github);
          var flocation =HTMLlocation .replace("%data%",bio.contacts.location);
          //var fblog =HTMLblog
          $(".skills").append(val);
      });
  });*/
  //var fName= HTMLheaderName.replace("%data%","Gustavo Antonio Lastra Colorado" );
  //var fRole= HTMLheaderRole.replace("%data%","Frontend Developer" );
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
          //alert(key + val);
          $("#skills-h3").append(val);
          //$(".project-entry").prepend(val);
      });
  });
  //for(index in bio.skills){
  //  $("#skills").append(bio.skills[index]);
  //}

  /*if (bio.skills>0){
    $("#header").append(HTMLskillsStart);
    $.each(bio.skills, function (index) {
        $.each(bio.skills[index], function (key, val) {
            //alert(key + val);
            $("#skills").append(val);
        });
    });
  }*/





  /*for ( index in bio.contacts) {
    //$("#topContacts").append(flocation);
  //console.log('obj.' + prop, '=', obj[prop]);
    var fmobile =HTMLmobile.replace("%data%",bio.contacts.mobile);
    $("#topContacts:last").append(fmobile);
    var femail =HTMLemail.replace("%data%",bio.contacts.email);
    $("#topContacts:last").append(femail);
    var fgitlab =HTMLgitlab.replace("%data%",bio.contacts.gitlab);
    $("#topContacts:last").append(fgitlab);
    var fgithub =HTMLgithub.replace("%data%",bio.contacts.github);
    $("#topContacts:last").append(fgithub);
    var flocation =HTMLlocation .replace("%data%",bio.contacts.location);
    $("#topContacts:last").append(flocation);
    //var fblog =HTMLblog

  }*/





 //internationalizeButton
 //googleMap

  //$("#header").prepend(fName);
  //$("#header").append(fRole);
