 module.exports = {
    mutation: `jobsApplicationToggle(input: createJobsApplicationInput): createJobsApplicationPayload`,
    resolver: {
      Mutation: {
        jobsApplicationToggle: {
          description: 'Create/Delete jobs application',
          resolver: 'application::jobs-applications.jobs-applications.toggle',
        },
      },
    },
};