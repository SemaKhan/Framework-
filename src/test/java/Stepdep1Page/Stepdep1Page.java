package Stepdep1Page;

import com.Action1Page.ActionPage1;
import com.testUtill1Page.TbasePage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Stepdep1Page extends TbasePage {
	
	
	ActionPage1 actionp = new ActionPage1();
	//create a class and object for get access from ActionPage1 class 
	
	@Given("^Launch \"([^\"]*)\"$")
	public void launch(String URL) throws Throwable {
		getURL(URL);
	}

	@Then("^click on Sign In$")
	public void click_on_Sign_In() throws Throwable {
		actionp.clickonSignIn();
	}

	@Then("^I can nevigate to the Creat an account page$")
	public void i_can_nevigate_to_the_Creat_an_account_page() throws Throwable {
		actionp.IcannevigatetotheCreatanaccountpage();
	}

	@Then("^I Expect to Write First Name \"([^\"]*)\"$")
	public void i_Expect_to_Write_First_Name(String FirstName) throws Throwable {
		actionp.FirstName(pro.getProperty("FirstName"));
	}

	@Then("^I Expect to Write Last Name \"([^\"]*)\"$")
	public void i_Expect_to_Write_Last_Name(String LastName) throws Throwable {
		actionp.LastName(pro.getProperty("LastName"));
	}

	@Then("^I Expect to Write Email Address \"([^\"]*)\"$")
	public void i_Expect_to_Write_Email_Address(String EmailAddress) throws Throwable {
		actionp.Emailadd(pro.getProperty("EmailAdd"));
	}

	@Then("^I can create a \"([^\"]*)\"$")
	public void i_can_create_a(String Password) throws Throwable {
		actionp.Password(pro.getProperty("Password"));
	}
	@Then("^Verify I can see Show Password button$")
	public void verify_I_can_see_Show_Password_button() throws Throwable {
		actionp.VerifyIcanseeShowPasswordbutton();
	}



}
