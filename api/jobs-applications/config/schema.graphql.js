 module.exports = {
    mutation: `jobsApplicationToggle(input: createJobsApplicationInput): Int`,
    query: `hasAppliedToJob(userid: ID!, jobid: ID!): Int`,
    resolver: {
      Query: {
        hasAppliedToJob: {
          description: 'Return if user has applied to job',
          resolver: 'application::jobs-applications.jobs-applications.hasApplied',
        },
      },
      Mutation: {
        jobsApplicationToggle: {
          description: 'Create/Delete jobs application',
          resolver: 'application::jobs-applications.jobs-applications.toggle',
        },
      },
    },
};