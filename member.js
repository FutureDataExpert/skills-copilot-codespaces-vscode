function skillsMember(skills) {
  return skills.map(skill => {
    return {
      id: skill.id,
      name: skill.name,
      level: skill.level,
      description: skill.description,
      members: skill.members,
      created_at: skill.created_at,
      updated_at: skill.updated_at
    }
  })
}
