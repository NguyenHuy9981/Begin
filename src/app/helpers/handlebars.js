const Handlebars = require('handlebars')

module.exports = {

    sum(a,b) { return a + b; },
sortable(field, sort) { 
  
  const icons = {
    default: 'oi oi-sort-ascending',
    asc: 'oi oi-sort-descending',
    desc: 'oi oi-sort-ascending'
  }

  const types = {
    default: 'asc',
    asc: 'desc',
    desc: 'asc'
  }

  const type = types[sort.type]
  const icon = icons[sort.type]
  
  const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`)
   const result = `<a href="${href}">
<span class="${icon}"></span>
</a>`  
return new Handlebars.SafeString(result)
}

}


