# Catchup #5: React ES6
## Slideshow
* [Here is the link](https://catchup-05-react-es6.netlify.app/) to our slideshow for today's catchup

## Instructions
### Clone to your computer
* **note** The `$` below means "Type this in the Terminal". When writing the following Terminal commands, ignore the `$` and type the rest. You will see people represent the Terminal on sites like Stackoverflow with the `$`. Repeat. You don't need to type the `$`. (Don't confuse this `$` with the `$` from jQuery)

`$ git clone https://github.com/kingluddite/react-es6-catchup.git`

### Pull down all branches
* Each of the lessons will be contained inside their own branches. You need to pull down these remote branches to your local machine
* Use the following two commands to pull remote branches down to your local machine

* `$ git fetch --all`
* `$ git pull --all`
* `$ git branch -a` (will show you remote branches)

### Checkout branches locally
* To focus more on the code we will just checkout a branch to work on the next lesson
* You have access to the repo after the Catchup so you can play around with the code (the best way to learn how to code is.... to code)
* To checkout a branch just type any of the following to checkout that particular branch
* To see all your branches you can type `$ git branch`, (you won't see a list of the branches until you check each one out individually)
* To break out of the list of branches type `q` for quit

```
$ git checkout master
$ git checkout 00-var-variables
$ git checkout 01-review-variables-start
$ git checkout 02-activity-01-solution
$ git checkout 03-scoping
$ git checkout 04-constructor
$ git checkout 05-constructor-activity-start
$ git checkout 06-constructor-activity-solution
$ git checkout 07-arrow-functions
$ git checkout 08-arrow-func-activity-start
$ git checkout 08-arrow-func-activity-solution
$ git checkout 09-template-strings
$ git checkotu 10-es6-functions
```

## Summary
* `var`
    - function-scoped/globally-scoped
    - hoisted
    - redefinable/redeclarable
* `const` and `let`
    - block-scoped
    - not hoisted
    - redefineable or NOT redeclarable
* Activity I
* Constructor function
* Alternative constructor functions with `class` keyword
* Activity II
* Arrow functions
* Activity III
* Template Strings
* ES6 functions (bonus if we have time)
* Resources:
    - ["this" and Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md)
