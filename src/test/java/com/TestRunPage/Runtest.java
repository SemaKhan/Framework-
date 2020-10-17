package com.TestRunPage;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import com.testUtill1Page.TbasePage;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features = {"src/test/resources/frame1"} , format = {"json:target/cucumber.json", "html:target/site/cucumber-pretty"},
glue = "Stepdep1Page",tags= {"@Sanity"})
public class Runtest extends AbstractTestNGCucumberTests{
	TbasePage test = new TbasePage();
	@BeforeTest
	public void setUp() {
		test.initial();
	}
	@AfterTest
	public void tearDown() {
		//test.driver.quit();
	}
}
