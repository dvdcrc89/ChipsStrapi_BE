'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    toggle: async (ctx) =>{
        let entity;
        const { job_id, user_id } = ctx.request.body;
        const existingApplication =  await strapi.services['jobs-applications'].find({
            job: job_id,
            basic_user:user_id
        })
        if(existingApplication){
            entity = await strapi.services['jobs-applications'].delete({id: existingApplication.id})
        } else {
            entity = await strapi.services['jobs-applications'].create(ctx.request.body);
        }
       
        return sanitizeEntity(entity, { model: strapi.models['jobs-applications'] });
      }
};
