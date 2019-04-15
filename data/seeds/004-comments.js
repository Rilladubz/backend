exports.seed = function(knex) {
  return knex('comments').insert([
    {
      user_id: 4,
      project_id: 2,
      comment: 'Look at this comment'
    },
    {
      user_id: 3,
      project_id: 1,
      comment: "Don't look at this comment"
    }
  ])
}
