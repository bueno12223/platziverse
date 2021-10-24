import Sequelize from 'sequelize';
import { setUpDatabase } from '../lib/db';

export const setUpAgentModel = (config: object) => {
    const sequelize = setUpDatabase(config)

    return sequelize.define('agent', {
        uuid: {
            type: Sequelize.STRING,
            allowNotNull: false,
        },
        userName: {
            type: Sequelize.STRING,
            allowNotNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNotNull: false,
        },
        hostname: {
            type: Sequelize.STRING,
            allowNotNull: false,
        },
        PID: {
            type: Sequelize.INTEGER,
            allowNotNull: false,
        },
        connected: {
            type: Sequelize.STRING,
            allowNotNull: false,
            defaultValue: false
        }

    })
}
