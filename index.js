//import the following dependancies from the selenium-webdriver library
const firefox = require('selenium-webdriver/firefox');
const {Builder} = require('selenium-webdriver');

//import the proxy fuctionality
const proxy = require('selenium-webdriver/proxy');

async function overProxy() {

   //we add the proxy details
    const proxyUsername = 'username'; // if required
    const proxyPassword = 'password'; // if required
    const IpAddress = 'xxx.xxx.xxx.xxx';
    const port = 'xxxx';
    const proxyString = `${IpAddess}:${port}`;
    
   
   //here we are setting the browser options, we set the location of the browser binary executable file
   // this can be the browser of your choosing, doesn't have to be firefox

  const options = new firefox.Options();
  options.setBinary("C:\\Program Files\\Mozilla Firefox\\firefox.exe");

   //we initialize the webdriver
   const driver = new Builder()
    .forBrowser('firefox')
    //we add the proxy to the webdriver
     .setProxy(proxy.manual({
        http: proxyString,
        https: proxyString,
        noProxy: 'localhost,127.0.0.1', // comma-separated list of hostnames that don't use the proxy
      }))
    .setFirefoxOptions(options)
    .build();
   
    try {
       
       // we are going to visit this page which will display our public IP adress
       await driver.get('http://whatismyipaddress.com');
       
       //wait for 8 seconds before closing the browser
       await driver.sleep(8000);

    } finally{
      await driver.quit();
     
    }

}

overProxy();
