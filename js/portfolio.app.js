$(document).ready(function(){
    var skills = [
        {
            "name": "languages",
            "one": "Python", 
            "two": "C++",
            "three": "HTML5",
            "four": "JavaScript",
            "five": "CSS",
            "six": "CNC G-code"
        },
        {
            "name": "frameworks",
            "one": "React", 
            "two": "AJAX",
            "three": "JQuery",
            "four": "Node.js",
            "five": "Bootstrap",
            "six": "Flask"
        },
        {
            "name": "tools",
            "one": "MySQL Workbench", 
            "two": "Bcrypt",
            "three": "Visual Studio Code",
            "four": "Github"
        },
        {
            "name": "security_skills",
            "one": "Host-based Security", 
            "two": "OS Hardening",
            "three": "Identity Access Management",
            "four": "Security Assessment",
            "five": "Security Operations",
            "six": "Network Security",
            "seven":"Firewall Management"
        },
        {
            "name": "technologies",
            "one": "Nmap", 
            "two": "Wireshark",
            "three": "Nessus",
            "four": "Splunk"
        }
        ];

    $('.skill-list a').on('mouseenter', function(e){
        var current_skill = $(e.currentTarget).attr('class');
        console.log(current_skill);

        for(item in skills){
            if(skills[item].name == current_skill){
                console.log(skills[item])
                console.log(item)
                var container = $('.skill-stats');
                if ('one' in skills[item]) {
                    container.find('.one').html(skills[item].one);
                }    
                if ('two' in skills[item]) {
                    container.find('.two').html(skills[item].two);
                }
                if ('three' in skills[item]) {    
                    container.find('.three').html(skills[item].three);
                }
                if ('four' in skills[item]) {
                    container.find('.four').html(skills[item].four);
                }
                if ('five' in skills[item]) {
                    container.find('.five').html(skills[item].five);
                }
                if ('six' in skills[item]) {
                    container.find('.six').html(skills[item].six);
                }
                if ('seven' in skills[item]) {
                    container.find('.seven').html(skills[item].seven);
                }
            }
        }
    });
    $('.skill-list a').on('mouseout', function(e){
        var current_skill = $(e.currentTarget).attr('class');
        console.log(current_skill);

        for(item in skills){
            if(skills[item].name == current_skill){
                console.log(skills[item])
                console.log(item)
                var container = $('.skill-stats');
                if ('one' in skills[item]) {
                    container.find('.one').html("");
                }    
                if ('two' in skills[item]) {
                    container.find('.two').html("");
                }  
                if ('three' in skills[item]) {
                    container.find('.three').html("");
                }
                if ('four' in skills[item]) {
                    container.find('.four').html("");
                }
                if ('five' in skills[item]) {
                    container.find('.five').html("");
                }
                if ('six' in skills[item]) {
                    container.find('.six').html("");
                }
                if ('seven' in skills[item]) {
                    container.find('.seven').html("");
                }
            }
        }
    });
}); 
$(document).ready(function(){
    var projects = [
        {
            "name": "jp",
            "eight": "Train machine learning models to identify Japanese handwritten elements.", 
            "nine": "Languages > Japanese, English",
            "ten": "Framework > React",
            "eleven": "Tools > Handwriting Data Collector"
        },
        {
            "name": "flask",
            "eight": "Application for teachers to share their lesson plans.", 
            "nine": "Languages > HTML, CSS, JavaScript, Python",
            "ten": "Framework > Flask",
            "eleven": "Tools > Bcrypt, Node.js, Bootstrap"
        },
        {
            "name": "front",
            "eight": "Profile UI based on an old video game character status screen.", 
            "nine": "Languages > HTML, CSS, JavaScript",
            "ten": "Framework > Jquery",
            "eleven": "Tools > Tether, Bootstrap"
        },
        {
            "name": "cyber",
            "eight": "A complete penetration test conducted on a commercial target.", 
            "nine": "Languages > SQL query",
            "ten": "OS > Kali-Linux",
            "eleven": "Tools > nmap, wireshark, splunk"
        }
        ];

    $('.project-list a').on('mouseenter', function(e){
        var current_project = $(e.currentTarget).attr('class');
        console.log(current_project);

        for(item in projects){
            if(projects[item].name == current_project){
                console.log(projects[item])
                console.log(item)
                var container = $('.project-details');
                if ('eight' in projects[item]) {
                    container.find('.eight').html(projects[item].eight);
                }    
                if ('nine' in projects[item]) {
                    container.find('.nine').html(projects[item].nine);
                }
                if ('ten' in projects[item]) {    
                    container.find('.ten').html(projects[item].ten);
                }
                if ('eleven' in projects[item]) {
                    container.find('.eleven').html(projects[item].eleven);
                }
            }
        }
    });
    $('.project-details a').on('mouseout', function(e){
        var current_project = $(e.currentTarget).attr('class');
        console.log(current_project);

        for(item in projects){
            if(projects[item].name == current_project){
                console.log(prpojects[item])
                console.log(item)
                var container = $('.project-details');
                if ('eight' in prpojects[item]) {
                    container.find('.eight').html("");
                }    
                if ('nine' in projects[item]) {
                    container.find('.nine').html("");
                }  
                if ('ten' in projects[item]) {
                    container.find('.ten').html("");
                }
                if ('eleven' in projects[item]) {
                    container.find('.eleven').html("");
                }
            }
        }
    });
});
