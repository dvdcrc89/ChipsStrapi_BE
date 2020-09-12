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
            await strapi.services['jobs-applications'].delete({id: existingApplication.id})
            entity = false;
        } else {
            await strapi.services['jobs-applications'].create(ctx.request.body);
            entity = true;
        }
        return sanitizeEntity(entity , { model: strapi.models['jobs-applications'] });
      },

      hasApplied: async (ctx) =>{
        const { _userid: userid, _jobid: jobid } = ctx.params;
        
        console.log(userid, jobid,ctx.params);

        const [existingApplication] =  await strapi.services['jobs-applications'].find({
            job: jobid,
            basic_user:userid
        })
        let entity = !!existingApplication;
        return sanitizeEntity(entity , { model: strapi.models['jobs-applications'] });

      }


};
