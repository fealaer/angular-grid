## Background information ##
we want to have a flexible data grid. Extendable and reusable

----------
## Grid features ##
- The grid itself has very limit features.
- No need to use any fancy ui-grid etc.
- Sorting A-Z optional for each column
- Filtering optional for each column
- The grid should render different column types
- Each column type we are going to code / define ourself

----------
## normal string column ##
- filtering, yes, string input field
- sorting button, yes A->Z | Z-A  
- if field is editable is configurable. 
- double click on string switches from display the string -> input with string
- press enter 'saves' the change -> input disappears -> only string visible

----------
## boolean column ##
- filtering yes, true | false checkbox
- sorting no
- if true -> make green background
- if false -> make red background
- on click -> toggle between true and false

----------
## Example ##
- Lets image we want to list / edit users. A user consist of
- username -> "normal string column", editable no
- description -> "normal string column", editable yes
- details -> "normal string column", editable
- email -> "normal string column"
- active -> "boolean column"
- locked -> 'boolean column'


----------
## data change logic ##
- on data changes we want to execute some code. On real live here will calles to some server, but lets keep it simple
- description, lets say we use random to not allow 20% of changes. 80% of changes we allow.
- details, lets allow everything except the word 'fuck'
- email field, lets keep it simple, lets only allow changes to happen if string contrains "@". No html5 email etc., because we use our generic string field

----------
## Generic ##
- the grid should be a generic directive
- column architecture as well. Should be as easy as possible to define new column typs which might have a complete different behavior
- the grid is decoupled from data and from the example. 
- the columns are decoupled from data /  code that deals the click (boolean) or the save event (string columns)
- In general we look for a generic solution that allows to create different use cases (same column typs, but maybe 5x string, no email at all etc.), different logic on data changes etc. as easy as possible.

----------
## Goal ##
- build angular 1.3 app with the desired feature
- put 5 example users data somewhere in our code to keep the data
- until the complete page (angular app is reloaded) the data changes should be persisted there
- create a page that uses our grid directive to allow all described feature to edit the user 
- create a second grid (on the same page). But this time we only show username + email (access the same data object as the first page), This time both fields are not editable at all. Please add one more column 'delete'. If clicked -> delete that record. Yes, this requires creating a new column type that allows to display a string + execute some code (decoupled) if clicked. 

----------
## technology ##
- really easy, no build system, no grunt, not even bower / requirejs etc.
- third party libs angular, checked in repo or grab from google cnd on the fly for example
- pur js, no coffee etc.
- for the eye, lets use bootstrap
- no tests for your code
- Nice angular code! Reusable and decoupled. 
