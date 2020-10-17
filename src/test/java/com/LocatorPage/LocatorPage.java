package com.LocatorPage;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.testUtill1Page.TbasePage;

public class LocatorPage extends TbasePage{
	//Should make a constructor for action class
	public LocatorPage() {
		//PageFactory is on of the class which coming from Maven 
		PageFactory.initElements(driver, this);
		
	}
	//WebElement nothing but interface and returning WebElement 
	@FindBy(how=How.XPATH,using="//span[text()='Sign In']")
	public WebElement SigningLink;
	
	@FindBy(how=How.XPATH,using="//a[text()='Create an account']")
	public WebElement AccountLink;
	
	@FindBy(how=How.ID,using="FirstName")
	public WebElement NameField; 
	
	@FindBy(how=How.NAME,using="LastName")
	public WebElement Namefield2;
	
	@FindBy(how=How.NAME,using="CreateAccountEmailAddress")
	public WebElement EmailField;
	
	@FindBy(how=How.NAME,using="NewPassword")
	public WebElement PasswordField;
	
	@FindBy(how=How.XPATH,using="//button[text()='Show']")
	public WebElement verificationField;
	
	
	
}
