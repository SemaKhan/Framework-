package com.testUtill1Page;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TbasePage {

	
	public static WebDriver driver;
    public static Properties pro;

    public  TbasePage() {
    	pro = new Properties();
	try {
		FileInputStream fls = new FileInputStream(System.getProperty("user.dir")+"\\src\\test\\java\\config1page\\config1.properties");
		pro.load(fls);
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (IOException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

}
   public void initial() {
	String browserName = pro.getProperty("browser");
	
	if( browserName.equals("Chrome")) {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\driver\\chromedriver.exe");
		driver= new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(Util1Page.pageLoadTimeout,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(Util1Page.implicitlyWait, TimeUnit.SECONDS);
	}
	
	else if(browserName.equals("FF"));
}

public static void getURL(String URL) {
	driver.get(pro.getProperty("urlqa1"));
	
}
}
