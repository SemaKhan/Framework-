$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("framework.feature");
formatter.feature({
  "line": 1,
  "name": "Search Functionality",
  "description": "",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Veryfy search field",
  "description": "",
  "id": "search-functionality;veryfy-search-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on Sign In",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I can nevigate to the Creat an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Expect to Write First Name \"\u003cFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Expect to Write Last Name \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Expect to Write Email Address \"\u003cEmailAddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I can create a \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Verify I can see Show Password button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cURL\u003e",
      "offset": 8
    }
  ],
  "location": "Stepdep1Page.launch(String)"
});
formatter.result({
  "duration": 2937607706,
  "status": "passed"
});
formatter.match({
  "location": "Stepdep1Page.click_on_Sign_In()"
});
formatter.result({
  "duration": 341127629,
  "status": "passed"
});
formatter.match({
  "location": "Stepdep1Page.i_can_nevigate_to_the_Creat_an_account_page()"
});
formatter.result({
  "duration": 4949256806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cFirstName\u003e",
      "offset": 30
    }
  ],
  "location": "Stepdep1Page.i_Expect_to_Write_First_Name(String)"
});
formatter.result({
  "duration": 448091040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLastName\u003e",
      "offset": 29
    }
  ],
  "location": "Stepdep1Page.i_Expect_to_Write_Last_Name(String)"
});
formatter.result({
  "duration": 178958139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cEmailAddress\u003e",
      "offset": 33
    }
  ],
  "location": "Stepdep1Page.i_Expect_to_Write_Email_Address(String)"
});
formatter.result({
  "duration": 303830837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cPassword\u003e",
      "offset": 16
    }
  ],
  "location": "Stepdep1Page.i_can_create_a(String)"
});
formatter.result({
  "duration": 227411719,
  "status": "passed"
});
formatter.match({
  "location": "Stepdep1Page.verify_I_can_see_Show_Password_button()"
});
formatter.result({
  "duration": 97875531,
  "status": "passed"
});
});