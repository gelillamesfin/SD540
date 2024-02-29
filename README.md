[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/J9KRje_s)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=14084016)
## SD540-Node-Code-Modules
  
## Exercise 01
Create a file `data.json` which contains the following JSON structure:
```json
[{"id": 1, "name": "Asaad Saad"}, {"id": 2, "name": "Theo Saad"}]
```
* Create a class `Names`, once instantiated, it reads the JSON file synchronously, and assigns its content to a public property `data`.
* Create a method `persist()` to write back the instance property `data` back into the `data.json` file, and emit an event `data_saved` to confirm that the file is written successfully.  
* Create a method `addName(id, name)` to add an object to `data`, then persist the changes to the hard drive in `data.json`.
* Create a method `getNames()` to return all names from `data`.  
* Create a method `getNameById(id)` to return the name of the given `id`. 
* Create a method `deleteNameById(id)` to remove the name object of the given `id` from `data`, then persist the changes to the hard drive in `data.json`.
  
Test your code: 
* create an instance of `Names` class.
* listen to `data_saved` event, and print a message `Data has been saved to data.json successfully`.
* call all the methods and test.
  
## Exercise 02
Create an **asynchronous** function `checkSystem()` that returns a promise and checks if the OS memory size is at least 8 GB and the processor has at least 4 cores (use `os` core module, which has the following methods: `cpus()` and `totalmem()`).  

* If the system doesn't have enough memory we should reject with a message: `You need at least 4 GB of RAM`
* If the system doesn't have at least 4 cores, reject with this message: `Processor must have at least 4 cores`
* If the system has enough specs, resolve with the following message `System is checked successfully.`  
  
Note: 1 KB is 1024 bytes, 1 MB is 1024 KB, 1 GB is 1024 MB.









