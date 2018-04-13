
var platform;
var repository;
var branch;
var node;
var repositoryId = '5806d444c717deabe6fc';
var branchId = '956f6d1d79eef20c2b37';
var nodeId = '5b5019bc3683e8438699'; //counter node
var schemaSource;
var optionsSource;
var dataSource;
//var pageIdToLoad = "21f5c2a082ab59f6391b";
var pageIdToLoad;
var username;
var password;
/*
var apacData={
    "8e9a548f7f3611e0212e":"australia",
    "9fd4de15011f0f131ee8":"chinaE",
    "fa8cfe61027ac5e4e2c8":"chinaL",
    "d199554f74482bb087f2":"hongkong",
    "f370b8863d600fa21705":"india",
    "438a1fbce0805e1e407a":"indonesiaE",
    "01799856e8c10b0d5415":"indonesiaL",
    "6080c1f6453c296a32d7":"japan",
    "4919ecd761e6cecb6edd":"malasiaP",
    "b681679d2c8081191ed8":"malasiaS",
    "c2767b8067438d03bba3":"phillipines",
    "0df45f2502835c6418d8":"singapore",
    "80b0e25daf1acd3cab48":"korea",
    "deccdd694139245258a1":"taiwan",
    "8a2ba8b707f388b2205f":"thialandE",
    "a6c18f1f754e0cc889a8":"thialandL",
    "4aae304d6b06f9d9917e":"vietnamE",
    "cb440e9ecf0cf1960880":"vietnamL"
};
var latamData ={
    "":"costarica",
    "":"latinAmerica"
};

 
var prData={
    "142e09724772ddbc38c3":"Health Scheme",
    "8f657689061834db1240":"Wellness",
    "2f43397d100dfad8fa3a":"Retirement Plan",
    "7e869f97b5023abecf1d":"GESOP",
    "cd976a3e53aced81d643":"Bio Pharma Credit Union",
    "ae2c925d9676a5c42b52":"Life and Accident Insurance",
    "ac2addf0bbdea0edc8c2":"Leave of Absence",
    "a556a5b08a73e41721fd":"Employee Assistance Program",
    "ef43e065298b8e5a8dcf":"Education Assistance Program",
    "558c5603ce28b1e76b5e":"Maternity/Family Resources",
    "da55012b8f730b4abb3e":"Adoption Assistance",
    "da3faa5d515d8e255f05":"Vacaion and Holidays",
    "b77186da202d2ab9ba9e":"myResources"
};

var canadaData="";
 
var belgiumData={
    "636c4e2aec37838ad7fe":"Private Health Scheme",
    "3883782f1e5b59a9bb4c":"Wellness",
    "6d3e886ca223c4e91cda":"Pension Plan",
    "c18acac54503fe4582e2":"Bonus Exchange Scheme",
    "fc525e5f228d93193e8d":"GESOP",    
    "62d44fc1faa5271c9297":"Life Assurance",
    "7f4a0796bbba2990752f":"Business Travel Insurance",    
    "6bb8c798c5b772b69d8a":"Leave of Absence",
    "10f5a6580af21c24578f":"Employee Assistance Program",    
    "aa19667b4da5b8bdb6a0":"Workflex, Vacaion and Holidays",
    "4a148269654cb41bace5":"Voluntary Benefits",
    "7946ddfb3c0b391c97b6":"myResources"
}
 
var franceData={
    "e96df5f3fcd73742729d":"Private Health Scheme",
    "07c525a2891b5ba7a337":"Wellness",
    "7e1b17d1676572ee554d":"Pension Plan",    
    "600ddcde2aba5e56928b":"GESOP",    
    "79b49ea8c912160e3d8e":"Life Assurance",
    "6d125ac1f1bd36c023d3":"Business Travel Insurance",    
    "cd9665d171b1b89eff35":"Leave of Absence",
    "c55303ed571a8c3857ec":"Employee Assistance Program",    
    "ed6064ed9694b0e2f981":"Workflex, Vacaion and Holidays",
    "bf8975d87cee90707d3c":"Voluntary Benefits",
    "8e707aeed0449d39c9bb":"myResources"
}

var greeceData={
    "4588d303ff66fa7bf107":"Private Health Scheme",
    "c95e7e79c67369b3f594":"Wellness",    
    "61c3a3a74f18b568ba3e":"GESOP",    
    "ad5d93176741d03b88e5":"Group Life Assurance & Business Travel Insurance",    
    "5ea82b93beb38b77cb13":"Leave of Absence",
    "9ab178b648606025f246":"Employee Assistance Program",    
    "da298ed1cd9d0db99e89":"Workflex, Vacaion and Holidays",
    "481afab3e0f8e886f90f":"Voluntary Benefits",        
    "3509cedc84dc108f695e":"myResources"
}
var italyData={
    "834c666327a3ddad18aa":"Healthcare Scheme",
    "55ddec275a541d367765":"Wellness",
    "000f50035c5540bde1f4":"Pension Plan",    
    "4fde7a3a558c4a98d64a":"GESOP",    
    "a38673221c92d7085cd5":"Life Assurance",
    "0752364102c43bae902b":"Business Travel Insurance",    
    "604a1740f5a17951634f":"Leave of Absence",
    "07e559b8aec6e1f312f2":"Employee Assistance Program",    
    "ddc57a85a9745ab33a87":"Workflex, Vacaion and Holidays",
    "ba17efbd225e95afa5ae":"Voluntary Benefits",
    "06ebf9f6b50b9123d16a":"myResources"
}
var nordicsData={
    "c5015827b1d411594818":"Healthcare Scheme",
    "0e40b39ed3cdea71c612":"Vision",
    "d7a40fa96de33e5dd130":"Wellness",
    "d54796fb0138bc3a71b9":"Pension Plan",    
    "e13cee7932cab99cc98e":"GESOP",    
    "5c6500f235044a3f5790":"Group Life Assurance",
    "2634d5ca5835d094d25a":"Business Travel Insurance",    
    "a323d6f345dcb21a253c":"Leave of Absence",
    "8eb05db4a98b9932ba75":"Employee Assistance Program",    
    "f93ecda1a3fd02bceb16":"Workflex, Vacaion and Holidays",
    "25505174c033d08c8cf8":"Voluntary Benefits",
    "c7c243a91336f42a74c4":"myResources"
}
var polandData={
    "041c0a3f868a40598e82":"Healthcare Scheme",    
    "6e152fe53b9c08b38659":"Wellness",
    "463104f1691d762472db":"Pension Plan",    
    "9100b93ef43c599aba29":"GESOP",    
    "74fc35277df26ba869a7":"Group Life Assurance",
    "a176cbccbf3d476db953":"Business Travel Insurance",    
    "b771840683c9a5b88d1d":"Leave of Absence",
    "945e3c5dcd61a15e0814":"Employee Assistance Program",    
    "af07bba168dfaa5b0105":"Workflex, Vacaion and Holidays",
    "ca4ff74b5012745c0338":"Voluntary Benefits",
    "cfa046a067d11beb92cb":"myResources"
}
var spainData={
    "b489171fa53357ff7b83":"Private Healthcare Scheme",        
    "70bd24fc15f03f7df574":"Vision",
    "d8d5071ae811a3c1660b":"Dental",
    "cf4ce867c0f011ca4d10":"Wellness",
    "326397d148475d26bf5a":"Pension Plan",    
    "c7a3546b5571d2b78ffb":"GESOP",    
    "0f50f5d22af5981d9f13":"Life & Accident Insurance",
    "ca1d0d9ff012cdc5eeab":"Meal Vouchers, Transportation & Salary Advancement",    
    "0cf5dfa3b4b46e6862f7":"Leave of Absence",
    "9d1fce0a33cb55ade433":"Employee Assistance Program",    
    "8d7b294fc48d32b8c64e":"Parenting Resources",
    "3cbfaa773d64a707f6a5":"Workflex, Vacation and Holidays",
    "a6c28487ce4e0966d531":"myResources"
}
var ukData={
    "b92e6873bf2756ff0089":"Private Healthcare Scheme",        
    "9141a07a9cb42b9ccf60":"Vision",    
    "51336a72c0da7281f19a":"Wellness",
    "ae3458a7d74948c55255":"Pension Plan",    
    "13390d908c3f5dad754f":"Bonus Exchange Scheme",
    "4fd576e16897cba8c2e8":"GESOP",    
    "b9298058bf6b060c9f06":"Life Assurance",
    "1c4dd10100aff672e36c":"Business Travel Insurance",    
    "5785451ed5fc8af7e2b9":"Leave of Absence",
    "531bd0b4cc805529427e":"Employee Assistance Program",    
    "c9f922fd9e627e377923":"Maternity/Paternity Resources",
    "85b5adfaa5079dbc40c8":"Adoption Assistance",
    "340cf3ee3c21b9366912":"Workflex, Vacation and Holidays",
    "f7fa4eb09f5e3661480e":"Voluntary Benefits",
    "9b435d57d97d8bc83b15":"myResources"
}

var irelandData={
    "c9a662c56100215cf8f9":"myHealth",
    "a2971761da4999ccf154":"myWealth",
    "e472c46c51228b8b8a18":"myLife",
    "8fb31c12b3e045f6acb1":"GESOP",
    "d9169a3c36227bcd687b":"myResources"
}
*/
//Switching from local developement to production will require switching config objects


function getPage(callback) {

    //            var config = {
    //            "username": username,
    //            "password": password,
    //            "baseURL": "/proxy"
    //                    }
 
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",        
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        platform = this;
        
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
                branch = this; 

            });
        });
    });
}

/*US data*/
var myDataUS = {
    /*"0fb318d0041cb9bd0a13": "test",*/
    "bb69c5f8241454f1fc16": "medical",
    "b9b37f1519a2ba283da7": "medical-hmo",
    "ce807e9afdf459ae33b3": "credit-union",
    "3f106259d9691012935a": "dental",
    "e25a3a6866f6184c8c67": "medical-consumer",
    "a0b5e9a9b64f3cb3bbf5": "gesop",
    "2fb25794052e44dd513e": "medical-hsa",
    "47c31937d4f2ef7776cb": "medical-wellness",
    "8df3d06afb89b80564a3": "medical-ppo",
    //"5baf0135373abebb3b86": "life-accident_OLD",
    "8d6ab6ea8f936473ec54": "employee-asst",
    "503131c11e5bd6ac59d8": "leave-absence",
    "7b5c1d7200327b2be55a": "index",
    "9c99425fefba93ab0cc7": "educational-asst",
    "cddc0091ffb950fa07e1": "maternity-resources",
    "294cb4c462e650c1728d": "adoption-asst",
    "cb228c1529fb8088eff0": "workflex",
   // "a3b3f7b9777c2b17d8fe": "open_enrollment",
    "c811620e743e4ad43bb1": "voluntary",
    "9b9593d5267b1cd8db7d": "vision",
    "252be9349d6efd0312d4": "new_hires",
    "1983821b05719f2cbf44": "myResources",
    "56720185ee1b627d1205": "401k-plan",
    "32ae742d1c5f04b5420c": "fsa-hsa",
    "5c082fcd876af82531a0": "btfyl",
    "8184e279ac830901ce15": "get_guidence",
    "eef28cdf9d09d7856129": "consider_hsa", 
    "4c48f584d269cf520b41":"whats_changing_2018",
    "fbc7b6d5e481bad74ed0":"compare_medical_options",
    "edf817b8aba85fa35469":"life-accident"
                                 
};





function county(val){    
   var loc = $("#location").val();
   if(loc =='na'){
          window.location="naIndex.html";
   }else if(loc =='latam'){
         window.location="latamIndex.html";
   }else if(loc =='apac'){
        window.location="apacIndex.html";
   }else if(loc =='emea'){
          window.location="emeaIndex.html";
   }
}
 
function loadPage() {
    pageIdToLoad = $("#alpaca1").val();     
    reShowForm($("#alpaca1").val());
}

$("#myCntrEmea").change(showFormMicro);
$("#myCntrNA").change(showFormNA);

function loadEmea(){
   // $("#myCntrEmea").html("");

    $("#myform").css('display','none');
    var cntr = $("#alpaca2").val();
    if(cntr == "belgium"){
        
        $("#alpaca1").html("");
        
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="7b689138ab90cead164d">Home</option>');
        $("#alpaca1").append('<option value="636c4e2aec37838ad7fe">Private Health Scheme</option>');
        $("#alpaca1").append('<option value="3883782f1e5b59a9bb4c">Wellness</option>');
        $("#alpaca1").append('<option value="6d3e886ca223c4e91cda">Pension Plan</option>');
        $("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="fc525e5f228d93193e8d">GESOP</option>');
        $("#alpaca1").append('<option value="62d44fc1faa5271c9297">Life Assurance</option>');
        $("#alpaca1").append('<option value="7f4a0796bbba2990752f">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="6bb8c798c5b772b69d8a">Leave of Absence</option>');
        $("#alpaca1").append('<option value="10f5a6580af21c24578f">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="aa19667b4da5b8bdb6a0">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="4a148269654cb41bace5">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="7946ddfb3c0b391c97b6">myResources</option>');

        /*$("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": belgiumData
            }
        });*/
        $("#alpaca1").css('display','block');
         $("#alpaca1").prev().css('display','block');
     

    }else  if(cntr == "france"){        
        $("#alpaca1").html("");        
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="49bab5b49108fdd445e5">Home</option>');
        $("#alpaca1").append('<option value="e96df5f3fcd73742729d">Private Health Scheme</option>');
        $("#alpaca1").append('<option value="07c525a2891b5ba7a337">Wellness</option>');
        $("#alpaca1").append('<option value="7e1b17d1676572ee554d">Pension Plan</option>');
        // $("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="600ddcde2aba5e56928b">GESOP</option>');
        $("#alpaca1").append('<option value="79b49ea8c912160e3d8e">Life Assurance</option>');
        $("#alpaca1").append('<option value="6d125ac1f1bd36c023d3">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="cd9665d171b1b89eff35">Leave of Absence</option>');
        $("#alpaca1").append('<option value="c55303ed571a8c3857ec">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="ed6064ed9694b0e2f981">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="bf8975d87cee90707d3c">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="8e707aeed0449d39c9bb">myResources</option>');
         $("#alpaca1").css('display','block');
         $("#alpaca1").prev().css('display','block');

        /*
        $("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": franceData
            }
        });*/
       
    }else  if(cntr == "greece"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');   
        $("#alpaca1").append('<option value="374be01f93d8979298fc">Home</option>');  
        $("#alpaca1").append('<option value="4588d303ff66fa7bf107">Private Health Scheme</option>');
        $("#alpaca1").append('<option value="c95e7e79c67369b3f594">Wellness</option>');
        //$("#alpaca1").append('<option value="6d3e886ca223c4e91cda">Pension Plan</option>');
        //$("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="61c3a3a74f18b568ba3e">GESOP</option>');
        $("#alpaca1").append('<option value="ad5d93176741d03b88e5">Group Life Assurance & Business Travel Insurance</option>');
        // $("#alpaca1").append('<option value="7f4a0796bbba2990752f">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="5ea82b93beb38b77cb13">Leave of Absence</option>');
        $("#alpaca1").append('<option value="9ab178b648606025f246">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="da298ed1cd9d0db99e89">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="481afab3e0f8e886f90f">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="3509cedc84dc108f695e">myResources</option>');


            $("#alpaca1").css('display','block');
         $("#alpaca1").prev().css('display','block');
        /* $("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": greeceData
            }
        });*/
      
    }else  if(cntr == "italy"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');    
        $("#alpaca1").append('<option value="01b6d8b29b0a46fe652e">Home</option>');  
        $("#alpaca1").append('<option value="834c666327a3ddad18aa">Healthcare Scheme</option>');
        $("#alpaca1").append('<option value="55ddec275a541d367765">Wellness</option>');
        $("#alpaca1").append('<option value="000f50035c5540bde1f4">Pension Plan</option>');
        //$("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="4fde7a3a558c4a98d64a">GESOP</option>');
        $("#alpaca1").append('<option value="a38673221c92d7085cd5">Life Assurance</option>');
        $("#alpaca1").append('<option value="0752364102c43bae902b">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="604a1740f5a17951634f">Leave of Absence</option>');
        $("#alpaca1").append('<option value="07e559b8aec6e1f312f2">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="ddc57a85a9745ab33a87">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="ba17efbd225e95afa5ae">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="06ebf9f6b50b9123d16a">myResources</option>');

            $("#alpaca1").css('display','block');
         $("#alpaca1").prev().css('display','block');
        /*
        $("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": italyData
            }
        }); */
    }else  if(cntr == "nordics"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="47960869f4de84d641fa">Home</option>');  
        $("#alpaca1").append('<option value="c5015827b1d411594818">Healthcare Scheme</option>');
        $("#alpaca1").append('<option value="0e40b39ed3cdea71c612">Vision</option>');
        $("#alpaca1").append('<option value="d7a40fa96de33e5dd130">Wellness</option>');
        $("#alpaca1").append('<option value="d54796fb0138bc3a71b9">Pension Plan</option>');
        //$("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="e13cee7932cab99cc98e">GESOP</option>');
        $("#alpaca1").append('<option value="5c6500f235044a3f5790">Life Assurance</option>');
        $("#alpaca1").append('<option value="2634d5ca5835d094d25a">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="a323d6f345dcb21a253c">Leave of Absence</option>');
        $("#alpaca1").append('<option value="8eb05db4a98b9932ba75">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="f93ecda1a3fd02bceb16">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="25505174c033d08c8cf8">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="c7c243a91336f42a74c4">myResources</option>');

            $("#alpaca1").css('display','block');
         $("#alpaca1").prev().css('display','block');

        /*$("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": nordicsData
            }
        });*/
    
    }else  if(cntr == "poland"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="eb81e90413e9a0cddc05">Home</option>');  
        $("#alpaca1").append('<option value="041c0a3f868a40598e82">Healthcare Scheme</option>');
        $("#alpaca1").append('<option value="6e152fe53b9c08b38659">Wellness</option>');
        $("#alpaca1").append('<option value="463104f1691d762472db">Pension Plan</option>');
        //$("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="9100b93ef43c599aba29">GESOP</option>');
        $("#alpaca1").append('<option value="74fc35277df26ba869a7">Life Assurance</option>');
        $("#alpaca1").append('<option value="a176cbccbf3d476db953">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="b771840683c9a5b88d1d">Leave of Absence</option>');
        $("#alpaca1").append('<option value="945e3c5dcd61a15e0814">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="af07bba168dfaa5b0105">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="ca4ff74b5012745c0338">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="cfa046a067d11beb92cb">myResources</option>');


        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');
        /*$("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": polandData
            }
        });*/
   
    }else  if(cntr == "spain"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="1b2cf220530a7fdeec81">Home</option>');  
        $("#alpaca1").append('<option value="b489171fa53357ff7b83">Healthcare Scheme</option>');
        $("#alpaca1").append('<option value="70bd24fc15f03f7df574">Vision</option>');
        $("#alpaca1").append('<option value="d8d5071ae811a3c1660b">Dental</option>');
        $("#alpaca1").append('<option value="cf4ce867c0f011ca4d10">Wellness</option>');
        $("#alpaca1").append('<option value="326397d148475d26bf5a">Pension Plan</option>');
        //$("#alpaca1").append('<option value="c18acac54503fe4582e2">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="c7a3546b5571d2b78ffb">GESOP</option>');
        $("#alpaca1").append('<option value="0f50f5d22af5981d9f13">Life & Accident Insurance</option>');
        $("#alpaca1").append('<option value="ca1d0d9ff012cdc5eeab">Meal Vouchers, Transportation & Salary Advancement</option>');
        $("#alpaca1").append('<option value="0cf5dfa3b4b46e6862f7">Leave of Absence</option>');
        $("#alpaca1").append('<option value="9d1fce0a33cb55ade433">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="8d7b294fc48d32b8c64e">Parenting Resources</option>');
        $("#alpaca1").append('<option value="3cbfaa773d64a707f6a5">Workflex, Vacaion and Holidays</option>');        
        $("#alpaca1").append('<option value="a6c28487ce4e0966d531">myResources</option>');

        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');
        /*$("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": spainData
            }
        });*/
   
    }else  if(cntr == "uk"){
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="05aed5b3dd549129a378">Home</option>');  
        $("#alpaca1").append('<option value="b92e6873bf2756ff0089">Healthcare Scheme</option>');
        $("#alpaca1").append('<option value="9141a07a9cb42b9ccf60">Vision</option>');
        $("#alpaca1").append('<option value="51336a72c0da7281f19a">Wellness</option>');
        $("#alpaca1").append('<option value="ae3458a7d74948c55255">Pension Plan</option>');
        $("#alpaca1").append('<option value="13390d908c3f5dad754f">Bonus Exchange Scheme</option>');
        $("#alpaca1").append('<option value="4fd576e16897cba8c2e8">GESOP</option>');
        $("#alpaca1").append('<option value="b9298058bf6b060c9f06">Life Assurance</option>');
        $("#alpaca1").append('<option value="1c4dd10100aff672e36c">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="5785451ed5fc8af7e2b9">Leave of Absence</option>');
        $("#alpaca1").append('<option value="531bd0b4cc805529427e">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="c9f922fd9e627e377923">Maternity/Paternity Resources</option>');
        $("#alpaca1").append('<option value="85b5adfaa5079dbc40c8">Adoption Assistance</option>');
        $("#alpaca1").append('<option value="340cf3ee3c21b9366912">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="f7fa4eb09f5e3661480e">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="9b435d57d97d8bc83b15">myResources</option>');

        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');
        /*$("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": ukData
            }
        });  */   
    }else  if(cntr == "home"){         
        showFormImageTop('9dd6597dc34ee01f2bc2'); 
    }else  if(cntr == "ireland"){ 

       /* $("#myCntrEmea").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": irelandData
            }
        });*/
      
        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="c9a662c56100215cf8f9">myHealth</option>');
        $("#alpaca1").append('<option value="a2971761da4999ccf154">myWealth</option>');
        $("#alpaca1").append('<option value="e472c46c51228b8b8a18">myLife</option>'); 
        $("#alpaca1").append('<option value="8fb31c12b3e045f6acb1">GESOP</option>'); 
        $("#alpaca1").append('<option value="d9169a3c36227bcd687b">myResources</option>');
        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');

        showFormIreland(); 
    }
    else{
        showFormRedirect(cntr);
    }
}
 
function loadLatam(){
 var cntr = $("#alpaca1").val();
 if(cntr == "costa"){
     showFormImageTop('1ad68c52d4d5e445dd0d'); 
 }else if(cntr == "latam"){
    showFormLatamHome("127f2264730bb3b31b17");
 }
}


function loadNa(){
    
    var cntr = $("#alpaca2").val();
    console.log(cntr);
    if(cntr == "us"){

        $("#alpaca1").html("");        
        $("#alpaca1").append('<option value="">None</option>');
        $("#alpaca1").append('<option value="c6eaf39d47a8c99f5b11">Home</option>');
        $("#alpaca1").append('<option value="bb69c5f8241454f1fc16">Medical</option>');
        $("#alpaca1").append('<option value="b9b37f1519a2ba283da7">Medical HMO</option>');
        $("#alpaca1").append('<option value="8df3d06afb89b80564a3">Medical PPO</option>');
        $("#alpaca1").append('<option value="2fb25794052e44dd513e">Medical HSA</option>');
        $("#alpaca1").append('<option value="47c31937d4f2ef7776cb">Medical Wellness</option>');
        $("#alpaca1").append('<option value="e25a3a6866f6184c8c67">Medical Consumer</option>');
        $("#alpaca1").append('<option value="3f106259d9691012935a">Dental</option>');
        $("#alpaca1").append('<option value="9b9593d5267b1cd8db7d">Vision</option>');
        $("#alpaca1").append('<option value="56720185ee1b627d1205">401K Plan</option>');
        $("#alpaca1").append('<option value="a0b5e9a9b64f3cb3bbf5">GESOP</option>');
        $("#alpaca1").append('<option value="ce807e9afdf459ae33b3">BCU Credit Union</option>');
        $("#alpaca1").append('<option value="32ae742d1c5f04b5420c">FSA - HSA</option>');
        $("#alpaca1").append('<option value="edf817b8aba85fa35469">Life & Accident Insurance</option>');
        
        $("#alpaca1").append('<option value="503131c11e5bd6ac59d8">Leave of Absence</option>');
        $("#alpaca1").append('<option value="8d6ab6ea8f936473ec54">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="cddc0091ffb950fa07e1">Maternity Resources</option>');
        $("#alpaca1").append('<option value="9c99425fefba93ab0cc7">Educational Assistance Program</option>');
        
        $("#alpaca1").append('<option value="cb228c1529fb8088eff0">Workflex, Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="bf8975d87cee90707d3c">Voluntary Benefits</option>');
        $("#alpaca1").append('<option value="c39675aa5b6e5cb772a2">Btfyl</option>');
        $("#alpaca1").append('<option value="1983821b05719f2cbf44">myResources</option>');
        $("#alpaca1").append('<option value="89c40f637b850ab783a0">New Hires</option>');
        

        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');

        /*$("#myCntr").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": myDataUS
            }
        });*/
        //showFormMicro(); 
    }else  if(cntr == "pr"){
        /*$("#myCntr").alpaca({
            "options": {
                "label": "What page would you like to edit?",
                "type": "select",
                //"dataSource": { "5c5fb3b173fbb1185b4d": "medical.html" }
                "dataSource": prData
            }
        });
        showFormMicro();*/ 

        $("#alpaca1").html("");
        $("#alpaca1").append('<option value="">None</option>');     
        $("#alpaca1").append('<option value="142e09724772ddbc38c3">Health Scheme</option>');
        $("#alpaca1").append('<option value="8f657689061834db1240">Wellness</option>');
        $("#alpaca1").append('<option value="2f43397d100dfad8fa3a">Retirement Plan</option>');
        $("#alpaca1").append('<option value="cd976a3e53aced81d643">Bio Pharma Credit Union</option>');
        $("#alpaca1").append('<option value="7e869f97b5023abecf1d">GESOP</option>');
        $("#alpaca1").append('<option value="ae2c925d9676a5c42b52">Life & Accident Insurance</option>');
        // $("#alpaca1").append('<option value="7f4a0796bbba2990752f">Business Travel Insurance</option>');
        $("#alpaca1").append('<option value="ac2addf0bbdea0edc8c2">Leave of Absence</option>');
        $("#alpaca1").append('<option value="a556a5b08a73e41721fd">Employee Assistance Program</option>');
        $("#alpaca1").append('<option value="ef43e065298b8e5a8dcf">Education Assistance Program</option>');
        $("#alpaca1").append('<option value="558c5603ce28b1e76b5e">Maternity/Family Resources</option>');
        $("#alpaca1").append('<option value="da55012b8f730b4abb3e">Adoption Assistance</option>');
        $("#alpaca1").append('<option value="da3faa5d515d8e255f05">Vacaion and Holidays</option>');
        $("#alpaca1").append('<option value="b77186da202d2ab9ba9e">myResources</option>');

        $("#alpaca1").css('display','block');
        $("#alpaca1").prev().css('display','block');

    }else  if(cntr == "canada"){
        showFormRowImg("ee274c79588e42e19a9e");
    }

} 
var timer;

function setTimer() {
    timer = setTimeout(function() {
        location.reload();
    }, 900000);
}

function clearTimer() {
    clearTimeout(timer);
}

//PageColumn update/show page
function reShowForm(pageIdToLoad) {
    pageIdToLoad = $("#alpaca1").val(); 

    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
            "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
            "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
            "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
            "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
             "baseURL": "https://api.cloudcms.com",
            "application": "3be07fd41b525b0601ae"
            }
    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        platform = this;
        console.log('reshow form ' + platform)
        
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    if(pageIdToLoad == 'a5e2244348f8234a9d4a'){
                        showPageImageTop(pageIdToLoad);
                    }else{
                     showPageColumn();
                    } 
                });
            });
        });
    });     
}


function showPageColumn(){
    $("#alpaca1").css('display','none');
    $("#alpaca1").prev().css('display','none');

    pageIdToLoad = $("#alpaca1").val(); 
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page Column.",
            "type": "object",
            "properties": {
                 "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },
                    "headerTitle": {
                        "type": "string",
                        "title": "headerTitle"
                    },
                    "mainBody": {
                        "type": "string",
                        "title": "mainBody"
                    },
                    "calloutBody": {
                        "type": "string",
                        "title": "calloutBody"
                    },
                    "column1": {
                        "type": "array",
                        "title": "Column1Details",
                        "items": {
                            "properties": {
                                "column1Image": {
                                    "type": "string",
                                    "title": "column1Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column1Header": {
                                    "type": "string",
                                    "title": "column1Header"
                                },
                                "column1Body": {
                                    "type": "string",
                                    "title": "column1Body"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "column2": {
                        "type": "array",
                        "title": "Column2Details",
                        "items": {
                            "properties": {
                                "column2Image": {
                                    "type": "string",
                                    "title": "column2Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column2Header": {
                                    "type": "string",
                                    "title": "column2Header"
                                },
                                "column2Body": {
                                    "type": "string",
                                    "title": "column2Body"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "column3": {
                        "type": "array",
                        "title": "Column3Details",
                        "items": {
                            "properties": {
                                "column3Image": {
                                    "type": "string",
                                    "title": "column3Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column3Header": {
                                    "type": "string",
                                    "title": "column3Header"
                                },
                                "column3Body": {
                                    "type": "string",
                                    "title": "column3Body"
                                }
                            },
                            "type": "object"
                        }
                    }
            },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                           
                            node.name = value.name;
                            node.headerTitle = value.headerTitle;
                            node.mainBody = value.mainBody;
                            node.calloutBody = value.calloutBody;
                            node.column1 = value.column1;
                            node.column2 = value.column2;
                            node.column3 = value.column3;
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "mainBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "calloutBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                            ]
                        },
                        "height":"120"
                },
                "column1": {
                    "type": "array",
                    "items": {
                        "fields": {
                            "column1Image": {
                                "type":"radio", 
                                "optionLabels": ["child","heart","house","money","star"]   
                            },
                            "column1Header":{
                              "type": "text"  
                            },
                            "column1Body":{
                                "type": "ckeditor",
                                 "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                            }
                        }
                    },
                    "actionbar": {
                        "actions": [{
                            "action": "add",
                            "enabled": false
                        },
                        {
                            "action": "remove",
                            "enabled": false
                        },
                        {
                            "action": "up",
                            "enabled": false
                        },
                        {
                            "action": "down",
                            "enabled": false
                        }
                        ]
                    }

                  },  
                "column2": {
                    "type": "array",
                        "items": {
                            "fields": {
                                "column2Image": {
                                    "type":"radio", 
                                    "optionLabels": ["child","heart","house","money","star"]   
                                },
                                "column2Header":{
                                  "type": "text"  
                                },
                                "column2Body":{
                                    "type": "ckeditor",
                                     "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                                }
                            }
                        },
                        "actionbar": {
                            "actions": [{
                                "action": "add",
                                "enabled": false
                            },
                            {
                                "action": "remove",
                                "enabled": false
                            },
                            {
                                "action": "up",
                                "enabled": false
                            },
                            {
                                "action": "down",
                                "enabled": false
                            }
                            ]
                        }
                 },
                "column3": {
                    "type": "array",
                        "items": {
                            "fields": {
                                "column3Image": {
                                    "type":"radio", 
                                    "optionLabels": ["child","heart","house","money","star"]   
                                },
                                "column3Header":{
                                  "type": "text"  
                                },
                                "column3Body":{
                                    "type": "ckeditor",
                                     "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                                }
                            }
                        },
                        "actionbar": {
                            "actions": [{
                                "action": "add",
                                "enabled": false
                            },
                            {
                                "action": "remove",
                                "enabled": false
                            },
                            {
                                "action": "up",
                                "enabled": false
                            },
                            {
                                "action": "down",
                                "enabled": false
                            }
                            ]
                        }
                    }   
                }            
        }
    });
}


//PageRedirect update/show page
function showFormRedirect(pageIdToLoad) {
 
   // if(pageIdToLoad == '' ) 
        pageIdToLoad = $("#alpaca2").val(); 

    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        } 
    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    showPageRedirect(pageIdToLoad);
                });
            });
        });
    });

     
}

function showPageRedirect(pageIdToLoad){ 
    $("#alpaca1").css('display','none');
    $("#alpaca1").prev().css('display','none');

    //if(pageIdToLoad == '')
        pageIdToLoad = $("#alpaca2").val(); 

 
    $("#myform").css('display','block');
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page Redirect.",
            "type": "object",
            "properties": {
                  "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },                     
                    "headerTitle": {
                        "type": "string",
                        "title": "headerTitle"
                    },
                    "redirectURL": {
                        "type": "string",
                        "title": "redirectURL"
                    }
                },
                "_parent": "n:node",
                "$schema": "http://json-schema.org/draft-04/schema#",
                "items": {}
            },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                            
                            node.name = value.name;
                            node.headerTitle = value.headerTitle;
                            node.redirectURL = value.redirectURL;
                            
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "mainBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "calloutBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                }
            }
        }
    });
}

//Microsite update/show page
function showFormMicro(pageIdToLoad) {

    
    pageIdToLoad = $("#alpaca1").val(); 
 

    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        console.log(platform + ' in showFormMicro');


        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
             
                    if((pageIdToLoad ==  "7946ddfb3c0b391c97b6") || (pageIdToLoad ==  "8e707aeed0449d39c9bb") || (pageIdToLoad ==  "3509cedc84dc108f695e") || (pageIdToLoad ==  "06ebf9f6b50b9123d16a") || (pageIdToLoad ==  "c7c243a91336f42a74c4") || (pageIdToLoad ==  "cfa046a067d11beb92cb") || (pageIdToLoad ==  "a6c28487ce4e0966d531") || (pageIdToLoad ==  "9b435d57d97d8bc83b15") || (pageIdToLoad ==  "d9169a3c36227bcd687b") || (pageIdToLoad ==  "1983821b05719f2cbf44"))
                    {
                        showResourcesForm(pageIdToLoad);
                    }else if(pageIdToLoad == "7b689138ab90cead164d" || pageIdToLoad == "49bab5b49108fdd445e5" || pageIdToLoad =='374be01f93d8979298fc' || pageIdToLoad =="01b6d8b29b0a46fe652e" || pageIdToLoad == "47960869f4de84d641fa" || pageIdToLoad=="eb81e90413e9a0cddc05" || pageIdToLoad == "1b2cf220530a7fdeec81" || pageIdToLoad =="05aed5b3dd549129a378"){ 
                         showHomepageForm(pageIdToLoad)
                    }
                    else{
                        showPageMicro();
                    }
                });
            });
        });
    });

     
}

function showPageMicro(){

    $("#alpaca1").css('display','block');
    $("#alpaca1").prev().css('display','block');

    pageIdToLoad = $("#alpaca1").val(); 
 
    $("#myform").html("");
    $("#myform").css('display','block');
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page MicroSite.",
            "type": "object",
            "properties": {
                 "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },
                    "heading": {
                        "type": "string",
                        "title": "heading"
                    },
                    "body": {
                        "type": "string",
                        "title": "body"
                    },
                    "links": {
                        "type": "array",
                        "title": "Helpful Links",
                        "maxItems": 30,
                        "items": {
                            "properties": {
                                "linkHeader": {
                                    "type": "string",
                                    "title": "linkHeader"
                                },
                                "company": {
                                    "type": "string",
                                    "title": "company"
                                },
                                "number": {
                                    "type": "string",
                                    "title": "number"
                                },
                                "link": {
                                    "type": "string",
                                    "title": "link"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "accordionSection1Header": {
                        "type": "string",
                        "title": "Accordion Section 1 Header"
                    },
                    "Accordion1Body": {
                        "type": "string",
                        "title": "Accordion1Body"
                    },
                    "accordionSection2Header": {
                        "type": "string",
                        "title": "Accordion Section 2 Header"
                    },
                    "Accordion2Body": {
                        "type": "string",
                        "title": "Accordion2Body"
                    }
                   
            },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                           
                            node.heading = value.heading;
                            node.body = value.body;
                            node.links = value.links;
                            node.accordionSection1Header = value.accordionSection1Header;
                            node.Accordion1Body = value.Accordion1Body;
                            node.accordionSection2Header = value.accordionSection2Header;
                            node.Accordion2Body = value.Accordion2Body;
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "Accordion1Body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "Accordion2Body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                }

            }
        }
    });
}


//PageImageTop update/show page
function showFormImageTop(pageIdToLoad) {
     
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    showPageImageTop(pageIdToLoad);
                });
            });
        });
    });

     
}

function showPageImageTop(pageIdToLoad){
    $("#alpaca1").css('display','none');
    $("#alpaca1").prev().css('display','none');

   $("#myform").css('display','block');
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page Redirect.",
            "type": "object",
             "properties": {
                    "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },                   
                    "headerTitle": {
                        "type": "string",
                        "title": "headerTitle"
                    },
                    "mainBody": {
                        "type": "string",
                        "title": "mainBody"
                    }
                },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                         
                            node.headerTitle = value.headerTitle;
                            node.mainBody = value.mainBody;
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "mainBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                }
               

            }
        }
    });
}

//PageLatamHome update/show page
function showFormLatamHome(pageIdToLoad) {
    

    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
                console.log(pageIdToLoad + 'load page here')
                node = this.readNode(pageIdToLoad).then(function () {

                    showPageLatamHome(pageIdToLoad);
                });
            });
        });
    });

     
}

function showPageLatamHome(pageIdToLoad){
    $("#alpaca1").css('display','none');
    $("#alpaca1").prev().css('display','none');

    console.log('here')
    pageIdToLoad = $("#alpaca1").val(); 
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page Redirect.",
            "type": "object",
             "properties": {
                    "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },                    
                    "headerTitle": {
                        "type": "string",
                        "title": "headerTitle"
                    },
                    "mainBody": {
                        "type": "string",
                        "title": "mainBody"
                    },
                    "country": {
                        "type": "array",
                        "title": "Country Columns",
                        "items": {
                            "properties": {
                                "countryTitle": {
                                    "type": "string",
                                    "title": "countryTitle",
                                    readonly: true
                                },
                                "column1Image": {
                                    "type": "string",
                                    "title": "column1Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column1Header": {
                                    "type": "string",
                                    "title": "column1Header"
                                },
                                "column1Body": {
                                    "type": "string",
                                    "title": "column1Body"
                                },
                                "column2Image": {
                                    "type": "string",
                                    "title": "column2Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column2Header": {
                                    "type": "string",
                                    "title": "column2Header"
                                },
                                "column2Body": {
                                    "type": "string",
                                    "title": "column2Body"
                                },
                                "column3Image": {
                                    "type": "string",
                                    "title": "column3Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "column3Header": {
                                    "type": "string",
                                    "title": "column3Header"
                                },
                                "column3Body": {
                                    "type": "string",
                                    "title": "column3Body"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "lCountryLink": {
                        "type": "string",
                        "title": "lCountryLink"
                    }
                },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name; 
                            
                            node.headerTitle = value.headerTitle;
                            node.mainBody = value.mainBody;
                            node.country =value.country;
                            node.lCountryLink = value.lCountryLink;
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "mainBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },                
                "country": {
                    "type": "array",
                        "items": {
                            "fields": {
                                "column1Image": {
                                    "type":"radio", 
                                    "optionLabels": ["child","heart","house","money","star"]   
                                },
                                "column1Header":{
                                  "type": "text"  
                                },
                                "column1Body":{
                                    "type": "ckeditor",
                                    "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                                },"column2Image": {
                                    "type":"radio", 
                                    "optionLabels": ["child","heart","house","money","star"]   
                                },
                                "column2Header":{
                                  "type": "text"  
                                },
                                "column2Body":{
                                    "type": "ckeditor",
                                    "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                                },"column3Image": {
                                    "type":"radio", 
                                    "optionLabels": ["child","heart","house","money","star"]   
                                },
                                "column3Header":{
                                  "type": "text"  
                                },
                                "column3Body":{
                                    "type": "ckeditor",
                                    "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                                }
                            }
                        },
                          "actionbar": {
                                    "actions": [{
                                        "action": "add",
                                        "enabled": false
                                    },
                                    {
                                        "action": "remove",
                                        "enabled": false
                                    },
                                    {
                                        "action": "up",
                                        "enabled": false
                                    },
                                    {
                                        "action": "down",
                                        "enabled": false
                                    }
                                    ]
                                }
                }

            }
        }
    });
}

//PageRowImage update/show page
function showFormRowImg(pageIdToLoad) {
    
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
    }

    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    showPageRowImg(pageIdToLoad);
                });
            });
        });
    });

     
}

function showPageRowImg(pageIdToLoad){
    $("#alpaca1").css('display','none');
    $("#alpaca1").prev().css('display','none');

    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "Page Row",
            "description": "A data type to support for Page.",
            "type": "object",
               "properties": {
                    "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    }, 
                    "headerTitle": {
                        "type": "string",
                        "title": "headerTitle"
                    },
                    "mainBody": {
                        "type": "string",
                        "title": "mainBody"
                    },
                    "row1": {
                        "type": "array",
                        "title": "Row1Details",
                        "items": {
                            "properties": {
                                "row1Image": {
                                    "type": "string",
                                    "title": "row1Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "row1Header": {
                                    "type": "string",
                                    "title": "row1Header"
                                },
                                "row1Body": {
                                    "type": "string",
                                    "title": "row1Body"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "row2": {
                        "type": "array",
                        "title": "Row2Details",
                        "items": {
                            "properties": {
                                "row2Image": {
                                    "type": "string",
                                    "title": "row2Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "row2Header": {
                                    "type": "string",
                                    "title": "row2Header"
                                },
                                "row2Body": {
                                    "type": "string",
                                    "title": "row2Body"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "row3": {
                        "type": "array",
                        "title": "Row3Details",
                        "items": {
                            "properties": {
                                "row3Image": {
                                    "type": "string",
                                    "title": "row3Image",
                                    "enum": ["child","heart","house","money","star"]
                                },
                                "row3Header": {
                                    "type": "string",
                                    "title": "row3Header"
                                },
                                "row3Body": {
                                    "type": "string",
                                    "title": "row3Body"
                                }
                            },
                            "type": "object"
                        }
                    }
                },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                           
                            node.headerTitle = value.headerTitle;
                            node.mainBody = value.mainBody;
                            node.row1 =value.row1;
                            node.row2 =value.row2;
                            node.row3 =value.row3;
                            
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "mainBody": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                 "row1": {
                    "type": "array",
                    "items": {
                        "fields": {
                            "row1Image": {
                                "type":"radio", 
                                "optionLabels": ["child","heart","house","money","star"]   
                            },
                            "row1Header":{
                              "type": "text"  
                            },
                            "row1Body":{
                                "type": "ckeditor",
                                 "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                            }
                        }
                    }
                }, "row2": {
                    "type": "array",
                    "items": {
                        "fields": {
                            "row2Image": {
                                "type":"radio", 
                                "optionLabels": ["child","heart","house","money","star"]   
                            },
                            "row2Header":{
                              "type": "text"  
                            },
                            "row2Body":{
                                "type": "ckeditor",
                                 "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                            }
                        }
                    }
                }, "row3": {
                    "type": "array",
                    "items": {
                        "fields": {
                            "row3Image": {
                                "type":"radio", 
                                "optionLabels": ["child","heart","house","money","star"]   
                            },
                            "row3Header":{
                              "type": "text"  
                            },
                            "row3Body":{
                                "type": "ckeditor",
                                 "ckeditor": {
                                        "toolbar": [
                                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                                        ]
                                    },
                                    "height":"120"
                            }
                        }
                    }
                }


            }
        }
    });
}

//PageIreland update/show page
function showFormIreland(pageIdToLoad) {
    pageIdToLoad = $("#alpaca1").val(); 
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    showPageIreland();
                });
            });
        });
    });

     
}

function showPageIreland(){

    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page Redirect.",
            "type": "object",
               "properties": {
                    "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },
                    "heading": {
                        "type": "string",
                        "title": "heading",
                         "readonly":true
                    },
                    "body": {
                        "type": "string",
                        "title": "body"
                    } 
                },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                            node.heading = value.heading; 
                            node.body = value.body; 
                            
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "body": {
                    "type": "ckeditor",
                    "ckeditor": {
                            "toolbar": [
                                ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                            ]
                        },
                        "height":"120"
                } 
            }
        }
    });
}

function showFormNA() {
    pageIdToLoad = $("#alpaca1").val();  
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
                  console.log('here' + pageIdToLoad);
                node = this.readNode(pageIdToLoad).then(function () {
                
                    if((pageIdToLoad ==  "1983821b05719f2cbf44") || (pageIdToLoad == 'b77186da202d2ab9ba9e'))
                    {                       
                        showResourcesForm();
                    }else if (pageIdToLoad == 'c6eaf39d47a8c99f5b11'){
                        showHomepageForm('c6eaf39d47a8c99f5b11')
                    }else if (pageIdToLoad == 'c39675aa5b6e5cb772a2'){
                        showMFForm(pageIdToLoad);
                    } else{
                        showPageMicro();
                    }
                });
            });
        });
    });

     
}

function showPageMicro(){
    
    pageIdToLoad = $("#alpaca1").val(); 
    

    $("#myform").html("");
    $("#myform").css('display','block');
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "PageColumn",
            "description": "A data type to support for Page MicroSite.",
            "type": "object",
            "properties": {
                 "name": {
                        "type": "string",
                        "title": "name",
                         "readonly":true
                    },
                    
                    "heading": {
                        "type": "string",
                        "title": "heading"
                    },
                    "body": {
                        "type": "string",
                        "title": "body"
                    },
                    "leftImage": {
                        "type": "string",
                        "title": "image"
                    },
                    "links": {
                        "type": "array",
                        "title": "Helpful Links",
                        "maxItems": 30,
                        "items": {
                            "properties": {
                                "linkHeader": {
                                    "type": "string",
                                    "title": "linkHeader"
                                },
                                "company": {
                                    "type": "string",
                                    "title": "company"
                                },
                                "number": {
                                    "type": "string",
                                    "title": "number"
                                },
                                "link": {
                                    "type": "string",
                                    "title": "link"
                                }
                            },
                            "type": "object"
                        }
                    },
                    "accordionSection1Header": {
                        "type": "string",
                        "title": "Accordion Section 1 Header"
                    },
                    "Accordion1Body": {
                        "type": "string",
                        "title": "Accordion1Body"
                    },
                    "accordionSection2Header": {
                        "type": "string",
                        "title": "Accordion Section 2 Header"
                    },
                    "Accordion2Body": {
                        "type": "string",
                        "title": "Accordion2Body"
                    }
                   
            },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;
                           
                            node.heading = value.heading;
                            node.body = value.body;
                            node.links = value.links;
                            node.accordionSection1Header = value.accordionSection1Header;
                            node.Accordion1Body = value.Accordion1Body;
                            node.accordionSection2Header = value.accordionSection2Header;
                            node.Accordion2Body = value.Accordion2Body;
                            
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "Accordion1Body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                },
                "Accordion2Body": {
                    "type": "ckeditor",
                     "ckeditor": {
                        "toolbar": [
                            ['Bold', 'Italic', 'Underline', 'Cut', 'Copy', 'Paste'], ['NumberedList', 'BulletedList', 'Link', 'Unlink'], ['Table', 'Source']
                        ]
                    },
                    "height":"120"
                }

            }
        }
    });
}
function showHomepageForm(pageIdToLoad) {
    //pageIdToLoad = $("#alpaca1").val(); 
    console.log("show homepage form");
    $("#myform").css("display","block");
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "homePage",
            "description": "A data type to support the home page.",
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "title": "name",
                    "readonly": true 
                },
                "tile1": {
                    "type": "string",
                    "title": "tile1"
                }
            },
            "_parent": "n:node",
            "$schema": "http://json-schema.org/draft-04/schema#",
            "items": {}
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.name = value.name;                          
                            node.tile1 = value.tile1;
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "tile1": {
                    "type": "ckeditor"
                }
            }
        }
    });
}

function showResourcesForm(){
    pageIdToLoad = $("#alpaca1").val(); 
    console.log(pageIdToLoad + 'Res')
    clearTimer();
    console.log("Timer Cleared");
    setTimer();
    console.log("Timer Set");
    var config = {
        "clientKey":"5656f503-5720-47d4-8453-19284c317e9c",
        "clientSecret":"wdCugk2wakvRfq5CXxIk2J+/0GNS01I1QE68PyBJJm3rka+y7vKdKt772Vp1eOvIA+TK49ojOT+9FSquWEJsAqniM1dSADrdL4fxjgon+bQ=",
        "username":"4adb8666-0509-4a12-93e4-96380b6dd0db",
        "password":"bsoF/w0lgSrZ8/dnf5nq0SF26S5j+/c0ICc3E48IfmHEpAyy0eGt/mLehvM2OaXKxvxhemHcWkdpT5K3itxSF02FfMxut7Oh1vGoTpEJbrI=",
         "baseURL": "https://api.cloudcms.com",
        "application": "3be07fd41b525b0601ae"
        }


    $("#dialog").dialog("close");

    Gitana.connect(config, function(err) {
        if (err) {
            console.log("Error: " + err + window.location.href);
            //$("#loading-image").css('display', 'none');

            $("#lblLoginLable").html("Username or password are incorrect. Please try again.");
            $("#dialog").dialog("open");
            return;

        }
    }).then(function() {
        //platform = this;
        document.cookie = "username=" + username;
        document.cookie = "password=" + password;
         /* add country list based on username/password*/   
        
        this.readRepository(repositoryId).then(function() {
            repository = this;
            this.readBranch(branchId).then(function() {
               
                node = this.readNode(pageIdToLoad).then(function () {
                    showPageResources();
                });
            });
        });
    });

}
function showPageResources(pageIdToLoad) {
    console.log($("#alpaca1").val() + 'Resources');
    $("#myform").css('display','block');
    pageIdToLoad = $("#alpaca1").val(); 
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
            "title": "newResources",
            "type": "object",
            "properties": {
                "name":{
                    "type":"string",
                    "title":"name",
                    "readonly":true
                },
                "heading":{
                    "type":"string",
                    "title":"heading"
                },
                "mainbody":{
                    "type":"string",
                    "title":"mainbody"
                },
                "generalBenefits": {
                    "type": "array",
                    "title": "generalBenefits",
                    "items": {
                        "type": "object",
                        "title": "item",
                        "properties": {
                            "description": {
                                "type": "string",
                                "title": "description"
                            },
                            "link": {
                                "type": "string",
                                "title": "link"
                            },
                            "bullets": {
                                "items": {
                                    "type": "string",
                                    "title": "bulletItem"
                                },
                                "type": "array",
                                "title": "bullets"
                            }
                        }
                    }
                },
                "consumerism": {
                    "type": "array",
                    "title": "consumerism",
                    "items": {
                        "type": "object",
                        "title": "item",
                        "properties": {
                            "description": {
                                "type": "string",
                                "title": "description"
                            },
                            "link": {
                                "type": "string",
                                "title": "link"
                            },
                            "bullets": {
                                "items": {
                                    "type": "string",
                                    "title": "bulletItem"
                                },
                                "type": "array",
                                "title": "bullets"
                            }
                        }
                    }
                },
            
                "forms": {
                    "type": "array",
                    "title": "forms",
                    "items": {
                        "type": "object",
                        "title": "item",
                        "properties": {
                            "description": {
                                "type": "string",
                                "title": "description"
                            },
                            "link": {
                                "type": "string",
                                "title": "link"
                            },
                            "bullets": {
                                "items": {
                                    "type": "string",
                                    "title": "bulletItem"
                                },
                                "type": "array",
                                "title": "bullets"
                            }
                        }
                    }
                }
            },
            "_parent": "n:node",
            "items": {},
            "description": "custom:newresources0",
            "$schema": "http://json-schema.org/draft-04/schema#"
        },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function() {
                            clearTimer();//Auto logout feature
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();

                            node.name = value.name;                            
                            node.heading = value.heading;
                            node.mainbody = value.mainbody;                            

                            node.generalBenefits = value.generalBenefits;
                            node.consumerism = value.consumerism;
                            node.communications = value.communications;
                            node.enrollment = value.enrollment;
                            node.forms = value.forms;
                            node.update().then(function() {
                                alert("Resources Form Submitted");
                                window.location ="../index.html";
                            });

                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "name": {
                    "type": "text"
                },
                "body": {
                    "type": "ckeditor"
                },
                "image": {
                    "type": "text"
                },
                "links": {
                    "options": {
                        "actionBarType": "right"
                    }
                }
            }
        }
    });

} //alpaca 


//This function is ready to be implimented when we show modern family
function showMFForm(pageIdToLoad) {

    console.log("show Benefit to fit your life form");
    $("#myform").css('display','block');
    $("#myform").html("");
    $("#myform").alpaca({
        "view": "bootstrap-edit",
        "data": node,
        "schema": {
                "title": "newMF",
                "type": "object",
                "properties": {
                        "name": {
                            "type": "string",
                            "title": "name",
                            "readonly":true
                        },                         
                        "headerTitle": {
                            "type": "string",
                            "title": "headerTitle"
                        },
                        "callout1": {
                            "type": "string",
                            "title": "callout1"
                        },
                        "callout2": {
                            "type": "string",
                            "title": "callout2"
                        },
                        "accordions": {
                            "type": "array",
                            "title": "accordions",
                            "items": {
                                "type": "object",
                                "title": "accordionItem",
                                "properties": {
                                    "accordionName": {
                                        "type": "string",
                                        "title": "Name"
                                    },
                                    "headerText": {
                                        "type": "string",
                                        "title": "Header Text"
                                    },
                                    "items": {
                                        "type": "array",
                                        "title": "Upper Accordion Items",
                                        "items": {
                                            "type": "object",
                                            "title": "Item",
                                            "properties": {
                                                "name": {
                                                    "type": "string",
                                                    "title": "Item Name"
                                                },
                                                "link": {
                                                    "type": "string",
                                                    "title": "item Link Url"
                                                },
                                                "description": {
                                                    "type": "string",
                                                    "title": "Item Description"
                                                }
                                            }
                                        }
                                    },
                                    "subAccordions": {
                                        "type": "array",
                                        "title": "subaccordions",
                                        "items": {
                                            "type": "object",
                                            "title": "subaccordion",
                                            "properties": {
                                                "subAccordionName": {
                                                    "type": "string",
                                                    "title": "Sub Accordion Name"
                                                },
                                                "items": {
                                                    "type": "array",
                                                    "title": "Sub Accordion Items",
                                                    "items": {
                                                        "type": "object",
                                                        "title": "Item",
                                                        "properties": {
                                                            "name": {
                                                                "type": "string",
                                                                "title": "Item Name"
                                                            },
                                                            "link": {
                                                                "type": "string",
                                                                "title": "item Link Url"
                                                            },
                                                            "description": {
                                                                "type": "string",
                                                                "title": "Item Description"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                "_parent": "n:node",
                "items": {},
                "description": "custom:pagebtfy0",
                "$schema": "http://json-schema.org/draft-04/schema#"
            },
        "options": {
            "form": {
                "buttons": {
                    "submit": {
                        "click": function () {
                            clearTimer();
                            console.log("Timer Cleared");
                            setTimer();
                            console.log("Timer Set");

                            var value = this.getValue();
                            //alert(JSON.stringify(value, null, "  "));
                            node.headerTitle = value.headerTitle;
                            node.callout1 = value.callout1;
                            node.callout2 = value.callout2;
                            node.accordions = value.accordions;
                            node.update().then(function () {
                                alert("Form Submitted");
                                window.location ="../index.html";
                            });
                        }
                    }
                }
            },
            "title": "newPageTitle",
            "engineId": "alpaca1",
            "fields": {
                "headerTitle": {
                    "type": "text"
                },
                "callout1": {
                    "type": "ckeditor"                     
                },
                "callout2": {
                    "type": "ckeditor"                    
                },
                "accordions": {
                    "options": {
                        "actionBarType": "right"
                    }
                }
            }
        }
    });
}


$("#tb2" ).click(function() {
    getPage();
});

//Apac Uploads

function submitFormApac() {
    var pdfContainerId = 'adffb141d0c8f2d2b0b8';
    var formData = new FormData($("#frmeditSubmitFormApac")[0]);
    
    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    var form = $("#frmeditSubmitFormApac");

    $.ajax({
        type: "POST",
        url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + pdfContainerId + "/attachments/" + ($("#uploadFilenameApac").val()).replace(" ", "_") + "/",
        data: formData,
        contentType: false,
        processData: false,
        headers: {
            authorization: authorizationHeader
        },
        success: function (response) {
        
        }
    });
}



function submitFormEmea() {
    var pdfContainerId = '9f99c7dac34354d0d7a3';
    var formData = new FormData($("#frmeditSubmitFormEmea")[0]);
  
    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    var form = $("#frmeditSubmitFormEmea");

    $.ajax({
        type: "POST",
        url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + pdfContainerId + "/attachments/" + ($("#uploadFilenameEditEmea").val()).replace(" ", "_") + "/",
        data: formData,
        contentType: false,
        processData: false,
        headers: {
            authorization: authorizationHeader
        },
        success: function (response) {
        /*  //success process here
             
        */
        }
    });
}


function submitFormLatam() {
    var pdfContainerId = 'f81ca80ee19347464f12';
    var formData = new FormData($("#frmeditSubmitFormLatam")[0]);  
    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    var form = $("#frmeditSubmitFormLatam");

    $.ajax({
        type: "POST",
        url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + pdfContainerId + "/attachments/" + ($("#uploadFilenameEditLatam").val()).replace(" ", "_") + "/",
        data: formData,
        contentType: false,
        processData: false,
        headers: {
            authorization: authorizationHeader
        },
        success: function (response) {
        /*  //success process here
            
        */
        }
    });
}


function submitFormNa() {
    getPage();
    var pdfContainerId = 'd427de3db01e378f64fb';
    var formData = new FormData($("#frmeditSubmitFormNa")[0]);   
    var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
    
    var form = $("#frmeditSubmitFormNa");

    $.ajax({
        type: "POST",
        url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + pdfContainerId + "/attachments/" + ($("#uploadFilenameEditNa").val()).replace(" ", "_") + "/",
        data: formData,
        contentType: false,
        processData: false,
        headers: {
            authorization: authorizationHeader
        },
        success: function (response) {
          
        }
    });
}
 
//This ends form upload scripting-----------------------------------------------


function checkCookie() {

    if (performance.navigation.type == 1) {
        console.log('page reloaded');
        Gitana.deleteCookie("password", "/secure-bsc-admin");
        Gitana.deleteCookie("username", "/secure-bsc-admin");
        Gitana.deleteCookie("password", "/localhost");
        Gitana.deleteCookie("username", "/localhost");
        Gitana.deleteCookie("password", "/");
        Gitana.deleteCookie("username", "/");

    }

    console.log('checking cookies');
    var user = getCookie("username");
    var pswd = getCookie("password");
    if (user != "" && pswd != "") {
        console.log("Welcome again " + user);
        username = user;
        password = pswd;
        loadPage();
    } else {
        $("#loginContainer").append('<div id="dialog" title="Please Log In."><label>Username:</label><input id="txtUsername" name="txtUsername" type="text"><label>Password:</label><input id="txtPassword" name="txtPassword" type="password"><input id="submitButton" onclick="setCredentialsFromLogin()" name="Submit" type="button" value="Submit"><label id="lblLoginLable"></label></div>');
        $("#dialog").dialog({
            modal: true,
            draggable: false,
            width: "auto",
            position: {
                my: "top",
                at: "center",
                of: window
            },
            create: function(event, ui) {
                $(this).css("maxWidth", "300px");
            }

        });


        $(".selector").dialog("open");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCredentialsFromLogin() {
    username = $("#txtUsername").val();
    password = $("#txtPassword").val();
    getPage();
}



function logout() {
    Gitana.deleteCookie("password", "/secure-bsc-admin");
    Gitana.deleteCookie("username", "/secure-bsc-admin");
    Gitana.deleteCookie("password", "/localhost");
    Gitana.deleteCookie("username", "/localhost");
    Gitana.deleteCookie("password", "/");
    Gitana.deleteCookie("username", "/");

    platform.logout();
    open("index.html", "_self");
}



 /*check valid file upload formats*/
 if($("#myFileUploadApac").val() != null){

    var flApac = document.getElementById('myFileUploadApac');

    flApac.onchange = function(e) {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'pdf':
                console.log('pdf file type allowed');
                break;
            case 'xls':
                console.log('xls file type allowed');
                break;
            case 'xlsx':
                console.log('xlsx file type allowed');
                break;
            case 'pptx':
                console.log('pptx file type allowed');
                break;
            case 'ppt':
                console.log('ppt file type allowed');
                break;
            case 'pptm':
                console.log('pptm file type allowed');
                break;
            default:
                alert('Pdf , ppt or xls/xlsx files may be uploaded');
                this.value = '';
        }
    };
}
if($("#myFileUploadEmea").val() != null){
    var flEmea = document.getElementById('myFileUploadEmea');

    flEmea.onchange = function(e) {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'pdf':
                console.log('pdf file type allowed');
                break;
            case 'xls':
                console.log('xls file type allowed');
                break;
            case 'xlsx':
                console.log('xlsx file type allowed');
                break;
            case 'pptx':
                console.log('pptx file type allowed');
                break;
            case 'ppt':
                console.log('ppt file type allowed');
                break;
            case 'pptm':
                console.log('pptm file type allowed');
                break;
            default:
                alert('Pdf , ppt or xls/xlsx files may be uploaded');
                this.value = '';
        }
    };
}

if($("#myFileUploadLatam").val() != null){
    var flLatam = document.getElementById('myFileUploadLatam');

    flLatam.onchange = function(e) {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'pdf':
                console.log('pdf file type allowed');
                break;
            case 'xls':
                console.log('xls file type allowed');
                break;
            case 'xlsx':
                console.log('xlsx file type allowed');
                break;
            case 'pptx':
                console.log('pptx file type allowed');
                break;
            case 'ppt':
                console.log('ppt file type allowed');
                break;
            case 'pptm':
                console.log('pptm file type allowed');
                break;
            default:
                alert('Pdf , ppt or xls/xlsx files may be uploaded');
                this.value = '';
        }
    };
}
if($("#myFileUploadNa").val() != null){
    var flNa = document.getElementById('myFileUploadNa');

    flNa.onchange = function(e) {
        var ext = this.value.match(/\.(.+)$/)[1];
        switch (ext) {
            case 'pdf':
                console.log('pdf file type allowed');
                break;
            case 'xls':
                console.log('xls file type allowed');
                break;
            case 'xlsx':
                console.log('xlsx file type allowed');
                break;
            case 'pptx':
                console.log('pptx file type allowed');
                break;
            case 'ppt':
                console.log('ppt file type allowed');
                break;
            case 'pptm':
                console.log('pptm file type allowed');
                break;
            default:
                alert('Pdf , ppt or xls/xlsx files may be uploaded');
                this.value = '';
        }
    };
}
/*check valid file upload formats --- */



/*copy the url for each upload containers*/ 
$("#uploadFilenameApac").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameApac").val());
    var tx = "https://3abed68c-41f8-43a1-a7a0-f80ccbb1ded4-hosted.cloudcms.net/static/test.pdf?repository=5806d444c717deabe6fc&branch=956f6d1d79eef20c2b37&node=adffb141d0c8f2d2b0b8&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameApac").val());
});



$("#uploadFilenameEditEmea").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameEditEmea").val());
    var tx = "https://3abed68c-41f8-43a1-a7a0-f80ccbb1ded4-hosted.cloudcms.net/static/test.pdf?repository=5806d444c717deabe6fc&branch=956f6d1d79eef20c2b37&node=9f99c7dac34354d0d7a3&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameEditEmea").val());
});


$("#uploadFilenameEditLatam").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameEditLatam").val());
    var tx = "https://3abed68c-41f8-43a1-a7a0-f80ccbb1ded4-hosted.cloudcms.net/static/test.pdf?repository=5806d444c717deabe6fc&branch=956f6d1d79eef20c2b37&node=f81ca80ee19347464f12&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameEditLatam").val());
});


$("#uploadFilenameEditNa").on('change keyup paste mouseup', function() {
    $("#myFileName").html($("#uploadFilenameEditNa").val());
    var tx = "https://3abed68c-41f8-43a1-a7a0-f80ccbb1ded4-hosted.cloudcms.net/static/test.pdf?repository=5806d444c717deabe6fc&branch=956f6d1d79eef20c2b37&node=d427de3db01e378f64fb&attachment=";
    $("#lnk1").html(tx + $("#uploadFilenameEditNa").val());
});

function copyToClipboard(element) {
    if ($("#uploadFilename").val() !== "") {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }
}

