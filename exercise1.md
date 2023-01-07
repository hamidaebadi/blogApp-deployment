### Exercise 1

#### Linting
Python as our main programming language inherits a rich set of tools for Linting, testing and building software in a CI system.
For linting python has a library named Pylint which helps with writing clean and maintainable codes. 

#### Tests
Testing is also easy with python. Automated unite and integration tests could be written by using an external python package such as Pytest or Unit-test. 

#### Building
There is also a few libraries for building a python package. For example, build is a simple package that could be installed with pip.

There is a lot of options for setting up a proper CI/CD system. Besides GitHub Actions and Jenkins there are a few other options. 
Gradle, Travis CI, Azure Pipelines and AWS Code Build are other options. Self-hosted CI/CD systems such as Treamcity CI is another option.

#### Self-hosted or cloud-based CI-environment?

It depends on a few factors. Self-hosted CI-system is the best solution when we want to have full control over our data, security and resources. We would use self-hosted setups, if we care about flexibility of our system. Definitely, this is the best option if we have a large team of developers working on a large project/software. The downside of this option is its complexity. Setting up a self-hosted CI-system is a pain.

On the other hand, Cloud-based CI-system such as Github-Actions suits for small or medium software with small teams of developers. It’s really easy to setup a cloud-based CI-system and we don’t need to care about its complex configuration and control. Using a cloud-based CI-system doesn’t provide us flexiability and full control over our data and security. So what we can do with a cloud-based system is limited comparing with self-hosted.