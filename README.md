# zeppelin-flowchart-spell

Draw flowchart using [flowchart.js.org](http://flowchart.js.org)

## Usage

1. Enable `zeppelin-flowchart-spell` in the `/helium` page
2. Use `%flowchart` magic in notebooks

## Screenshots

![](https://raw.githubusercontent.com/1ambda/zeppelin-flowchart-spell/master/screenshots/flowchart-usage.png)

![](https://raw.githubusercontent.com/1ambda/zeppelin-flowchart-spell/master/screenshots/flowchart-enable.png)

## Text for testing

```
st=>start: Start|past:>http://www.google.com[blank]
e=>end: End|future:>http://www.google.com
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://www.google.com
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
```
