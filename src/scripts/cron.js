const CronJob = require('cron').CronJob;

const DeletionRequest = require('../models/users/deletion-request');
const DeletionRequestService = require('../services/deletion-request-service');
const Op = require('sequelize').Op;

const createInfo = require('../logger').createInfo;

// https://stackoverflow.com/questions/24049164/javascript-get-timestamp-of-1-month-ago
const getMonthAgo = () => {
    const d = new Date();
    const m = d.getMonth();
    d.setMonth(d.getMonth() - 1);

    // If still in same month, set date to last day of
    // previous month
    if (d.getMonth() === m) d.setDate(0);
    d.setHours(0, 0, 0, 0);

    return d;
};

const job = new CronJob('0 0 * * *', async function () {
    const requests = await DeletionRequest.findAll({
        attributes: ['id', 'createdAt'],
        where: {
            createdAt: {
                [Op.lt]: getMonthAgo(),
            },
        },
        raw: true,
    });

    createInfo({
        message: `Scheduled task is started, there is ${requests.length} deletion requests elder than 30 days!`,
    });

    for (const request of requests) {
        await DeletionRequestService.acceptByID(request.id);
    }
});

module.exports = () => {
    job.start();
};
