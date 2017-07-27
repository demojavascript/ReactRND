College = require("college")
class Student
  constructor: ->
    @clgg = new College()
    console.log @clgg.getname()

module.exports = Student

stu = new Student()