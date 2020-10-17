package com.Action1Page;

import org.testng.Assert;

import com.LocatorPage.LocatorPage;
import com.testUtill1Page.TbasePage;

public class ActionPage1 extends TbasePage{
	//create a class and object for get access from locator class 
	LocatorPage locator = new LocatorPage();
	
	public void clickonSignIn() {
		locator.SigningLink.click();
	}
	
	public void IcannevigatetotheCreatanaccountpage() {
		locator.AccountLink.click();
	}
	
	public void FirstName(String FN) {
		locator.NameField.sendKeys(FN);
	}
	public void LastName(String LN) {
		locator.Namefield2.sendKeys(LN);
	}
	public void Emailadd(String EM) {
		locator.EmailField.sendKeys(EM);
	}
	public void Password(String PA) {
		locator.PasswordField.sendKeys(PA);
	}
	public void VerifyIcanseeShowPasswordbutton() {
		boolean vari = locator.verificationField.isDisplayed();
		Assert.assertTrue(vari);
	}
}
