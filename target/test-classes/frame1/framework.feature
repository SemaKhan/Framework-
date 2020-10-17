Feature: Creat An Account
@Sanity
Scenario: Veryfy User can create a new account
Given Launch "<URL>"
 Then click on Sign In 
 Then I can nevigate to the Creat an account page
 Then I Expect to Write First Name "<FirstName>"
 Then I Expect to Write Last Name "<LastName>"
 Then I Expect to Write Email Address "<EmailAddress>"
 And I can create a "<Password>"
 And Verify I can see Show Password button
                                   