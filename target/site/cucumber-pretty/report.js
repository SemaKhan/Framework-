$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("framework.feature");
formatter.feature({
  "line": 1,
  "name": "Creat An Account",
  "description": "",
  "id": "creat-an-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Veryfy User can create a new account",
  "description": "",
  "id": "creat-an-account;veryfy-user-can-create-a-new-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Launch \"\u003cURL\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "click on Sign In",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I can nevigate to the Creat an account page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I Expect to Write First Name \"\u003cFirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I Expect to Write Last Name \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Expect to Write Email Address \"\u003cEmailAddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can create a \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 268046052,
  "error_message": "java.lang.NullPointerException: null value in entry: url\u003dnull\r\n\tat com.google.common.collect.CollectPreconditions.checkEntryNotNull(CollectPreconditions.java:32)\r\n\tat com.google.common.collect.SingletonImmutableBiMap.\u003cinit\u003e(SingletonImmutableBiMap.java:42)\r\n\tat com.google.common.collect.ImmutableBiMap.of(ImmutableBiMap.java:72)\r\n\tat com.google.common.collect.ImmutableMap.of(ImmutableMap.java:124)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.testUtill1Page.TbasePage.getURL(TbasePage.java:47)\r\n\tat Stepdep1Page.Stepdep1Page.launch(Stepdep1Page.java:17)\r\n\tat ✽.Given Launch \"\u003cURL\u003e\"(framework.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdep1Page.click_on_Sign_In()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdep1Page.i_can_nevigate_to_the_Creat_an_account_page()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "Stepdep1Page.verify_I_can_see_Show_Password_button()"
});
formatter.result({
  "status": "skipped"
});
});