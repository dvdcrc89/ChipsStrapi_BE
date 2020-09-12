'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    toggle: async (ctx) =>{
        let entity;
        const { basic_user, job } = ctx.request.body;
        const [existingApplication] =  await strapi.services['jobs-applications'].find({
            job: job,
            basic_user:basic_user
        })
        if(existingApplication){
            entity = await strapi.services['jobs-applications'].delete({id: existingApplication.id})
        } else {
            entity = await strapi.services['jobs-applications'].create(ctx.request.body);
        }
       console.log(entity);
        return sanitizeEntity(entity, { model: strapi.models['jobs-applications'] });
      }
};
