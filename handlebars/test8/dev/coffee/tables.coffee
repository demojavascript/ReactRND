Handlebars.registerPartial 'btndelete', MyApp.templates.btndelete
Handlebars.registerHelper 'addOne', (a, options) ->
  parseInt(a) + 1

context = students: [
  {
    name: 'Task 1'
    age: 11
  }
  {
    name: 'Task 2'
    age: 14
  }
  {
    name: 'Task 3'
    age: 13
  }
  {
    name: 'Task 4'
    age: 12
  }
  {
    name: 'Task 5'
    age: 10
  }
]
template = MyApp.templates.table
$('#tableBox').html template(context)