/*
 
 My Custom JS
 ============
 
 Author:  Mohammad Sadnan Al Manir
 Updated: March 4, 2016
 Notes:	 custom js to load and interact with the Java web app via JSON.
 
 */


var Convert2PS = "convertPsoaRuleMLXML2PsoaPS"; // path for POST method, see PSOARuleMLXML2PSSyntax.java
var Slash = "/";
var slash = function(s) {
    return Slash + s;
}
var append = function(s1, s2) {
    return s1 + s2;
}
var WS = "ws";
var service = function(service) {
    return append(WS, slash(service));
}
var encode = encodeURIComponent;
var convert = function(kb, handler) {
    $.ajax({
        type: "POST",
        url: service(Convert2PS),
        data: JSON.stringify(convertRequest(kb)),
        contentType: "application/json; charset=utf-8",
        success: function(psoapssyntax) {
            handler(psoapssyntax);
        }
    });
}
var convertRequest = function(psoa) {
    var d = (psoa) ? psoa : "";
    return {
        // rulemlxmlRulebase must be same as defined in the PSOARulebaseRequest class.
        rulemlxmlRulebase: d
    };
}
var psoaRuleMLXMLKB = function() {
    return $("#PSOARuleMLXMLKB").val();
}

// Set the button handler functions
$(document).ready(function() {

    // Load PSOA RuleML/XML Rulebases when selected
    $("#PSOARuleMLXMLKB").val(SamplePSOAKB);
    $("#testcase4_1Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_1);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_2Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_2);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_3Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_3);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_4Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_4);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_5Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_5);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_6aBtn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_6_non_objectified);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_6Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_6);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_7aBtn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_7_non_objectified);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_7Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_7);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_8Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_8);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_9Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_9);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_10Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_10);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_11Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_11);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_12Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_12);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_13Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_13);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_14Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_14);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_15Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_15);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_16Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_16);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_17Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_17);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_18Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_18);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_19Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_19);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_20Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_20);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_21Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_21);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_22Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_22);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_23Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_23);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_24Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_24);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    $("#testcase4_25Btn").click(function() {
        $("#PSOARuleMLXMLKB").val(Example4_25);
        // enable the first tab (index starting at 0)
        $('#tabs li:eq(0) a').tab('show');
    });
    // highlight the group PSOA RuleML/XML rulebase item  when selected
    $('.list-group-item').on('click', function(e) {
        var previous = $(this).closest(".list-group").children(".active");
        previous.removeClass('active'); // previous list-item
        $(e.target).addClass('active'); // activated list-item
    });
    // Method call for syntax conversion of PSOA RuleML/XML rulebase and showing results on another tab
    $('#transKBBtn').click(function() {
        convert(encode(psoaRuleMLXMLKB()), function(result) {
            converted2PSOAPSKB = result;
            if ((converted2PSOAPSKB.indexOf("Invalid content") > -1)) {
                $("#PSOAPSKB").val(converted2PSOAPSKB.substring(converted2PSOAPSKB.indexOf("Invalid content"), converted2PSOAPSKB.length-1));
                // show on the second tab
                $('#tabs li:eq(1) a').tab('show');
            }
            else if ((converted2PSOAPSKB.indexOf("The element type") > -1)) {
                $("#PSOAPSKB").val(converted2PSOAPSKB.substring(converted2PSOAPSKB.indexOf("The element type"), converted2PSOAPSKB.length-1));
                // show on the second tab
                $('#tabs li:eq(1) a').tab('show');
             
            } 
            else if ((converted2PSOAPSKB.indexOf("PSOA RULEML file cannot be read") > -1)) {
                $("#PSOAPSKB").val(converted2PSOAPSKB);             
                // show on the second tab
                $('#tabs li:eq(1) a').tab('show');
            }
            else {
                $("#PSOAPSKB").val(converted2PSOAPSKB);
                // enable the second tab (index starting at 0)
                $('#tabs li:eq(1) a').tab('show');
            }
        });
    });
    // Clear the input PSOA RuleML/XML rulebase
    $("#resetKBBtn").click(function() {
        $("#PSOARuleMLXMLKB").val("");
    });
    // Load sample PSOA RuleML/XML rulebase
    $("#showSampleKBBtn").click(function() {
        $("#PSOARuleMLXMLKB").val(SamplePSOAKB);
    });
});

