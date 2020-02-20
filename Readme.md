# Liberty Tek Systems

I ve added the project here Fredrick. Please take alook

## Getting Started

Installation would need the below
1. Nodejs Latest would do
2. Npm comes with nodejs installation
3. Yarn for Mac or Windows.
4. After installation , command prompt/terminal should recognize 'yarn or npm'

### Prerequisites Or  notes 

1. Ive tried to use Yarn and Npm and Jest 
2. For api calls I ve been using Request nodejs  library
3. Normally in my style , when i create frameworks from scratch, 
    * I tend to Keep the layers separately and well defined as possible
    * I tend to Keep user usability to high. for example , any data in properties or inpiut data will be pre loaded. Second pass wont happen during runtime.
    * I tend to keep clarity over generally accepted conventions when it comes to testing. [not dev] Like naming variables - I_Do_This rather than dothis ort idothis etc.
    * I tend to design/propose design in such a way to off load many things traditionally done inside a framework to external artifacts.
        * like reporting would be over a centrally running server across teams rather than jenkins.
        * Data acceseibility also could be centrally kept rather than inside the framework so cross team chaining is possible.. and many others.
    * I tend to keep naming simple and explanative.
    * I tend to sacrifice a little bit of coding performance for testing and make it elaborate code for debugging rather. This is due to following reasosn.
        * Debugging  is some of the main time consuming post framework creation and mid life cycle.
        * Lack of clarity consumes more time in analysis and enhancements and bugs for newcomers as well as existing people.
        * Too optimized code also takes more time fixing and tend to obfuscate functional goal. 
    * 
        
```
Examples: 
    1. Data Layer - Input data for tests
    2. Locators.
    3. Project related data/environment variables.
    4. Tests as a layer
    5. Setp/teardown 
```

### Installing and Running the tests

1. Check out the project from github.
2. do yarn install Or npm install
3. running npm script _Jest will trigger the tests
4. Selected tests are within pattern matchers within jest config file.

```
```


## Not Done due to time constraint.

1. Any reporting.
2. UI Element functions are in a layer, this would facilitate individually customizable wait times per element. The Locator yaml will pass the locators that way and also wait times as a parameter
3. Only xpath is used. Others are not yet used due to time constraint.
4. Only one sample Api  call and selenium test has been done.
5. Mocking / multiple suites/ parallel runs etc has not been designed as testing time will take some time.
    

### Break down into end to end tests


## Deployment


## Built With

## Contributing


## Versioning


## Authors

* Mahesh

## License

## Acknowledgments