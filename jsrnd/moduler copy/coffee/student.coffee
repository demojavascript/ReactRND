College = require("college")
class Student
  constructor: ->
    @clg = new College()
    console.log @clg.getname()

module.exports = Student

stu = new Student()