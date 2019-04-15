exports.seed = function(knex) {
  return knex('projects').insert([
    {
      user_id: 3,
      name: 'SmartER Lot',
      description: 'Give me a call and ask',
      status: 'Pending'
    },
    {
      user_id: 4,
      name: "Kevin's Funhouse",
      description: 'Give me a call and ask',
      status: 'Pending'
    }
  ])
}
